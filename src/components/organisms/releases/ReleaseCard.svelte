<script lang="ts">
  import InfoBlockIcon from '@components/organisms/releases/InfoBlockIcon.svelte';
  import { Modal, Tag } from '@components/ui-kit/Svelte';

  export let version: String = '';
  export let date: String = '';
  export let info: String = '';

  let showModal = false;
</script>

<div
  class="release-card"
  on:click={() => {
    showModal = true;
    console.log(showModal);
  }}
>
  <div class="release-card__header">{version}</div>
  <div class="release-card__info">
    <InfoBlockIcon />
    {date}
    <div class="release-card__info-separator"></div>
    {info}
  </div>

  <Modal bind:showModal>
    <div>
      <div class="release-modal__name">Релиз v 2.1.5</div>
      <div class="release-modal__date">6 июля 2023</div>
      <div class="release-modal__separator"></div>
      <div class="release-modal__name">Изменения</div>
      <div class="release-modal__description">
        Slider. Новый компонент в нашей библиотеке. Представляет собой элемент управления, помогает легко выбрать
        значение, либо диапазон значений, перетаскивая ползунок по треку DropdownMenu/Multiselect. Добавлен параметр
        hideSelectedOptions, отвечающий за сокрытие выбранных элементов в dropdownMenu Tag/TagGroup. Добавлено состояние
        error для компонента Tag. Новый параметр invalidTags для TagGroup
      </div>
      <div class="release-modal__tag-container">
        <Tag text="Slider" />
        <Tag text="Multiselect" />
        <Tag text="TagGroup" />
      </div>
    </div>
  </Modal>
</div>

<style lang="css">
  @import './ReleaseCard.css';
</style>
