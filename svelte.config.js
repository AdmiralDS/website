import { vitePreprocess } from '@astrojs/svelte';
import adapter from '@sveltejs/adapter-auto';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      '@components': 'src/components',
      '@types': 'src/@types',
    },
  },
};
