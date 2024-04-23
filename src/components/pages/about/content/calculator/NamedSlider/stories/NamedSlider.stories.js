import NamedSlider from '../NamedSlider.svelte';
import SimpleExample from './SimpleExample.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/NamedSlider',
  component: NamedSlider,
};

export const Primary = {
  render: () => ({
    Component: SimpleExample,
  }),
  name: 'Slider сотрудников',
};
