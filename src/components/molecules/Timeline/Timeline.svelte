<script lang="ts">
  import type { TimelineData } from './types.ts';
  import YearItem from './YearItem.svelte';

  /** Точки для отображения в формате @TimelineData*/
  export let items: TimelineData;
  /** Предоставляет ссылку на DOM элемент таймлайна*/
  export let element: HTMLDivElement = null;
  /** Ссылка на контейнер, относительно которого отображается таймлайн.
   * Необходимо для позиционирования текста подсказок, если контейнер нет,
   * то текст всегда будет отображаться справа от точки */
  export let container: HTMLElement = null;
</script>

<div class="timeline" bind:this={element}>
  {#each items as item}
    <YearItem {item} {container} />
  {/each}
</div>

<style>
  .timeline {
    display: flex;
    justify-content: space-between;
  }
</style>
