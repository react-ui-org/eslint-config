# eslint-config

Shareable [ESLint](https://eslint.org) config for JavaScript, TypeScript and
React projects. It extends
[eslint-config-airbnb-extended](https://github.com/eslint-config/airbnb-extended)
(the maintained successor of `eslint-config-airbnb`,
`eslint-config-airbnb-base` and `eslint-config-airbnb-typescript`) and
[eslint-plugin-promise](https://github.com/eslint-community/eslint-plugin-promise)
with [more strict rules](./src/docs/rules.md).

Flat config only, ESLint 9 and newer. Legacy `.eslintrc*` files are not
supported.

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

## Documentation

* [Installation](./src/docs/installation.md)
* [Configs](./src/docs/configs.md)
* [Rules](./src/docs/rules.md)
* [Migration from a legacy setup](./src/docs/migration.md)
* [Development](./src/docs/development.md)
* [Releasing](./src/docs/releasing.md)
