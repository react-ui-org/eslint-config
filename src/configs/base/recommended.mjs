import {
  configs as airbnbConfigs,
  helpers,
  plugins,
} from 'eslint-config-airbnb-extended';
import promisePlugin from 'eslint-plugin-promise';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

import baseRules from '../../rules/base.mjs';

const { allFiles } = helpers.extensions;

export default defineConfig([
  plugins.stylistic,
  plugins.importX,
  ...airbnbConfigs.base.recommended,
  {
    ...promisePlugin.configs['flat/recommended'],
    files: allFiles,
    name: 'react-ui/plugin/promise',
  },
  {
    files: allFiles,
    languageOptions: {
      globals: {
        ...globals.node,
      },
      /*
       * airbnb-extended sets `parserOptions.ecmaVersion: 2018`, which espree honours over
       * `languageOptions.ecmaVersion`. Without this override a JavaScript project cannot parse
       * anything newer: optional chaining, class fields, `import.meta` or top-level `await`.
       * TypeScript projects are not affected, the TypeScript parser ignores the option.
       */
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
    name: 'react-ui/base',
    rules: baseRules,
  },
]);
