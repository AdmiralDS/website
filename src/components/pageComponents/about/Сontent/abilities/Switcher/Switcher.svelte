<script lang="ts">
    import { Item } from './../Item';
    import { Info } from './../Info';
  
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
  <div class="abilities-info" >
    <Info name={activeItem} />
  </div>
  
  <style>
    @import 'switcher.css';
  </style>
  