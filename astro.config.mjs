// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // URL canonique du site — utilisée pour le sitemap, les balises canoniques et Open Graph.
  site: 'https://www.fabien-auffret.fr',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  // Optimisation : minification HTML et compression des assets activées par défaut.
  build: {
    inlineStylesheets: 'auto',
  },
});
