<script lang="ts">
  import ColorPicker, { ChromeVariant } from 'svelte-awesome-color-picker';
  import { Toggle, Button } from '@components/atoms';
  import Item from './Item.svelte';
  import Info from '../admiral-components/Info.svelte';
  import { ColorItem, ColorPickerInputItem, ColorPickerTextInputItem } from '../color-picker';
  import { activeColor, colorPickerValueHex, colorPickerValueHsv } from '../stores.js';
  import { AdmiralBorderRadius, LINKS } from '@components/const';
  import type { AdmiralRadiusStyleName } from '@components/types';
  import type { ItemColor } from '../color-picker/types';
  import { MobileToolsPane, type AdmiralThemeProps } from '../mobile-tools-pane';

  let activeItem: AdmiralRadiusStyleName = 'geometrical';
  let isToolsPaneOpened: boolean = false;

  const handleClick = (key: string) => {
    activeItem = key as AdmiralRadiusStyleName;
  };

  // управление состоянием темы
  $: isDarkTheme = false;
  const handleClickOnTheme = () => (isDarkTheme = !isDarkTheme);

  $: borderRadius = AdmiralBorderRadius[activeItem].radius;

  // управление цветом
  const colors: Array<ItemColor> = ['yellow', 'blue', 'orange', 'violet'];
  const handleClickOnColor = (colorName: ItemColor) => activeColor.set(colorName);

  const handleToolsPaneClose = () => {
    isToolsPaneOpened = false;
  };

  const handleApplyMobileSetting = ({ isDarkTheme: isDark, radius, color }: AdmiralThemeProps) => {
    isDarkTheme = isDark;
    borderRadius = radius;
    activeColor.set(color);
  };

  const handleMobileToolsButtonClick = () => {
    isToolsPaneOpened = true;
  };
</script>

<div class="customization-menu">
  <div class="customization-items">
    {#each Object.entries(AdmiralBorderRadius) as [name, entry], i}
      <Item {name} number={i} {...entry} active={activeItem === name} onClick={handleClick} />
    {/each}
    <div class="customization-item">
      Тёмная тема
      <Toggle on:click={handleClickOnTheme} />
    </div>
    <div class="customization-item">
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
  </div>
  <div class="customization-links">
    <Button variant="primary" on:click={() => window.open(LINKS.PIXSO, '_blank')}>Pixso components</Button>
    <Button variant="primary" on:click={() => window.open(LINKS.STORYBOOK, '_blank')}>Storybook</Button>
  </div>
</div>
<div class="divider">
  <div class="separator" />
</div>
<div class="customization-info">
  <Info
    {isDarkTheme}
    color={$activeColor}
    colorPickerValueHex={$colorPickerValueHex}
    colorPickerValueHsv={$colorPickerValueHsv}
    {borderRadius}
    onMobileToolsButtonClick={handleMobileToolsButtonClick}
  />
</div>
{#if isToolsPaneOpened}
  <MobileToolsPane
    dark={isDarkTheme}
    {borderRadius}
    color={$activeColor}
    onApply={handleApplyMobileSetting}
    onClose={handleToolsPaneClose}
  />
{/if}

<style>
  @import 'switcher.css';
</style>
