<script lang="ts">
  import NamedSlider from './NamedSlider.svelte';

  const names = ['человек', 'человека', 'человек'];
  function declOfNum(n: number, titles: Array<string>) {
    return titles[
      n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2
    ];
  }
  export let value: number = 320;
  $: tagCaption = `${value} ${declOfNum(value, names)}`;
</script>

<NamedSlider
  bind:value
  {tagCaption}
  title="количество человек в команде, разрабатывающих UI"
  ticks={[0, 200, 400, 600, 800, 1000]}
  min={0}
  max={1000}
/>
