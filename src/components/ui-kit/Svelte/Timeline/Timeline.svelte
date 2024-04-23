<script lang="ts">
  import type { TimelineData } from './types.ts';
  import YearItem from './YearItem.svelte';

  export let items: TimelineData;
  export let element: HTMLDivElement = null;
</script>

<div class="timeline" bind:this={element}>
  {#each items as item}
    <YearItem {item} />
  {/each}
</div>

<style>
  .timeline {
    display: flex;
    justify-content: space-between;
  }
</style>
