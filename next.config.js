const isTypeCheckingDisabled =
  process.env.DISABLE_TYPE_CHECKING === 'true' ? true : false;

const isEslintDisabled = process.env.DISABLE_LINTING === 'true' ? true : false;

const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    // This header will prevent any use of user's plugins on your website
    // If you need some permissions, change the parameter of the right permission
    key: 'Permissions-Policy',
    value:
      'accelerometer=(), geolocation=(), fullscreen=(), ambient-light-sensor=(), autoplay=(), battery=(), camera=(), display-capture=()',
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Automatically leverage output traces to reduce image size
  // https://nextjs.org/docs/advanced-features/output-file-tracing
  output: 'standalone',
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  typescript: { ignoreBuildErrors: isTypeCheckingDisabled },
  eslint: { ignoreDuringBuilds: isEslintDisabled },
  async headers() {
    return [
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.DEV_ANALYZE_BUNDLE === 'true',
});

module.exports = () => withBundleAnalyzer(nextConfig);
