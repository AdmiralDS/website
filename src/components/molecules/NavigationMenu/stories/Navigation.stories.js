import NavigationMenu from '../NavigationMenu.svelte';
import { navItems } from './items';
import { ControlledTemplate } from './templates';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Molecules/NavigationMenu',
  component: NavigationMenu,
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    items: navItems,
  },
  name: 'Неконтролируемое состояние',
};

export const Secondary = {
  render: (props) => ({
    Component: ControlledTemplate,
    props: { ...props },
  }),
  name: 'Контролируемая навигация',
};
