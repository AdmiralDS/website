/** @type { import('@storybook/svelte-vite').StorybookConfig } */
import { mergeConfig } from 'vite';
import path from 'path';

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/sveltekit',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {},
  async viteFinal(config, options) {
    const mergedConfig = mergeConfig(config, {
      // Add dependencies to pre-optimization
      resolve: {
        alias: {
          '@components': path.resolve(__dirname, '../src/components'),
        },
      },
      server: {
        fs: {
          // Allow serving files from one level up to the project root
          allow: ['..'],
        },
      },
    });

    return mergedConfig;
  },
};
export default config;
