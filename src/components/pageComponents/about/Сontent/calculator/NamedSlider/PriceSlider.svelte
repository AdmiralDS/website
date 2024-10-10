<script lang="ts">
  import NamedSlider from './NamedSlider.svelte';

  export let value: number = 50;
  $: tagCaption = `${value.toLocaleString()} ₽`;

  const prefixHandler = (tick: number, suffix: string) => {
    if (tick > 130) {
      return 'страшно считать'
    }

    return `${tick}`;
  }
</script>

<NamedSlider
  bind:value
  {tagCaption}
  title="Стоимость команды в год"
  ticks={[0, 10, 50, 130, 170]}
  min={0}
  max={180}
  step={10}
  suffix=" млн, ₽"
  tickNameHandler={prefixHandler}
/>
