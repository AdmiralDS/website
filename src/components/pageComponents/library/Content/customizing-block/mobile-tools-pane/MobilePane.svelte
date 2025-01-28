<script lang="ts">
  import { slide, fade } from 'svelte/transition';
  import { linear, quintOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import { Chips, Toggle } from '@components/atoms';
  import { AdmiralBorderRadius } from '@components/const';
  import Button from '@components/atoms/Button/Button.svelte';
  import ColorPicker, { ChromeVariant } from 'svelte-awesome-color-picker';
  import {
    ColorItem,
    ColorPickerInputItem,
    ColorPickerTextInputItem,
  } from '@components/pageComponents/library/Content/customizing-block/color-picker';
  import {
    activeColor,
    colorPickerValueHex,
    colorPickerValueHsv,
  } from '@components/pageComponents/library/Content/customizing-block/stores';

  export let onClose: () => void;
  export let onApply: () => void;
  let isDarkTheme: boolean = false;
  let currentRadiusIndex: number = 0;

  $: isPaneOpened = false;

  const handleCloseMenu = () => {
    isPaneOpened = false;
    setTimeout(onClose, 250);
  };

  onMount(() => (isPaneOpened = true));

  const handleClickOnTheme = () => {
    isDarkTheme = !isDarkTheme;
  };

  const handleRoundChipClick = (index: number) => (currentRadiusIndex = index);

  const handleApplyClick = () => {
    onApply();
  };

  const colors = ['yellow', 'blue', 'orange', 'violet'];
  const handleClickOnColor = (colorName: string) => activeColor.set(colorName);
</script>

{#if isPaneOpened}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="background" transition:fade={{ duration: 250, easing: quintOut }} on:click={handleCloseMenu} />
  <div class="pane-wrapper" transition:slide={{ duration: 250, easing: linear, axis: 'y' }}>
    <div class="theme-selector pane-item">
      Тёмная тема
      <Toggle checked={isDarkTheme} on:click={handleClickOnTheme} />
    </div>
    <div class="radius-selector pane-item">
      Стиль
      <div class="radius-chips-wrapper">
        {#each Object.entries(AdmiralBorderRadius) as [name, entry], i}
          <Chips on:click={() => handleRoundChipClick(i)} appearance="primary" selected={i === currentRadiusIndex}>
            {`${entry.radius} px`}
          </Chips>
        {/each}
      </div>
    </div>
    <div class="color-selector pane-item">
      Основной цвет
      <div class="colors-container">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div style="margin-top: -1px" on:click={() => handleClickOnColor('custom')}>
          <ColorPicker
            isAlpha={false}
            label=""
            components={{ ...ChromeVariant, input: ColorPickerInputItem, textInput: ColorPickerTextInputItem }}
            sliderDirection="horizontal"
            bind:hex={$colorPickerValueHex}
            bind:hsv={$colorPickerValueHsv}
            --focus-color="#E6EAF0"
            --cp-border-color="#E6EAF0"
            position="responsive"
          />
        </div>
        {#each colors as color}
          <ColorItem current={$activeColor === color} {color} on:click={() => handleClickOnColor(color)} />
        {/each}
      </div>
    </div>
    <Button class="apply-button" variant="primary" on:click={handleApplyClick}>Готово</Button>
  </div>
{/if}

<style>
  @import './mobilePane.css';
</style>
