<script lang="ts">
  import { onMount, tick } from 'svelte';
  import type { EventPoint } from './types.ts';

  export let item: EventPoint;
  export let container: HTMLElement = null;

  let pointDiv: HTMLDivElement;
  let textBlock: HTMLDivElement;

  let position: 'left' | 'right' = 'left';
  let tooltipStyle = '';
  let visible = false;

  function calcPosition() {
    if (!pointDiv) return;

    const pointRect = pointDiv.getBoundingClientRect();
    const containerRect = container?.getBoundingClientRect?.() ?? { x: 0, width: window.innerWidth };

    // Пока нет textBlock, выставим предварительную позицию
    position = 'left';

    tick().then(() => {
      if (!textBlock) return;

      const textRect = textBlock.getBoundingClientRect();

      // Проверка: влезает ли tooltip в контейнер
      if (textRect.x - containerRect.x + textRect.width > containerRect.width) {
        position = 'right';
      }

      // Пересчёт позиции после определения стороны
      const offsetY = 10; // отступ вверх
      const offsetX = 0;

      const top = pointRect.top - textBlock.offsetHeight - offsetY;
      const left = position === 'left' ? pointRect.left + offsetX : pointRect.right - textBlock.offsetWidth;

      tooltipStyle = `
        position: fixed;
        top: ${top}px;
        left: ${left}px;
        z-index: 9999;
        opacity: 1;
      `;

      visible = true;
    });
  }

  function hide() {
    visible = false;
  }

  onMount(() => {
    // на всякий случай, если хотим автопоказ
    calcPosition();
  });
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="event-point" on:mouseenter={calcPosition} on:mouseleave={hide} bind:this={pointDiv}></div>

{#if visible}
  <div class="text-block" bind:this={textBlock} style={tooltipStyle}>
    {item.text}
  </div>
{/if}
