/** @type { import('@storybook/svelte-vite').StorybookConfig } */
import { mergeConfig } from 'vite';
import path from 'path';

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/svelte-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, options) {
    const mergedConfig = mergeConfig(config, {
      // Add dependencies to pre-optimization
      resolve: {
        alias: {
          '@components': path.resolve(__dirname, '../src/components'),
        },
      },
    });

    console.log(mergedConfig);
    return mergedConfig;
  },
};
export default config;
