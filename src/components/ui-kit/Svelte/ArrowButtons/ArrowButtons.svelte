<script lang="ts">
  import { IconArrowLeft, IconArrowRight } from '@components/ui-kit/Svelte';
</script>

<div class="arrows">
  <button class="arrow-button" disabled>
    <IconArrowLeft width="16" height="16" />
  </button>
  <button class="arrow-button">
    <IconArrowRight width="16" height="16" />
  </button>
</div>

<style lang="css">
  @import 'ArrowButtons.css';
</style>
