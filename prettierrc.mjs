/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: 'es5',
  printWidth: 100,
  endOfLine: 'lf',
  useTabs: false,
  tabWidth: 2,
  semi: true,
  bracketSpacing: true,
  singleQuote: true,
  singleAttributePerLine: true,
  plugins: ['prettier-plugin-astro'],
};

export default config;
