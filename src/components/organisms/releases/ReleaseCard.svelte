<script lang="ts">
  import InfoBlockIcon from '@components/organisms/releases/InfoBlockIcon.svelte';

  export let version: String = '';
  export let date: String = '';
  export let info: String = '';
</script>

<div class="release-card">
  <div class="release-card__header">{version}</div>
  <div class="release-card__info">
    <InfoBlockIcon />
    {date}
    <div class="release-card__info-separator"></div>
    {info}
  </div>
</div>

<style lang="css">
  .release-card {
    box-sizing: border-box;
    padding: 10px;
    height: 71px;
    border-radius: 12px;
    border: none;
    background: var(--Light_blue, #f5f9fd);
  }
  .release-card__header {
    color: var(--Dark_grey, #35383a);
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 15px;
  }
  .release-card__info {
    color: var(--Grey, #7a8190);
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .release-card__info-separator {
    background: var(--Light_grey, #e6eaf0);
    width: 1px;
    height: 12px;
  }
</style>
