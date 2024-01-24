<script lang="ts">
  import Item from "./item.svelte";
  import Info from "./info.svelte";

  const NamesArray = {
    theme: "Темизация",
    accessibility: "Аксессабилити",
    global: "Глобализация",
    mobile: "Мобильная версия"
  } as const;

  type AbilityName = keyof typeof NamesArray;

  let activeItem: AbilityName = "theme";

  const handleClick = (key: string) => {
    activeItem = key as AbilityName;
  };
</script>

<div class="block-container">
  <h2 class="block-title dark" id="abilities">Возможности</h2>
  <div class="abilities-container">
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
</div>

<style>
  .abilities-container {
    display: flex;
    column-gap: 10px;
    margin-top: 40px;
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
