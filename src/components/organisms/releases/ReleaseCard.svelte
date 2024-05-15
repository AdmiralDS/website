<script lang="ts">
  import InfoBlockIcon from '@components/organisms/releases/InfoBlockIcon.svelte';

  export let version: string = '';
  export let date: string = '';
  export let info: string = '';
  export let link: string = 'https://github.com/AdmiralDS/react-ui/releases/tag/v8.3.0';
  export let loading: boolean = true;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
<div class="release-card" on:click={() => window.open(link, '_blank')} {...$$restProps}>
  <div class="release-card__header">{version}</div>
  <div class="release-card__info">
    <InfoBlockIcon />
    <div class="release-card__info-text">{date}</div>
    <div class="release-card__info-separator"></div>
    <div class="release-card__info-text">{info}</div>
  </div>
</div>

<style lang="css">
  @import './ReleaseCard.css';
</style>
