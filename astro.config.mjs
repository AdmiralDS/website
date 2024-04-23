import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import react from '@astrojs/react';
import icon from 'astro-icon';
import svgr from 'vite-plugin-svelte-svgr';

// https://astro.build/config
export default defineConfig({
  site: 'https://AdmiralDS.github.io',
  base: '/website/',
  output: 'static',
  vite: {
    ssr: {
      // Example: Force a broken package to skip SSR processing, if needed
      noExternal: ['@admiral-ds/*', 'styled-components'],
    },
    plugins: [svgr()],
  },
  prefetch: false,
  integrations: [svelte(), react(), icon()],
});
