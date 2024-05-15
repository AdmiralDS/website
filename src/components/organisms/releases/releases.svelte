<script lang="ts">
  import { onMount } from 'svelte';
  import { ArrowButtons } from '@components/ui-kit/Svelte';
  import ReleaseCard from '@components/organisms/releases/ReleaseCard.svelte';
  import ReleaseTitleCard from '@components/organisms/releases/ReleaseTitleCard.svelte';

  const gapWidth = 20;
  const maxVisibleCardsOnPage = 3;
  let firstVisibleRelease: number = 0;

  const blankRelease = { tag: '', date: '', link: '' };
  const blankReleases = [blankRelease, blankRelease, blankRelease];
  let releasesInfo: any = [];
  let loaded = false;

  let cardsWrapper: HTMLDivElement;
  let cardsWrapperWidth: number | undefined;
  let scrollingContainer: HTMLDivElement;
  let scrolledToRight: boolean = false;
  let style: string = '';

  // управление промоткой карточек релизов
  $: prevDisabled = true;
  $: nextDisabled = false;
  $: releasesArray = loaded ? releasesInfo : blankReleases;
  $: cardWidth = Math.floor(((cardsWrapperWidth || 0) - gapWidth * 2) / maxVisibleCardsOnPage);
  $: step = cardWidth + gapWidth;
  $: left = firstVisibleRelease * step;

  const checkButtonsEnable = () => {
    if (!scrollingContainer) return;

    prevDisabled = firstVisibleRelease === 0;
    nextDisabled = firstVisibleRelease + maxVisibleCardsOnPage >= releasesArray.length;
    scrolledToRight = nextDisabled;
  };

  const handleNextClick = () => {
    if (!scrollingContainer) return;
    const newValue = firstVisibleRelease + maxVisibleCardsOnPage;
    const maxValue = releasesArray.length - maxVisibleCardsOnPage;
    firstVisibleRelease = newValue > maxValue ? maxValue : newValue;
  };

  const handlePrevClick = () => {
    if (scrolledToRight) scrolledToRight = false;
    const newValue = firstVisibleRelease - maxVisibleCardsOnPage;
    firstVisibleRelease = newValue < 0 ? 0 : newValue;
  };

  onMount(() => {
    if (cardsWrapper) {
      cardsWrapperWidth = cardsWrapper.clientWidth;
    }
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
        loaded = true;
      });
  });

  $: {
    const floatValue = scrolledToRight ? 'inline-end' : 'inline-start';
    const translateXValue = `-${left}px`;
    const leftValue = scrolledToRight ? `${left}px` : 0;
    style = `float: ${floatValue}; transform: translateX(${translateXValue}); left: ${leftValue}`;
    if (cardsWrapperWidth) {
      style = `${style}; grid-auto-columns: ${cardWidth}px`;
    }
    checkButtonsEnable();
  }
</script>

<div class="releases-wrapper">
  <ReleaseTitleCard />
  <div class="releases-block__cards-wrapper" bind:this={cardsWrapper} bind:clientWidth={cardsWrapperWidth}>
    {#if cardsWrapperWidth}
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
            style="grid-row: 1"
          />
        {/each}
      </div>
    {/if}
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
    flex: 1 0 75%;
    box-sizing: border-box;
  }

  .releases-block__scrolling-container {
    position: relative;
    width: fit-content;
    display: grid;
    gap: 20px;
    justify-content: space-between;
    transition: transform 300ms ease-in-out;
  }
</style>
