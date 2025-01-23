<script lang="ts">
  import ColorPicker, { ChromeVariant } from 'svelte-awesome-color-picker';
  import { Toggle, Button } from '@components/atoms';
  import Item from './Item.svelte';
  import Info from '../admiral-components/Info.svelte';
  import { ColorItem, ColorPickerInputItem, ColorPickerTextInputItem } from '../color-picker'
  import { activeColor, colorPickerValueHex, colorPickerValueHsv } from '../stores.js';

  const NamesArray = {
    geometrical: { label: 'Геометрический стиль', radius: 4 },
    rounded: { label: 'Скругленный стиль', radius: 8 },
    fullRounded: { label: 'Круглый стиль', radius: 10 },
  } as const;

  type StyleName = keyof typeof NamesArray;

  let activeItem: StyleName = 'geometrical';

  const handleClick = (key: string) => {
    activeItem = key as StyleName;
  };

  // управление состоянием темы
  $: isDarkTheme = false;
  const handleClickOnTheme = () => (isDarkTheme = !isDarkTheme);

  // управление цветом
  const colors = ['yellow', 'blue', 'orange', 'violet'];
  const handleClickOnColor = (colorName: string) => activeColor.set(colorName);
</script>

<div>
  <div class="customization-menu">
    <div class="customization-items">
      {#each Object.entries(NamesArray) as [name, entry], i}
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
            />
          </div>
          {#each colors as color}
            <ColorItem current={$activeColor === color} {color} on:click={() => handleClickOnColor(color)} />
          {/each}
        </div>
      </div>
    </div>
    <div class="customization-links">
      <Button variant="primary">Pixso components</Button>
      <Button variant="primary" on:click={() => window.open('https://admiralds.github.io/react-ui/', '_blank')}>
        Storybook
      </Button>
    </div>
  </div>
</div>
<div class="divider">
  <div class="separator" />
</div>
<div class="customization-info">
  <Info
    styleName={activeItem}
    {isDarkTheme}
    color={$activeColor}
    colorPickerValueHex={$colorPickerValueHex}
    colorPickerValueHsv={$colorPickerValueHsv}
    borderRadius={NamesArray[activeItem].radius}
  />
</div>

<style>
  @import "switcher.css";
</style>
