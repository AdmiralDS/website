<script lang="ts">
  import { slide, fade } from 'svelte/transition';
  import { linear, quintOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import { Chips, Toggle, Button } from '@components/atoms';
  import { AdmiralBorderRadius } from '@components/const';
  import ColorPicker, { ChromeVariant } from 'svelte-awesome-color-picker';
  import {
    ColorItem,
    ColorPickerInputItem,
    ColorPickerTextInputItem,
  } from '@components/pageComponents/library/Content/customizing-block/color-picker';
  import {
    colorPickerValueHex,
    colorPickerValueHsv,
  } from '@components/pageComponents/library/Content/customizing-block/stores';
  import type { ItemColor } from '../color-picker/types';
  import type { AdmiralThemeProps } from './types';
  import type { AdmiralRadiusValue } from '@components/types';

  export let onClose: () => void;
  export let onApply: (value: AdmiralThemeProps) => void;

  export let dark: boolean = false;
  export let borderRadius: AdmiralRadiusValue = 4;
  export let color: ItemColor = 'blue';

  $: isDarkTheme = dark;
  $: currentRadius = borderRadius;
  $: currentColor = color;

  $: isPaneOpened = false;

  const handleCloseMenu = () => {
    isPaneOpened = false;
    setTimeout(onClose, 250);
  };

  onMount(() => (isPaneOpened = true));

  const handleClickOnTheme = () => {
    isDarkTheme = !isDarkTheme;
  };

  const handleRoundChipClick = (value: AdmiralRadiusValue) => (currentRadius = value);

  const handleApplyClick = () => {
    onApply({
      isDarkTheme,
      radius: currentRadius,
      color: currentColor,
    });
    handleCloseMenu();
  };

  const colors: Array<ItemColor> = ['yellow', 'blue', 'orange', 'violet'];
  const handleClickOnColor = (colorName: ItemColor) => (currentColor = colorName);
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
        {#each Object.values(AdmiralBorderRadius) as entry}
          <Chips
            appearance="primary"
            selected={entry.radius === currentRadius}
            on:click={() => handleRoundChipClick(entry.radius)}
          >
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
          <ColorItem current={currentColor === color} {color} size={'l'} on:click={() => handleClickOnColor(color)} />
        {/each}
      </div>
    </div>
    <Button class="apply-button" variant="primary" on:click={handleApplyClick}>Готово</Button>
  </div>
{/if}

<style>
  @import './mobilePane.css';
</style>
