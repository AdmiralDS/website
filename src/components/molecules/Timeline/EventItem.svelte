<script lang="ts">
  import { onMount } from 'svelte';
  import type { EventPoint } from './types.ts';

  export let item: EventPoint;
  export let container: HTMLElement = null;
  export let last: boolean = false;

  let textBlock: HTMLDivElement;
  let pointDiv: HTMLDivElement;

  let position: 'left' | 'right' = last ? 'right' : 'left';

  function calcPosition() {
    if (container && textBlock && !last) {
      const textRect: DOMRect = textBlock.getBoundingClientRect();
      const containerRect: DOMRect = container.getBoundingClientRect();

      if (textRect.x - containerRect.x + textRect.width > containerRect.width) {
        position = 'right';
      }
    }
  }

  onMount(() => {
    calcPosition();
  });

  const resetPosition = () => {
    if (pointDiv && !pointDiv.matches(':hover')) position = last ? 'right' : 'left';
  };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="event-point" on:mouseenter={calcPosition} bind:this={pointDiv}>
  <div
    class="text-block"
    bind:this={textBlock}
    style={position === 'left' ? 'left: 0' : 'right: 0'}
    on:transitionend={resetPosition}
  >
    {item.text}
  </div>
</div>

<style>
  @import './event-item.css';
</style>
