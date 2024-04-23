<script lang="ts">
  import type { YearPoint } from './types.ts';
  import EventItem from './EventItem.svelte';

  export let item: YearPoint;
</script>

<div class="year-item">
  <div class="point">
    <div class="text-block">
      <div class="year">
        {item.year}
      </div>
      <div class="info">
        {item.text}
      </div>
    </div>
  </div>
  <div class="line">
    {#if item.eventPoints}
      <div class="events-wrapper">
        {#each item.eventPoints as item}
          <EventItem {item} />
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  @import './year-item.css';
</style>
