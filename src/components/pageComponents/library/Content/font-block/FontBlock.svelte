<script>
import { SubcontentBlock } from '@components/templates';
import { Tag } from '@components/atoms';
import FontSwitcher from './FontSwitcher.svelte';

const fontList = ['Book', 'Medium', 'Semibold'];
</script>

<SubcontentBlock heading={'Шрифт'} id="fonts">
  <svelte:fragment slot="description">
    Admiral — основной шрифт дизайн-системы для web. Используется три начертания — Book, Medium и Semibold. Book, как
    основной стиль системы
  </svelte:fragment>
  <svelte:fragment slot="tags">
    {#each fontList as item}
      <Tag text={item} />
    {/each}
  </svelte:fragment>

  <FontSwitcher slot="subcontent" />
</SubcontentBlock>