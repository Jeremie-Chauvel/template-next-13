import nextJest from 'next/jest';

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: './' });

/**
 * @type {import(@jest/types).Config.InitialOptions}
 * Any custom config you want to pass to Jest
 */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jestAfterEnv.setup.ts'],
};

export default createJestConfig(config);
