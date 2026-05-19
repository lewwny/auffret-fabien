import eslintPluginAstro from 'eslint-plugin-astro';

/** @type {import("eslint").Linter.Config[]} */
export default [
  { ignores: ['dist/', '.astro/', 'node_modules/'] },
  ...eslintPluginAstro.configs.recommended,
];
