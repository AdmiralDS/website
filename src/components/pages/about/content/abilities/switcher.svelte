<script lang="ts">
  import Item from './item.svelte';
  import Info from './info.svelte';

  const NamesArray = {
    theme: 'Темизация',
    accessibility: 'Аксессабилити',
    global: 'Глобализация',
    mobile: 'Мобильная версия',
  } as const;

  type AbilityName = keyof typeof NamesArray;

  let activeItem: AbilityName = 'theme';

  const handleClick = (key: string) => {
    activeItem = key as AbilityName;
  };
</script>

<div class="abilities-items">
  {#each Object.entries(NamesArray) as [name, label], i}
    <Item {name} number={i + 1} {label} active={activeItem === name} onClick={handleClick} />
  {/each}
</div>
<div class="divider">
  <div class="separator" />
</div>
<div class="abilities-info">
  <Info name={activeItem} />
</div>

<style>
  .abilities-items {
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

  .abilities-info {
    flex: 1 1 auto;
  }
</style>
