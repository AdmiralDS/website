import Timeline from '../Timeline.svelte';
import Example from './Example.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Timeline',
  component: Timeline,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  render: () => ({
    Component: Example,
  }),
  name: 'Таймлайн с данными',
};
