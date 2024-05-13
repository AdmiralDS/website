<script>
  import { onMount } from 'svelte';
  import { ArrowButtons } from '@components/ui-kit/Svelte';
  import ReleaseCard from '@components/organisms/releases/ReleaseCard.svelte';
  import ReleaseTitleCard from '@components/organisms/releases/ReleaseTitleCard.svelte';

  let releasesArray = [];
  let rrr = [];
  let loaded = false;

  onMount(() => {
    fetch('https://registry.npmjs.org/@admiral-ds/react-ui')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let versions = data.versions;
        let times = data.time;
        Object.keys(versions).forEach((version) => {
          let versionTime = new Date(times[version])
            .toLocaleString('ru', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
            .slice(0, -3);
          releasesArray.unshift({
            tag: version,
            date: versionTime,
            link: `https://github.com/AdmiralDS/react-ui/releases/tag/v${version}`,
          });
        });
        rrr = releasesArray.slice(0, 3);
        loaded = true;
      });
  });
</script>

<div>
  <div class="releases-wrapper">
    <ReleaseTitleCard />
    {#each rrr as release}
      <ReleaseCard
        version={`v ${release.tag}`}
        date={release.date}
        info="Релиз"
        link={release.link}
        loading={!loaded}
      />
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
