<script lang="ts">
  import InfoBlockIcon from '@components/organisms/releases/InfoBlockIcon.svelte';
  import { Modal, Tag } from '@components/ui-kit/Svelte';

  export let version: String = '';
  export let date: String = '';
  export let info: String = '';
  export let description: String = '';

  let showModal = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
<div class="release-card" on:click={() => (showModal = true)}>
  <div class="release-card__header">{version}</div>
  <div class="release-card__info">
    <InfoBlockIcon />
    {date}
    <div class="release-card__info-separator"></div>
    {info}
  </div>

  <Modal bind:showModal>
    <div>
      <div class="release-modal__name">{version}</div>
      <div class="release-modal__date">{date}</div>
      <div class="release-modal__separator"></div>
      <div class="release-modal__name">Изменения</div>
      <div class="release-modal__description">{description}</div>
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
