import { devDependencies } from '../helpers/files.mjs';

/*
 * Overrides of `eslint-config-airbnb-extended` and `eslint-plugin-promise`
 * applied to every file, regardless of the language.
 */
export default {
  '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: false }],
  '@stylistic/max-len': ['error', {
    code: 120,
    ignoreRegExpLiterals: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
    ignoreTrailingComments: true,
    ignoreUrls: true,
  }],
  '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
  '@stylistic/object-curly-newline': ['error', {
    consistent: true,
    minProperties: 2,
    multiline: true,
  }],
  '@stylistic/object-curly-spacing': ['error', 'always'],
  curly: ['error', 'all'],
  /*
   * Bundled `.js` and `.jsx` sources are imported without an extension because the bundler
   * resolves them. Node ESM resolves nothing, so `.mjs` and `.cjs` imports must carry it.
   */
  'import-x/extensions': ['error', 'ignorePackages', {
    cjs: 'always',
    js: 'never',
    jsx: 'never',
    mjs: 'always',
  }],
  // The upstream options with test files next to their components allowed, see the helper
  'import-x/no-extraneous-dependencies': ['error', {
    bundledDependencies: true,
    devDependencies,
    optionalDependencies: false,
    peerDependencies: true,
  }],
  // Renaming a default import is common and harmless, e.g. `import en from './translations/en'`
  'import-x/no-rename-default': 'off',
  /*
   * airbnb-extended turns on `noUselessIndex`, which asks for `./src` instead of `./src/index.mjs`.
   * Node ESM resolves no directories, and `import-x/extensions` above requires the `.mjs` extension.
   */
  'import-x/no-useless-path-segments': ['error', {
    commonjs: true,
    noUselessIndex: false,
  }],
  'import-x/order': ['error', {
    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
  }],
  /*
   * This rule and the two `promise` ones fire on patterns that are perfectly readable.
   * The noise trained people to disable the whole plugin.
   */
  'import-x/prefer-default-export': 'off',
  // An error, not a warning, because a warning is something nobody looks at
  'no-console': 'error',
  'no-undef-init': 'error',
  'promise/catch-or-return': 'off',
  'promise/no-nesting': 'off',
  'sort-keys': ['error', 'asc'],
};
