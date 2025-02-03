<script lang="ts">
  import { MOBILE_WIDTH, TABLET_WIDTH } from '@components/const';
  import NamedSlider from './NamedSlider.svelte';

  export let value: number = 50000000;
  $: tagCaption = `${value.toLocaleString()} ₽`;
  $: innerWidth = 0;

  const prefixHandler = (suffix: string) => {
    return (tick: number) => {
      if (tick === 0) {
        return '0';
      }

      return `${tick / 1000000}${suffix}`;
    };
  };
</script>

<svelte:window bind:innerWidth />

<NamedSlider
  bind:value
  {tagCaption}
  title="Стоимость команды в год"
  ticks={[0, 20000000, 60000000, 120000000, 180000000]}
  min={0}
  max={180000000}
  step={10000000}
  tickNameHandler={prefixHandler(innerWidth <= MOBILE_WIDTH ? ' млн' : ' 000 000')}
/>
