/*
 * Overrides of the React, React Hooks and JSX accessibility rules of
 * `eslint-config-airbnb-extended`.
 *
 * Two upstream decisions are kept on purpose:
 *
 * - `react/react-in-jsx-scope` and `react/jsx-uses-react` stay on although the
 *   automatic JSX runtime does not need `import React`. Turning them off makes
 *   that import unused in every existing file, so it waits for a major release.
 * - Every rule of `eslint-plugin-react-hooks` 7 is on, including the React
 *   Compiler ones such as `react-hooks/set-state-in-effect`. They find real
 *   problems; a targeted `eslint-disable` with a reason is the way around a
 *   legacy pattern, not turning the rule off.
 */
export default {
  'jsx-a11y/label-has-associated-control': ['error', {
    assert: 'either',
    controlComponents: [],
    depth: 25,
    labelAttributes: [],
    labelComponents: [],
  }],
  /*
   * Already set by `eslint-config-airbnb-extended`. Pinned here on purpose:
   * these are the two rules we are least willing to lose to an upstream change.
   */
  'react-hooks/exhaustive-deps': 'error',
  'react-hooks/rules-of-hooks': 'error',
  /*
   * This rule and `react/jsx-props-no-spreading` fight patterns component
   * libraries are built on, in particular forwarding the rest of the props to
   * the underlying element.
   */
  'react/destructuring-assignment': 'off',
  'react/function-component-definition': ['error', {
    namedComponents: 'arrow-function',
    unnamedComponents: 'arrow-function',
  }],
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-sort-props': ['error', {
    callbacksLast: false,
    ignoreCase: true,
    locale: 'en',
    noSortAlphabetically: false,
    reservedFirst: false,
    shorthandFirst: false,
    shorthandLast: false,
  }],
  /*
   * Without `allowAsProps` the rule fires on every render prop, a callback passed
   * as a prop and called by the parent. Those are not remounted; one project
   * reported 274 of them. With the option the rule still catches what it is for:
   * a component defined during render and used as a JSX element, which does
   * remount and lose its state.
   */
  'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
  /*
   * React 19 removed `defaultProps` of function components. Default values
   * belong to the parameter destructuring, where TypeScript checks them.
   */
  'react/require-default-props': 'off',
};
