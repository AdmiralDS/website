<script lang="ts">
  // import Info from "../../about/content/abilities/info.svelte";
  import Item from "./item.svelte";

  export let items: Record<string, string>;
  export let activeItem: string;

  const handleClick = (key: string) => {
    activeItem = key;
  };
</script>

<div class="switcher-container">
  <div class="switcher-items">
    {#each Object.entries(items) as [name, label], i}
      <Item {name} number={i + 1} {label} active={activeItem === name} onClick={handleClick} />
    {/each}
    <slot name="ext-controls" />
  </div>
  <div class="separator" />
  <div class="switcher-info">
    <slot name="info" />
  </div>
</div>

<style>
  .switcher-container {
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

  .separator {
    width: 1px;
    height: 100%;
    background-color: #e6eaf0;
  }

  .switcher-info {
    flex: 0 1 auto;
  }
</style>