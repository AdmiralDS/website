<script lang="ts">
  import { onMount } from 'svelte';
  import { Button } from '@components/atoms';
  import { ArrowButtons } from '@components/molecules';
  import ReleaseCard from './ReleaseCard.svelte';
  import ReleaseTitleCard from './ReleaseTitleCard.svelte';

  let timer: number;

  const gapWidth = 20;
  const maxVisibleCardsOnPage = 3;
  let firstVisibleRelease: number = 0;

  const blankRelease = { tag: '', date: '', link: 'https://github.com/AdmiralDS/react-ui/releases' };
  const blankReleases = [blankRelease, blankRelease, blankRelease];
  let releasesInfo: any = [];
  let loading = true;

  let cardsWrapper: HTMLDivElement;
  let cardsWrapperWidth: number | undefined;
  let scrollingContainer: HTMLDivElement;
  let scrolledToRight: boolean = false;
  let style: string = '';

  // управление промоткой карточек релизов
  $: prevDisabled = true;
  $: nextDisabled = false;
  $: releasesArray = loading ? blankReleases : releasesInfo;
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
            tag: `v ${version}`,
            date: versionTime,
            link: `https://github.com/AdmiralDS/react-ui/releases/tag/v${version}`,
          });
        });
        loading = false;
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

  const handleResize = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cardsWrapperWidth = cardsWrapper.clientWidth;
    }, 300);
  };
</script>

<svelte:window on:resize={handleResize} />
<div class="releases-wrapper">
  <ReleaseTitleCard />
  <div class="releases-block__cards-wrapper" bind:this={cardsWrapper}>
    {#if cardsWrapperWidth}
      <div
        class="releases-block__scrolling-container"
        bind:this={scrollingContainer}
        {style}
        on:transitionend={checkButtonsEnable}
      >
        {#each releasesArray as release}
          <ReleaseCard
            {loading}
            version={release.tag}
            date={release.date}
            info="Релиз"
            link={release.link}
            style="grid-row: 1"
          />
        {/each}
      </div>
    {/if}
  </div>
</div>
<div class="releases-block__buttons-wrapper">
  <ArrowButtons onPrevClick={handlePrevClick} onNextClick={handleNextClick} {prevDisabled} {nextDisabled} />
</div>
<Button
  style="width: fit-content; margin-top: 40px"
  variant="primary"
  on:click={() => window.open('https://github.com/AdmiralDS/react-ui/releases', '_blank')}
>
  История обновлений
</Button>

<style lang="css">
 @import './releases.css';
</style>
