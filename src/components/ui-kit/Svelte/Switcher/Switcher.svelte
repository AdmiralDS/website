<script lang="ts">
  import Item from './Item.svelte';

  export let items: Record<string, string>;
  export let activeItem: string;
  export let showNumber: boolean = true;
  export let disabled: boolean = false;
  let className = '';
  export { className as class };

  const handleClick = (key: string) => {
    if (!disabled) activeItem = key;
  };
</script>

<div class="switcher-container {className}">
  <div class="switcher-items">
    {#each Object.entries(items) as [name, label], i}
      <Item {name} {showNumber} number={i + 1} {label} active={activeItem === name} onClick={handleClick} />
    {/each}
    <slot name="ext-controls" />
  </div>
  <div class="divider">
    <div class="separator" />
  </div>
  <div class="switcher-info">
    <slot name="info" />
  </div>
</div>

<style>
  .switcher-container {
    position: relative;
    display: flex;
    column-gap: 10px;
    margin-top: 40px;
  }

  .switcher-items {
    display: flex;
    flex: 0 1 33%;
    flex-direction: column;
    min-width: 33%;
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

  .switcher-info {
    flex: 1 1 auto;
  }
</style>
