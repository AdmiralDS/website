<script lang="ts">
  import type { TimelineData } from 'common';
  import Item from './item.svelte';

  export let items: TimelineData;
</script>

<div class="timeline">
  {#each items as item}
    <Item {item} />
  {/each}
</div>

<style>
  .timeline {
    padding: 100px 0 175px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
</style>
