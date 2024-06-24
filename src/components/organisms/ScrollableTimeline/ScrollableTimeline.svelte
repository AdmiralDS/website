<script lang="ts">
  import { onMount } from 'svelte';
  import { ArrowButtons, Timeline, type TimelineData } from '@components/molecules';

  /** Точки для отображения в формате @TimelineData*/
  export let items: TimelineData;
  /** Шаг прокрутки содержимого в пикселях */
  export let step = 200;

  let scrollingContainer: HTMLDivElement;
  let container: HTMLDivElement;
  let prevDisabled = true;

  let nextDisabled = true;
  let left: number = 0;
  let style: string = undefined;

  let scrolledToRight: boolean = false;
  let isMousePressed: boolean = false;
  let startX: number = 0;

  function calcButtonsDisabled() {
    const parent = scrollingContainer.parentElement as HTMLDivElement;

    prevDisabled = left === 0;
    nextDisabled = left + parent.clientWidth >= scrollingContainer.clientWidth;
    scrolledToRight = nextDisabled;
  }

  onMount(() => {
    calcButtonsDisabled();
  });

  const handleNextClick = () => {
    if (!scrollingContainer) return;
    const parent = scrollingContainer.parentElement as HTMLDivElement;

    const newValue = left + step;

    const maxValue = scrollingContainer.clientWidth - parent.clientWidth;

    left = newValue > maxValue ? maxValue : newValue;
  };

  const handlePrevClick = () => {
    if (scrolledToRight) scrolledToRight = false;

    left = left - step < 0 ? 0 : left - step;
  };

  $: {
    const floatValue = scrolledToRight ? 'inline-end' : 'inline-start';
    const translateXValue = `-${left}px`;
    const leftValue = scrolledToRight ? `${left}px` : 0;
    style = `float: ${floatValue}; transform: translateX(${translateXValue}); left: ${leftValue}`;
  }

  const mouseDownHandler = (e: MouseEvent) => {
    isMousePressed = true;
    startX = e.pageX;
  };

  const mouseUpHandler = () => {
    isMousePressed = false;
    calcButtonsDisabled();
  };

  const mouseMoveHandler = (e: MouseEvent) => {
    if (!isMousePressed) return;

    const delta = startX - e.pageX;
    startX = e.pageX;

    if (delta > 0) {
      const parent = scrollingContainer.parentElement as HTMLDivElement;
      const newValue = left + delta;
      const maxValue = scrollingContainer.clientWidth - parent.clientWidth;

      left = newValue > maxValue ? maxValue : newValue;
    } else {
      if (scrolledToRight) scrolledToRight = false;
      left = left + delta < 0 ? 0 : left + delta;
    }
    // console.log();
  };
</script>

<svelte:window on:resize={calcButtonsDisabled} on:mouseup={mouseUpHandler} on:mousemove={mouseMoveHandler} />
<div class="timeline-container" bind:this={container}>
  <div
    class="scrolling-container"
    class:grabbing={isMousePressed}
    bind:this={scrollingContainer}
    {style}
    on:transitionend={calcButtonsDisabled}
    on:mousedown={mouseDownHandler}
  >
    <Timeline {items} {container} />
  </div>
</div>
<ArrowButtons {prevDisabled} {nextDisabled} onNextClick={handleNextClick} onPrevClick={handlePrevClick} />

<style>
  .timeline-container {
    width: 100%;
    overflow: hidden;
    user-select: none;
  }

  .scrolling-container {
    position: relative;
    width: fit-content;
    padding: 80px 0 135px;
    margin-bottom: 40px;
    transition: transform 300ms ease-in-out;
    cursor: grab;
  }

  .scrolling-container.grabbing {
    cursor: grabbing;
  }

  .timeline-container :global(.line) {
    width: 30vw;
    min-width: 250px;
    max-width: 500px;
  }
</style>
