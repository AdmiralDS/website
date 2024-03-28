<script>
  import { ArrowButtons } from '@components/ui-kit/Svelte';
  import ReleaseCard from '@components/organisms/releases/ReleaseCard.svelte';
  import ReleaseTitleCard from '@components/organisms/releases/ReleaseTitleCard.svelte';
</script>

<div>
  <div class="releases-wrapper">
    <ReleaseTitleCard />
    <ReleaseCard version="v 2.1.5" date="6 июля 2023" info="Анонс" />
    <ReleaseCard version="v 2.0.0" date="6 июля 2023" info="Анонс" />
    <ReleaseCard version="v 1.1.3" date="6 июля 2023" info="Анонс" />
  </div>
  <ArrowButtons />
</div>

<style lang="css">
  .releases-wrapper {
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
</style>
