import NamedSlider from '../NamedSlider.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/NamedSlider',
  component: NamedSlider,
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
    // suffix: ' ₽',
    value: 320,
    tagCaption: '320 человек',
    title: 'Количество сотрудников разрабатывающих UI',
  },
};
