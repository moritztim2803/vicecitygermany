// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/site.config.ts';

export default defineConfig({
  // WICHTIG: vor dem Livegang auf die echte Domain setzen (für Sitemap + Canonical-URLs)
  site: SITE.url,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !/\/(impressum|datenschutz)\/$/.test(page) && !/\/test\//.test(page),
    }),
  ],
});
