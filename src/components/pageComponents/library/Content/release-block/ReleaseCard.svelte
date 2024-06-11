<script lang="ts">
  import InfoBlockIcon from './InfoBlockIcon.svelte';

  export let version: string = '';
  export let date: string = '';
  export let info: string = '';
  export let link: string = 'https://github.com/AdmiralDS/react-ui/releases';
  export let loading: boolean = false;
</script>

<div class="release-card" on:click={() => window.open(link, '_blank')} {...$$restProps}>
  <div class="release-card__header" class:skeleton={loading}>{version}</div>
  <div class="release-card__info" class:skeleton={loading}>
    <InfoBlockIcon skeleton={loading} />
    <div class="release-card__info-text">{date}</div>
    <div class="release-card__info-separator" class:skeletonSeparator={loading}></div>
    <div class="release-card__info-text">{info}</div>
  </div>
</div>

<style lang="css">
  @import './ReleaseCard.css';
</style>
