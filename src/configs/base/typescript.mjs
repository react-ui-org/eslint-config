import {
  configs as airbnbConfigs,
  helpers,
  plugins,
} from 'eslint-config-airbnb-extended';
import perfectionist from 'eslint-plugin-perfectionist';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

import { testFiles } from '../../helpers/files.mjs';
import typescriptRules from '../../rules/typescript.mjs';

const { tsFiles } = helpers.extensions;

export default defineConfig([
  plugins.typescriptEslint,
  ...airbnbConfigs.base.typescript,
  {
    extends: [tseslint.configs.recommendedTypeChecked],
    files: tsFiles,
    name: 'react-ui/typescript',
    plugins: {
      perfectionist,
    },
    rules: typescriptRules,
  },
  {
    files: testFiles,
    name: 'react-ui/typescript/tests',
    rules: {
      // `expect(instance.method)` and Playwright fixtures pass methods unbound on purpose
      '@typescript-eslint/unbound-method': 'off',
    },
  },
]);
