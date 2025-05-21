import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svelte-svgr';

export default defineConfig({
  build: {
    target: ['safari15', 'chrome58'],
  },
  ssr: {
    // Example: Force a broken package to skip SSR processing, if needed
    noExternal: ['@admiral-ds/*', 'styled-components'],
  },
  plugins: [sveltekit(), svgr()],
});
