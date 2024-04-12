<script lang="ts">
  import { ArrowButtons, Toggle } from '@components/ui-kit/Svelte';
  import {
    IconArrowLeft,
    IconArrowRight,
    DragOutline,
    EquallyOutline,
    ErrorOutline,
    ErrorTriangleOutline,
  } from '@components/ui-kit/Svelte';

  const dummyDataForSlider = [
    {
      name: 'Drag Out',
      icon: DragOutline,
    },
    {
      name: 'Equally',
      icon: EquallyOutline,
    },
    {
      name: 'Error Out',
      icon: ErrorOutline,
    },
    {
      name: 'Triangle',
      icon: ErrorTriangleOutline,
    },
    {
      name: 'Triangle',
      icon: ErrorTriangleOutline,
    },
    {
      name: 'Error Out',
      icon: ErrorOutline,
    },
    {
      name: 'Equally',
      icon: EquallyOutline,
    },
    {
      name: 'Error Out',
      icon: ErrorOutline,
    },
    {
      name: 'Drag Out',
      icon: DragOutline,
    },
    {
      name: 'Triangle',
      icon: ErrorTriangleOutline,
    },
    {
      name: 'Equally',
      icon: EquallyOutline,
    },
  ];

  // управление состоянием solid
  $: isSolid = false;
  const handleClickOnSolid = () => (isSolid = !isSolid);

  // управление промоткой иконок
  const STEP = 4;
  $: currentIndex = 0;
  $: isLeftEnabled = false;
  $: isRightEnabled = true;
  $: elsToShow = dummyDataForSlider.slice(currentIndex, currentIndex + STEP);

  const checkButtonsEnable = () => {
    isRightEnabled = currentIndex + STEP < dummyDataForSlider.length;
    isLeftEnabled = currentIndex > 0;
  };

  const handleClickOnRightArrow = () => {
    if (dummyDataForSlider.length - currentIndex > STEP) {
      currentIndex = currentIndex + STEP;
    }
    checkButtonsEnable();
  };

  const handleClickOnLeftArrow = () => {
    currentIndex = Math.max(currentIndex - STEP, 0);
    checkButtonsEnable();
  };
</script>

<div class="icons-block__icon-tile">
  <div class="icons-block__tile-header">
    <div class="icons-block__tile-heading">Actions</div>
    <div class="icons-block__switcher-wrapper">
      <Toggle on:click={handleClickOnSolid} />
      <div class="icons-block__switcher-title">Solid</div>
    </div>
  </div>

  <div class="icons-block__icons-container">
    <div class="icons-block__icons-wrapper">
      {#each elsToShow as { name, icon }}
        <div class="icons-block__icon-container">
          <div class="icons-block__icon-wrapper">
            <svelte:component this={icon}></svelte:component>
          </div>
          {name}
        </div>
      {/each}
    </div>
  </div>

  <ArrowButtons
    onPrevClick={handleClickOnLeftArrow}
    onNextClick={handleClickOnRightArrow}
    prevDisabled={!isLeftEnabled}
    nextDisabled={!isRightEnabled}
  />
</div>

<style lang="css"></style>
