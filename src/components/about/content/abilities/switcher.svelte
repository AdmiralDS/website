<script lang="ts">
  import Item from './item.svelte';
  import Info from './info.svelte';

  const NamesArray = {
    theme: 'Темизация',
    accessibility: 'Аксессабилити',
    global: 'Глобализация',
    mobile: 'Мобильная версия',
  } as const;

  type AbilitiyName = keyof typeof NamesArray;

  let activeItem: AbilitiyName = 'theme';

  const handleClick = (key: string) => {
    console.log(key);

    activeItem = key as AbilitiyName;
  };
</script>

<h2 class="block-title" id="abilities">Возможности</h2>
<div class="abilities_container">
  <div class="abilities-items">
    {#each Object.entries(NamesArray) as [name, label], i}
      <Item {name} number={i + 1} {label} active={activeItem === name} onClick={handleClick} />
    {/each}
  </div>
  <div class="separator" />
  <div class="abilities-info">
    <Info name={activeItem} />
  </div>
</div>

<style>
  .abilities_container {
    margin-top: 20px;
    display: flex;
    width: 100%;
    column-gap: 10px;
  }
  .abilities-items {
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
  .abilities-info {
    flex: 0 1 auto;
  }
</style>
