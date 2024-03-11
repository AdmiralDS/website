<script lang="ts">
  import NamedSlider from './NamedSlider.svelte';

  export let value: number = 620000;
  $: tagCaption = `${value} ₽`;
</script>

<NamedSlider
  bind:value
  {tagCaption}
  title="Стоимость команды в год"
  ticks={[0, 500000, 1000000]}
  min={0}
  max={1000000}
  step={1000}
  suffix=" ₽"
/>
