<script lang="ts">
  import { SubcontentBlock } from '@components/templates';
  import { Tag, MobilePlug } from '@components/atoms';
  import { TABLET_MEDIUM_WIDTH } from '@components/const.ts';

  $: innerWidth = 0;

  const MainColorsText = 'Основные цвета';
  const AdditionalColorsText = 'Дополнительные цвета';
  const AdditionalColorsShortText = 'Дополнительные';
  const colorsList = [
    {
      name: 'Primary',
      code: '0062FF',
    },
    {
      name: 'Neutral',
      code: '23262D',
    },
    {
      name: 'Error',
      code: 'D92020',
    },
    {
      name: 'Success',
      code: '1BA049',
    },
    {
      name: 'Warning',
      code: 'FF5C22',
    },
    {
      name: 'Attention',
      code: 'FFC400',
    },
  ];
</script>

<svelte:window bind:innerWidth />

<SubcontentBlock heading={'Палитра'} id="palette">
  <svelte:fragment slot="description">
    Для настройки цветовой палитры дизайн-системы Aдмирал используются токены. Это позволяет изменять цвета элементов в
    зависимости от требований продукта
  </svelte:fragment>
  <svelte:fragment slot="tags">
    <Tag text={MainColorsText} />
    {#if innerWidth <= TABLET_MEDIUM_WIDTH}
      <Tag text={AdditionalColorsShortText} />
    {:else}
      <Tag text={AdditionalColorsText} />
    {/if}
  </svelte:fragment>

  <div class="palette-block__colors-container" slot="subcontent">
    <div class="palette-block__colors-wrapper">
      {#each colorsList as item}
        <div class="palette-tile" style="background: #{item.code}">
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

<style>
  @import './paletteBlock.css';
</style>
