<script lang="ts">
  import { Slider } from '@components/ui-kit/Svelte';

  export let title: string = '';
  export let tagCaption: string = '';
  export let value: number;
</script>

<div class="slider_wrapper">
  <div class="slider_title">{title}</div>
  <div class="slider_tag">
    {tagCaption}
  </div>
  <Slider bind:value {...$$restProps} />
</div>

<style lang="css">
  @import './NamedSlider.css';
</style>
