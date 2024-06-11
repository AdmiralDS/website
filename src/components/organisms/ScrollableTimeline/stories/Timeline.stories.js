import ScrollableTimeline from '../ScrollableTimeline.svelte';
import history from './history.json';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Molecules/ScrollableTimeline',
  component: ScrollableTimeline,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
    // size: {
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large'],
    // },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    items: history,
  },
};
