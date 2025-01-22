<script lang="ts">
  import { onMount } from 'svelte';
  import { NavigationMenu, type NavigationItem } from '@components/molecules';
  import { joinAbsoluteUrlPath } from '@components/tools';
  import { goto, afterNavigate } from '$app/navigation';
  import { base as BASE_URL } from '$app/paths';

  export let items: Array<NavigationItem>;
  export let active: string | undefined = undefined;
  let prevActive: string | undefined;

  let opened: Array<string> = [];

  let currentPage: string = 'about';
  let previousPage: string;

  const getPageRoot = (page: string) => {
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
    const path = window.location.pathname.replace(BASE_URL, '');
    const page = getPageRoot(path);

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
    $$restProps.onItemClick?.(key, item);
  };
</script>

<nav class={`side-nav${$$restProps.class ? ` ${$$restProps.class}` : ''}`}>
  <NavigationMenu {items} bind:active {opened} {onItemClick}>
    <slot slot="logo" />
  </NavigationMenu>
  <slot name="ext-info" />
</nav>

<style>
  @import 'navigationPane.css';
</style>
