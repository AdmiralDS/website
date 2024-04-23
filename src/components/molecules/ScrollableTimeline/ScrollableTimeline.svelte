<script lang="ts">
  import { onMount } from 'svelte';
  import { ArrowButtons, Timeline, type TimelineData } from '@components/ui-kit/Svelte';

  export let items: TimelineData;
  export let step = 200;

  let scrollingContainer: HTMLDivElement;
  let prevDisabled = true;

  let nextDisabled = true;
  let left: number = 0;
  let style: string = undefined;

  let scrolledToRight: boolean = false;

  function calcButtonsDisabled() {
    if (!scrollingContainer) return;

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
    nextDisabled = true;
    setTimeout(() => {
      calcButtonsDisabled();
    }, 300);
  };

  const handlePrevClick = () => {
    if (scrolledToRight) scrolledToRight = false;

    left = left - step < 0 ? 0 : left - step;
    prevDisabled = true;
    setTimeout(() => {
      calcButtonsDisabled();
    }, 300);
  };

  $: {
    const floatValue = scrolledToRight ? 'inline-end' : 'inline-start';
    const translateXValue = `-${left}px`;
    const leftValue = scrolledToRight ? `${left}px` : 0;
    style = `float: ${floatValue}; transform: translateX(${translateXValue}); left: ${leftValue}`;
  }
</script>

<svelte:window on:resize={calcButtonsDisabled} />
<div class="timeline-container">
  <div class="scrolling-container" bind:this={scrollingContainer} {style}>
    <Timeline {items} />
  </div>
</div>
<ArrowButtons {prevDisabled} {nextDisabled} onNextClick={handleNextClick} onPrevClick={handlePrevClick} />

<style>
  .timeline-container {
    width: 100%;
    overflow: hidden;
  }

  .scrolling-container {
    position: relative;
    width: fit-content;
    padding: 80px 0 135px;
    margin-bottom: 40px;
    transition: transform 300ms ease-in-out;
  }

  .timeline-container :global(.line) {
    width: 30vw;
    min-width: 250px;
    max-width: 500px;
  }
</style>
