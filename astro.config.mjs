import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import react from '@astrojs/react';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://AdmiralDS.github.io',
  base: '/website/',
  integrations: [
    svelte(),
    react(),
    icon(),
  ],
});
