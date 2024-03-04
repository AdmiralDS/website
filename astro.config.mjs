import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://AdmiralDS.github.io',
  base: '/website/',
  integrations: [svelte(), icon()],
});
