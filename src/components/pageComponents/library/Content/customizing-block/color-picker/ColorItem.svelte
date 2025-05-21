<script lang="ts">
  import type { ColorItemSize, ItemColor } from './types';

  export let current = false;
  export let color: ItemColor;
  export let size: ColorItemSize = 's';

  function getColorValue(colorName: ItemColor) {
    switch (colorName) {
      case 'custom':
        return 'no-repeat center / contain url("images/rainbow.svg")';
      case 'yellow':
        return '#FFC400';
      case 'orange':
        return '#FF5C22';
      case 'violet':
        return '#9640CA';
      case 'blue':
      default:
        return '#0D42FF';
    }
  }

  const outerClassList = ['color-item', 'color-item__outer'];
  const innerClassList = ['color-item', 'color-item__inner'];

  outerClassList.push(size === 's' ? 'small' : 'large');
  innerClassList.push(size === 's' ? 'small' : 'large');

  if (color === 'custom') {
    outerClassList.push('custom');
    innerClassList.push('custom');
  }

  const outerClassName = outerClassList.join(' ');
  const innerClassName = innerClassList.join(' ');
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class={outerClassName} style="background: {getColorValue(color)}" on:click>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class={innerClassName} aria-current={current} on:click></div>
</div>

<style lang="css">
  .color-item {
    box-sizing: border-box;
    border-radius: 50%;
    cursor: pointer;
  }
  .color-item__outer.small {
    width: 20px;
    height: 20px;
    padding: 3px;
  }
  .color-item__outer.large {
    width: 40px;
    height: 40px;
    padding: 3px;
  }
  .color-item__outer.large.custom {
    padding: 4px 3px;
  }

  .color-item__inner {
    background: var(--White, #fff);
  }
  .color-item__inner.small {
    width: 14px;
    height: 14px;
  }
  .color-item__inner.large {
    width: 34px;
    height: 34px;
    transition: all 300ms ease;
  }
  .color-item__inner.large.custom {
    width: 32px;
    height: 32px;
  }

  .color-item__inner.small[aria-current='true'] {
    margin-top: 2px;
    margin-left: 2px;
    width: 10px;
    height: 10px;
  }

  .color-item__inner.large[aria-current='true'] {
    margin-top: 7px;
    margin-left: 7px;
    width: 20px;
    height: 20px;
  }

  .color-item__inner.large.custom[aria-current='true'] {
    margin-top: 6px;
    margin-left: 6px;
  }
</style>
