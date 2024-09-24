<script>
  import './paletteBlock.css';
  import { SubcontentBlock } from '@components/templates';
  import { Tag, MobilePlug } from '@components/atoms';

  const colorTypeList = ['Основные цвета', 'Дополнительные цвета'];
  const colorsList = [
    {
      name: 'Primary',
      code: '#0062FF',
    },
    {
      name: 'Neutral',
      code: '#23262D',
    },
    {
      name: 'Error',
      code: '#D92020',
    },
    {
      name: 'Success',
      code: '#1BA049',
    },
    {
      name: 'Warning',
      code: '#FF5C22',
    },
    {
      name: 'Attention',
      code: '#FFC400',
    },
  ];
</script>

<SubcontentBlock heading={'Палитра'} id="palette">
  <svelte:fragment slot="description">
    Для настройки цветовой палитры дизайн-системы Aдмирал используются токены. Это позволяет изменять цвета элементов в
    зависимости от требований продукта
  </svelte:fragment>
  <svelte:fragment slot="tags">
    {#each colorTypeList as item}
      <Tag text={item} />
    {/each}
  </svelte:fragment>

  <div class="palette-block__colors-container" slot="subcontent">
    <div class="palette-block__colors-wrapper">
      {#each colorsList as item}
        <div class="palette-tile" style="background: {item.code}">
          <div class="palette-tile__color-name">{item.name}</div>
          <div class="palette-tile__color-code">HEX {item.code}</div>
        </div>
      {/each}
    </div>
    <div class="palette-block__plug-wrapper">
      <MobilePlug isTransparent />
    </div>
  </div>
</SubcontentBlock>
