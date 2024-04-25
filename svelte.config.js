import { vitePreprocess } from '@astrojs/svelte';
import adapter from '@sveltejs/adapter-auto';
import svgr from 'vite-plugin-svelte-svgr';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      '@components': 'src/components',
      '@types': 'src/@types',
    },
    vite: {
      plugins: [svgr()],
    },
  },
};
