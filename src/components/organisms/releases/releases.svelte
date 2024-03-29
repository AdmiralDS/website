<script>
  import { ArrowButtons } from '@components/ui-kit/Svelte';
  import ReleaseCard from '@components/organisms/releases/ReleaseCard.svelte';
  import ReleaseTitleCard from '@components/organisms/releases/ReleaseTitleCard.svelte';
  import releasesList from './releases-list.json';
</script>

<div>
  <div class="releases-wrapper">
    <ReleaseTitleCard />
    {#each releasesList as release}
      <ReleaseCard version={release.version} date={release.date} info={release.info} />
    {/each}
  </div>
  <ArrowButtons prevDisabled />
</div>

<style lang="css">
  .releases-wrapper {
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
</style>
