<script lang="ts">
  import type { TimelineData } from "../../../../@types/common.ts";
  import Item from './item.svelte'

  export let items: TimelineData;
</script>

<div class="timeline">
  {#each items as item}
    <Item item={item}/>
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
