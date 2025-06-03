/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  endOfLine: 'lf',
  printWidth: 80,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
