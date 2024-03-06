<script lang="ts">
  import Item from './item.svelte';
  import Info from './info.svelte';
  import Toggle from '@components/ui-kit/Svelte/Toggle/toggle.svelte';
  import Button from '@components/ui-kit/Svelte/Button/Button.svelte';

  const NamesArray = {
    geometrical: '4 px  Геометрический стиль',
    rounded: '8 px  Скругленный стиль',
    fullRounded: '12 px  Круглый стиль'
  } as const;

  type StyleName = keyof typeof NamesArray;

  let activeItem: StyleName = 'geometrical';

  const handleClick = (key: string) => {
    activeItem = key as StyleName;
  };

  // управление состоянием темы
  $: isDarkTheme = false;
  const handleClickOnTheme = () => isDarkTheme = !isDarkTheme;

  // управление цветом
  // TODO: добавить разноцветный, в макете svg, не имепортировалась корректно
  const colors = ['yellow', 'blue', 'orange', 'violet']
  $: activeColor = 'yellow';
  const handleClickOnColor = (colorName: string) => activeColor = colorName;
</script>

<div>
<div class="customization-items">
  {#each Object.entries(NamesArray) as [name, label], i}
    <Item {name} number={i} {label} active={activeItem === name} onClick={handleClick} />
  {/each}
  <div class="customization-item">
    Тёмная тема
    <Toggle on:click={handleClickOnTheme} />
  </div>
  <div class="customization-item">
    Основной цвет
    <div class="colors-container">
      {#each colors as color}
        <div class={`color-item ${color}`} on:click={() => handleClickOnColor(color)}></div>
      {/each}
    </div>
  </div>
  <div class="customization-links">
    <Button variant='primary'>Figma components</Button>
    <Button variant='primary'>Storybook</Button>
  </div>
</div>
</div>
<div class="divider">
  <div class="separator" />
</div>
<div class="customization-info">
  <Info styleName={activeItem} isDarkTheme={isDarkTheme} color={activeColor} />
</div>

<style>
    .customization-items{
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

  .customization-item:not(:last-child){
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

  .color-item {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  .color-item.yellow {
    outline: 3px solid rgb(255, 196, 0);
  }

  .color-item.blue {
    outline: 3px solid rgb(13, 66, 255);
  }

  .color-item.orange {
    outline: 3px solid rgb(255, 92, 34);
  }

  .color-item.violet {
    outline: 3px solid rgb(150, 64, 202);
  }
</style>
