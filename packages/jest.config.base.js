/* eslint-disable */
const { compilerOptions } = require('./tsconfig.cjs.json')

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testMatch: ['**/*.spec.ts', '!**/*.browser.spec.ts', '!**/*.integ.spec.ts'],
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