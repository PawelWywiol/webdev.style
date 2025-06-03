// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import remarkLazyLoading from './src/plugins/remarkLazyLoading';

export default defineConfig({
  site: 'https://webdev.style',
  base: '/',
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'pl'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkLazyLoading],
  },
});
