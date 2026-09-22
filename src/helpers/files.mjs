import { helpers } from 'eslint-config-airbnb-extended';

const {
  jsExtensions,
  jsExtensionsWithReact,
  tsExtensions,
  tsExtensionsWithReact,
} = helpers.extensions;

// `['.js', '.jsx']` becomes the `{js,jsx}` group used in the glob patterns
const group = (extensions) => `{${extensions.map((extension) => extension.slice(1)).join(',')}}`;

const upstreamGroup = group([...jsExtensions, ...tsExtensions]);
const reactGroup = group([...jsExtensionsWithReact, ...tsExtensionsWithReact]);

/*
 * airbnb-extended builds the patterns of files allowed to import dev dependencies from the
 * extensions without React, so a `.test.jsx` or `.spec.tsx` file next to its component cannot
 * import a testing library. This is the upstream list with `.jsx` and `.tsx` added to every
 * pattern. It becomes a no-op once upstream includes them.
 */
export const devDependencies = helpers
  .getDevDepsList('javascript')
  .map((pattern) => pattern.replaceAll(upstreamGroup, reactGroup));

// Test files, the subset of the patterns above that is about tests rather than tooling configs
export const testFiles = [
  'test/**',
  'tests/**',
  'spec/**',
  '**/__tests__/**',
  '**/__mocks__/**',
  `**/*{.,_}{test,spec}.${reactGroup}`,
];
