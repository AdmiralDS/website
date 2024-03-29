<script lang="ts">
  import { IconArrowLeft, IconArrowRight } from '@components/ui-kit/Svelte';
  export let onNextClick: () => void;
  export let onPrevClick: () => void;
  export let nextDisabled: boolean;
  export let prevDisabled: boolean;
</script>

<div class="arrows">
  <button class="arrow-button" disabled={prevDisabled} on:click={onPrevClick}>
    <IconArrowLeft width="16" height="16" />
  </button>
  <button class="arrow-button" disabled={nextDisabled} on:click={onNextClick}>
    <IconArrowRight width="16" height="16" />
  </button>
</div>

<style lang="css">
  @import 'ArrowButtons.css';
</style>
