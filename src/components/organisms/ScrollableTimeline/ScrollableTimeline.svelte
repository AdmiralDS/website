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

  const touchDownHandler = (e: TouchEvent) => {
    isMousePressed = true;
    startX = e.changedTouches[0].pageX;
  };

  const mouseUpHandler = () => {
    isMousePressed = false;
    calcButtonsDisabled();
  };

  const touchUpHandler = () => {
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
  };

  const touchMoveHandler = (e: TouchEvent) => {
    if (!isMousePressed) return;

    const delta = startX - e.changedTouches[0].pageX;
    startX = e.changedTouches[0].pageX;

    if (delta > 0) {
      const parent = scrollingContainer.parentElement as HTMLDivElement;
      const newValue = left + delta;
      const maxValue = scrollingContainer.clientWidth - parent.clientWidth;

      left = newValue > maxValue ? maxValue : newValue;
    } else {
      if (scrolledToRight) scrolledToRight = false;
      left = left + delta < 0 ? 0 : left + delta;
    }
  };
</script>

<svelte:window
  on:resize={calcButtonsDisabled}
  on:mouseup={mouseUpHandler}
  on:mousemove={mouseMoveHandler}
  on:touchend={touchUpHandler}
  on:touchmove={touchMoveHandler}
/>
<div class="timeline-container" bind:this={container}>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="scrolling-container"
    class:grabbing={isMousePressed}
    bind:this={scrollingContainer}
    {style}
    on:transitionend={calcButtonsDisabled}
    on:mousedown={mouseDownHandler}
    on:touchstart={touchDownHandler}
  >
    <Timeline {items} {container} />
  </div>
</div>
<div class="timeline-container__arrows-wrapper">
  <ArrowButtons {prevDisabled} {nextDisabled} onNextClick={handleNextClick} onPrevClick={handlePrevClick} />
</div>

<style>
  @import 'ScrollableTimeline.css';
</style>
