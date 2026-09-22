/*
 * Rules applied to TypeScript files only. The one area that brings its own
 * plugin: `sort-keys` only understands object literals, and neither ESLint core
 * nor `typescript-eslint` sorts type declarations alphabetically
 * (`@typescript-eslint/member-ordering` sorts by kind of member). That is what
 * `eslint-plugin-perfectionist` is here for.
 */
import { devDependencies } from '../helpers/devDependencies.mjs';

export default {
  '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  '@typescript-eslint/consistent-type-exports': 'error',
  '@typescript-eslint/consistent-type-imports': 'error',
  '@typescript-eslint/no-deprecated': 'error',
  // The base rule with the TypeScript extensions added, all `never`: TypeScript resolves `./foo` to `foo.ts` itself
  'import-x/extensions': ['error', 'ignorePackages', {
    cjs: 'always',
    cts: 'never',
    js: 'never',
    jsx: 'never',
    mjs: 'always',
    mts: 'never',
    ts: 'never',
    tsx: 'never',
  }],
  // airbnb-extended sets the rule again for TypeScript files, with the same gap in the patterns
  'import-x/no-extraneous-dependencies': ['error', {
    bundledDependencies: true,
    devDependencies,
    optionalDependencies: false,
    peerDependencies: true,
  }],
  'perfectionist/sort-enums': ['error', {
    ignoreCase: true,
    type: 'alphabetical',
  }],
  'perfectionist/sort-interfaces': ['error', {
    ignoreCase: true,
    type: 'alphabetical',
  }],
  'perfectionist/sort-object-types': ['error', {
    ignoreCase: true,
    type: 'alphabetical',
  }],
};
