/* eslint-disable */
const { compilerOptions } = require('./tsconfig.json')

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testMatch: ['**/*.test.ts', '!**/*.browser.test.ts', '!**/*.integ.test.ts'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: {
          ...compilerOptions,
          noImplicitAny: false,
          strictNullChecks: false,
        }
      }
    ]
  }
}
