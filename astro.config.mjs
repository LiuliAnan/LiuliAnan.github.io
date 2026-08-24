import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://liulianan.github.io',
  output: 'static',
  integrations: [sitemap()]
});
