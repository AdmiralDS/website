<script lang="ts">
  import type { EventPoint } from './types.ts';

  export let item: EventPoint;
</script>

<div class="event-point">
  <div class="text-block">
    {item.text}
  </div>
</div>

<style>
  @import './event-item.css';
</style>
