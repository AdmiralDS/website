<script lang="ts">
  import { onMount } from 'svelte';
  import { ArrowButtons } from '@components/ui-kit/Svelte';
  import ReleaseCard from '@components/organisms/releases/ReleaseCard.svelte';
  import ReleaseTitleCard from '@components/organisms/releases/ReleaseTitleCard.svelte';

  let releasesInfo: any = [];
  let rrr = [
    { tag: '', date: '', link: '' },
    { tag: '', date: '', link: '' },
    { tag: '', date: '', link: '' },
  ];
  let loaded = false;

  let scrollingContainer: HTMLDivElement;
  let left: number = 0;
  let step = 67 * 4;
  let scrolledToRight: boolean = false;
  let style: string = '';

  // управление промоткой карточек релизов
  $: prevDisabled = true;
  $: nextDisabled = false;
  $: releasesArray = loaded ? releasesInfo : rrr;

  const checkButtonsEnable = () => {
    if (!scrollingContainer) return;

    const parent = scrollingContainer.parentElement as HTMLDivElement;

    prevDisabled = left === 0;
    nextDisabled = left + parent.clientWidth >= scrollingContainer.clientWidth;
    scrolledToRight = nextDisabled;
  };

  const handleNextClick = () => {
    if (!scrollingContainer) return;
    const parent = scrollingContainer.parentElement as HTMLDivElement;

    const newValue = left + step;

    const maxValue = scrollingContainer.clientWidth - parent.clientWidth;

    left = newValue > maxValue ? maxValue : newValue;
  };

  const handlePrevClick = () => {
    if (scrolledToRight) scrolledToRight = false;

    left = left - step < 0 ? 0 : left - step;
  };

  onMount(() => {
    checkButtonsEnable();
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
          releasesInfo.unshift({
            tag: version,
            date: versionTime,
            link: `https://github.com/AdmiralDS/react-ui/releases/tag/v${version}`,
          });
        });
        //rrr = releasesArray.slice(0, 3);
        loaded = true;
      });
  });

  $: {
    const floatValue = scrolledToRight ? 'inline-end' : 'inline-start';
    const translateXValue = `-${left}px`;
    const leftValue = scrolledToRight ? `${left}px` : 0;
    style = `float: ${floatValue}; transform: translateX(${translateXValue}); left: ${leftValue}`;
  }
</script>

<div class="releases-wrapper">
  <ReleaseTitleCard />
  <div class="releases-block__cards-wrapper">
    <div
      class="releases-block__scrolling-container"
      bind:this={scrollingContainer}
      {style}
      on:transitionend={checkButtonsEnable}
    >
      {#each releasesArray as release}
        <ReleaseCard
          version={`v ${release.tag}`}
          date={release.date}
          info="Релиз"
          link={release.link}
          loading={!loaded}
        />
      {/each}
    </div>
  </div>
</div>
<ArrowButtons onPrevClick={handlePrevClick} onNextClick={handleNextClick} {prevDisabled} {nextDisabled} />

<style lang="css">
  .releases-wrapper {
    margin-bottom: 20px;
    display: flex;
    gap: 20px;
  }

  .releases-block__cards-wrapper {
    overflow: hidden;
  }

  .releases-block__scrolling-container {
    position: relative;
    width: fit-content;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    transition: transform 300ms ease-in-out;
  }
</style>
