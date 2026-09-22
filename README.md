# eslint-config

![npm](https://img.shields.io/npm/v/@react-ui-org/eslint-config)

Shareable [ESLint](https://eslint.org) config for JavaScript, TypeScript and
React projects. It builds on
[eslint-config-airbnb-extended](https://github.com/eslint-config/airbnb-extended)
and other community configs and adds a few stricter rules of its own.

Flat config only, ESLint 9. Legacy `.eslintrc*` files are not supported.

## Installation

```sh
npm install --save-dev eslint @react-ui-org/eslint-config
```

All plugins are bundled. Create `eslint.config.mjs` and spread the parts the
project needs, in this order:

```js
import { configs } from '@react-ui-org/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...configs.base.recommended,
  ...configs.react.recommended,
  ...configs.base.typescript,
  ...configs.react.typescript,
]);
```

A JavaScript project spreads the first one, a React project the first two. The
`typescript` configs are additions to the `recommended` ones, not replacements.
See [Configs](./src/docs/configs.md) for what each part contains and why the
order matters.

### Overrides

Put project blocks after the shared configs. Always give them a `name`, it is
what [ESLint Config Inspector](https://github.com/eslint/config-inspector)
shows when tracing a rule. A TypeScript project, for example:

```js
import { configs } from '@react-ui-org/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...configs.base.recommended,
  ...configs.react.recommended,
  ...configs.base.typescript,
  ...configs.react.typescript,
  {
    name: 'my-project/rules',
    rules: {
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    },
  },
  {
    files: ['**/*.test.ts'],
    name: 'my-project/tests',
    rules: {
      '@typescript-eslint/unbound-method': 'off',
    },
  },
]);
```

## Contributing

Please check out the [Development Guide](./src/docs/development.md). It
describes how the package is laid out, how to add a rule and how to verify a
change. All contributions must pass linting before being merged.

## Releasing

The release process is fully automated. If you plan to release a new version,
please follow the [Releasing Guide](./src/docs/releasing.md), which explains
the version bump and how the changelog is assembled.
