<script lang="ts">
  import { ArrowButtons, Toggle } from '@components/ui-kit/Svelte';
  import {
    DragOutline,
    EquallyOutline,
    ErrorOutline,
    ErrorTriangleOutline,
    DragSolid,
    EquallySolid,
    ErrorSolid,
    ErrorTriangleSolid,
  } from '@components/ui-kit/Svelte';

  const iconsOutline = [
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
      name: 'Drag Out1',
      icon: DragOutline,
    },
    {
      name: 'Equally1',
      icon: EquallyOutline,
    },
    {
      name: 'Error Out1',
      icon: ErrorOutline,
    },
    {
      name: 'Triangle1',
      icon: ErrorTriangleOutline,
    },
  ];

  const iconsSolid = [
    {
      name: 'Drag',
      icon: DragSolid,
    },
    {
      name: 'Equally',
      icon: EquallySolid,
    },
    {
      name: 'Error',
      icon: ErrorSolid,
    },
    {
      name: 'Triangle',
      icon: ErrorTriangleSolid,
    },
    {
      name: 'Drag1',
      icon: DragSolid,
    },
    {
      name: 'Equally1',
      icon: EquallySolid,
    },
    {
      name: 'Error1',
      icon: ErrorSolid,
    },
    {
      name: 'Triangle1',
      icon: ErrorTriangleSolid,
    },
  ];

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
      name: 'Drag Out',
      icon: DragSolid,
    },
    {
      name: 'Equally',
      icon: EquallySolid,
    },
    {
      name: 'Error Out',
      icon: ErrorSolid,
    },
    {
      name: 'Triangle',
      icon: ErrorTriangleSolid,
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
  $: iconsArray = isSolid ? iconsSolid : iconsOutline;
  $: elsToShow = iconsArray.slice(currentIndex, currentIndex + STEP);

  const checkButtonsEnable = () => {
    isRightEnabled = currentIndex + STEP < iconsArray.length;
    isLeftEnabled = currentIndex > 0;
  };

  const handleClickOnRightArrow = () => {
    if (iconsArray.length - currentIndex > STEP) {
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
