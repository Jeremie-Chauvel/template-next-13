# Install dependencies only when needed
FROM node:18.12-alpine3.17 AS pnpm-installed
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN corepack enable && corepack prepare pnpm@7.9.1 --activate

# Rebuild the source code only when needed
FROM pnpm-installed AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
ENV DISABLE_TYPE_CHECKING=${DISABLE_TYPE_CHECKING:-false}
ENV DISABLE_LINTING=${DISABLE_LINTING:-false}
RUN pnpm build

# Production image, copy all the files and run next
FROM node:18.12-alpine3.17@sha256:a136ed7b0df71082cdb171f36d640ea3b392a5c70401c642326acee767b8c540 AS runner
RUN apk add --no-cache dumb-init
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/next.config.js ./
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# handling runtime env var clientside
COPY --chown=nextjs:nodejs .env.* ./
COPY --chown=nextjs:nodejs gen_env.sh ./

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV APP_ENV production

CMD /app/gen_env.sh $APP_ENV && dumb-init node server.js
