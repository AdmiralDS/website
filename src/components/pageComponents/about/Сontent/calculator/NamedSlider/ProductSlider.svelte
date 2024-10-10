<script lang="ts">
  import NamedSlider from './NamedSlider.svelte';

  const names = ['продукт', 'продукта', 'продуктов'];
  function declOfNum(n: number, titles: Array<string>) {
    return titles[
      n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2
    ];
  }

  export let value: number = 20;
  $: tagCaption = `${value} ${declOfNum(value, names)}`;
</script>

<NamedSlider 
  bind:value {tagCaption} 
  title="Количество продуктов" 
  ticks={[0, 10, 20, 30, 40, 50]} min={0} max={50} step={10}
/>
