<script lang="ts">
  import Logo from './admiral.svg';
  import { onMount } from 'svelte';
  import { NavigationMenu, type NavigationItem } from '@components/molecules';
  import { joinAbsoluteUrlPath } from '@components/tools';

  export let items: Array<NavigationItem>;
  export let active: string | undefined = undefined;
  let prevActive: string | undefined;
  // let currentActive: string = defaultActive;

  let opened: Array<string> = [];

  $: {
    if (prevActive !== active) {
      prevActive = active;
    }
  }

  onMount(() => {
    if (active) {
      opened = new Array<string>(1).fill(active);
    }
  });

  // const handleClick = (key: string) => {
  //   currentActive = key;
  // };

  const handleToggleOpenItem = (key: string) => {
    const index = opened.indexOf(key);
    if (index > -1) {
      opened.splice(index, 1);
    } else {
      opened = [...opened, key];
    }
  };

  const BASE_URL = import.meta.env.BASE_URL;

  const onItemClick = (key: string, item: NavigationItem) => {
    const currentHref = window.location.href;
    const basePath = joinAbsoluteUrlPath(window.location.origin, BASE_URL);
    const page = currentHref.replace(basePath, '').replace(window.location.hash, '');

    console.log(page, item.href);

    if (currentHref !== item.href) {
      const url = new URL(basePath + '/' + item.href);
      if (item.anchor) url.hash = item.anchor;
      url.searchParams.set('prev', currentHref);

      console.log(url.toString());

      const params = new URLSearchParams({
        prevHref: currentHref,
      }).toString();

      // window.location.assign(`${key}?${params}`);
      window.location.assign(url);
    } else {
      window.location.assign(key);
    }
    console.log(key);
  };
</script>

<nav class="side-nav">
  <NavigationMenu {items} bind:active {opened} {onItemClick}>
    <a href={BASE_URL} slot="logo">
      <Logo fill="var(--Dark_grey, rgb(53, 56, 58))" />
    </a>
  </NavigationMenu>
</nav>

<style>
  @import 'navigationPane.css';
</style>
