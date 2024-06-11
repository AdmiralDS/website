<script>
  import { SubcontentBlock } from '@components/templates';
  import { Tag } from '@components/atoms';
  import IconsSwitcher from './IconSwitcher.svelte';
  const textList = ['Outline', 'Solid', '380+ иконок'];
</script>

<SubcontentBlock heading={'Иконки'} id="icons">
  <svelte:fragment slot="description">
    В дизайн-системе используется два размера иконок: в 20 px и 24 px, в зависимости от размера компонента. Все иконки
    выполнены в двух стилях — Outline и Solid
  </svelte:fragment>
  <svelte:fragment slot="tags">
    {#each textList as item}
      <Tag text={item} />
    {/each}
  </svelte:fragment>

  <IconsSwitcher slot="subcontent" />
</SubcontentBlock>
