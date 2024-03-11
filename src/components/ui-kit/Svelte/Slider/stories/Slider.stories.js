import Slider from '../Slider.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Slider',
  component: Slider,
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
    ticks: [0, 200, 400, 600, 800, 1000],
    step: 10,
    min: 0,
    max: 1000,
    suffix: ' ₽',
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
