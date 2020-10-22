/* eslint-disable no-undef */
module.exports = {
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/components$1',
    '^@pages(.*)$': '<rootDir>/pages$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testMatch: ['**/__tests__/*.test.(ts|tsx)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(css|sass|scss)$': 'jest-css-modules-transform',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig: 'jest.tsconfig.json',
    },
  },
};
