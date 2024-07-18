<script lang="ts">
  import Logo from './admiral.svg';
  import LogoLight from './admiralLight.svg';
  import Cross from './cross.svg';
  import Lines from './lines.svg';
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import { NavigationMenu, type NavigationItem } from '@components/molecules';
  import { joinAbsoluteUrlPath } from '@components/tools';
  import { type Page } from './types';
  import { goto, afterNavigate } from '$app/navigation';
  import { base as BASE_URL } from '$app/paths'

  const TABLET_WIDTH = 1024;
  $: innerWidth = 0;
  $: isPaneOpened = false;


  export let items: Array<NavigationItem>;
  export let active: string | undefined;
  let prevActive: string | undefined;

  let opened: Array<string> = [];

  let currentPage: string = 'about';
  let previousPage: string;

  const getPageRoot = (page: Page) => {
    switch (page) {
      case '/':
        return '#ds-info';
      case '/users':
        return 'users/#users';
      case '/library':
        return 'library/#library';

      default:
        return '#ds-info';
    }
  };

  $: {
    afterNavigate(() => {
      const path = window.location.pathname.replace(BASE_URL, '');
      const page = getPageRoot(path);

      if (currentPage !== page) {
        active = page;
        currentPage = page;
      }
    });

    if (prevActive !== active) {
      prevActive = active;
    }

    if (previousPage !== currentPage) {
      previousPage = currentPage;
      opened = new Array<string>(1).fill(currentPage);
    }
  }

  onMount(() => {
    const page = getPageRoot(window.location.pathname);

    active = page;
    currentPage = page;
  });

  const onItemClick = (key: string, item: NavigationItem) => {
    const newPage = getPageRoot(`/${item.href}`);
    const basePath = joinAbsoluteUrlPath(window.location.origin, BASE_URL);

    const newActive = `${item.href ? item.href + '/' : ''}#${item.anchor}`;
    if (active !== newActive) {
      active = newActive;
    }

    currentPage = newPage;

    const url = new URL(basePath + '/' + item.href);
    if (item.anchor) url.hash = item.anchor;
    goto(url);
  };

  const handleClickOnMenuControl = () => isPaneOpened = !isPaneOpened;

  function fadeSlide(node, options) {
		const slideTrans = slide(node, options)
		return {
			duration: options.duration,
			css: t => `
				${slideTrans.css(t)}
				opacity: ${t};
			`
		};
	}
</script>

<svelte:window bind:innerWidth />

{#if innerWidth === TABLET_WIDTH}
  <div class="tablet-pane-container--closed" on:click={handleClickOnMenuControl}>
    <Lines />
    <LogoLight />
  </div>
{/if}

<nav class={`${innerWidth === TABLET_WIDTH && !isPaneOpened ? 'side-nav--hidden' : 'side-nav'}`} transition:slide="{{delay: 250, duration: 300, easing: quintOut, axis: 'x'}}">
  <NavigationMenu {items} bind:active {opened} {onItemClick}>
    <div slot="logo">
      {#if innerWidth === TABLET_WIDTH && isPaneOpened}
      <div class="tablet-pane-container--open" on:click={handleClickOnMenuControl}>
        <Cross />
        <Logo fill="#ffffff" />
      </div>
      {:else}
      <a href={BASE_URL}>
        <Logo fill="var(--Dark_grey, rgb(53, 56, 58))" />
      </a>
      {/if}
  </div>
  </NavigationMenu>
</nav>

<style>
  @import 'navigationPane.css';
</style>
