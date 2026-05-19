/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  singleQuote: true,
  semi: true,
  tabWidth: 2,
  trailingComma: 'es5',
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: { parser: 'astro' },
    },
  ],
};
