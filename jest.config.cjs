
/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',

  testMatch: [
    '<rootDir>/src/jest/**/*.test.ts',
    '<rootDir>/src/jest/**/*.test.tsx',
  ],

  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.jest.json',
      },
    ],
  },

  clearMocks: true,
  restoreMocks: true,
};
