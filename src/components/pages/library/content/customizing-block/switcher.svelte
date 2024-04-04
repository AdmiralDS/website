<script lang="ts">
  import Item from './item.svelte';
  import Info from './info.svelte';
  import { Toggle, Button } from '@components/ui-kit/Svelte';
  import ColorItem from '@components/pages/library/content/customizing-block/ColorItem.svelte';

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
  // TODO: добавить разноцветный, в макете svg, не импортировалась корректно
  const colors = ['custom', 'yellow', 'blue', 'orange', 'violet'];
  $: activeColor = 'blue';
  const handleClickOnColor = (colorName: string) => (activeColor = colorName);
</script>

<div>
  <div>
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
          {#each colors as color}
            <ColorItem current={activeColor === color} {color} on:click={() => handleClickOnColor(color)} />
          {/each}
        </div>
      </div>
    </div>
    <div class="customization-links">
      <Button variant="primary">Figma components</Button>
      <Button variant="primary">Storybook</Button>
    </div>
  </div>
</div>
<div class="divider">
  <div class="separator" />
</div>
<div class="customization-info">
  <Info styleName={activeItem} {isDarkTheme} color={activeColor} borderRadius={NamesArray[activeItem].radius} />
</div>

<style>
  .customization-items {
    display: flex;
    flex-direction: column;
  }

  .divider {
    width: 1px;
  }
  .separator {
    width: 1px;
    position: absolute;
    height: 100%;
    background-color: #e6eaf0;
  }

  .customization-info {
    flex: 0 1 auto;
  }

  .customization-item {
    cursor: pointer;
    height: 30px;
    padding: 0 0 20px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 19px;

    color: var(--Grey, #7a8190);
    font-variant-numeric: lining-nums tabular-nums;

    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
  }
  .customization-item:not(:first-child) {
    padding-top: 20px;
  }

  .customization-item:not(:last-child) {
    border-bottom: 1px solid #e6eaf0;
  }

  .customization-links {
    display: flex;
    gap: 5px;
    margin-top: 42px;
    margin-bottom: 88px;
  }

  .colors-container {
    display: flex;
    gap: 10px;
  }
</style>
