<script lang="ts">
  import { onMount } from 'svelte';
  import MenuItem from './MenuItem.svelte';

  import type { NavigationItem, MenuItemProps } from './types.ts';
  import { joinAbsoluteUrlPath } from '@components/tools';

  export let items: Array<NavigationItem>;
  export let active: string | undefined = undefined;
  export let opened: Array<string> | undefined = undefined;

  export let onItemClick: ((key: string, item: NavigationItem) => void) | undefined = undefined;

  let animated: boolean = false;

  let prevItems: Array<NavigationItem>;
  let menuItems: Array<MenuItemProps> = [];

  let prevOpened: Array<string> | undefined;
  let internalOpenedState: Array<string> = [];

  const openedStateIsControlled = opened !== undefined;

  let mapKeyToNavItem: Record<string, MenuItemProps> = {};
  let mapKeyToItem: Record<string, NavigationItem> = {};

  const convertItem = (item: NavigationItem, baseHref: string | undefined = undefined): MenuItemProps => {
    const href = joinAbsoluteUrlPath(baseHref ?? '', item.href ?? '');

    const navItem: MenuItemProps = {
      key: joinAbsoluteUrlPath(href, item.anchor ? `#${item.anchor}` : ''),
      label: item.label,
    };

    if (item.children && item.children.length) {
      navItem.children = item.children.map((child) => convertItem(child, href));
    }

    mapKeyToItem[navItem.key] = { ...item, href };
    mapKeyToNavItem[navItem.key] = navItem;

    return navItem;
  };

  const handleClick = (key: string) => {
    active = key;

    if (!openedStateIsControlled) {
      const index = internalOpenedState.indexOf(key);

      if (index > -1) {
        internalOpenedState.splice(index, 1);
        internalOpenedState = [...internalOpenedState];
      } else {
        const navItem = mapKeyToNavItem[key];
        if (navItem && navItem.children) {
          internalOpenedState = [...internalOpenedState, key];
        }
      }
    } else {
      const item = mapKeyToItem[key];
      if (item && onItemClick) {
        onItemClick(key, item);
      }
    }
  };

  $: {
    if (prevItems !== items) {
      prevItems = items;
      menuItems = items.map((item) => convertItem(item));
    }

    if (prevOpened !== opened) {
      internalOpenedState = [...(opened ?? [])];
      prevOpened = opened;
    }
  }

  onMount(() => {
    setTimeout(() => {
      animated = true;
    });
  });
</script>

<slot name="logo" />
{#if menuItems}
  <div class="menu-items-container">
    {#each menuItems as item}
      <MenuItem {...item} {active} {animated} opened={internalOpenedState.includes(item.key)} onClick={handleClick} />
    {/each}
  </div>
{/if}

<style>
  .menu-items-container {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: flex-start;
  }
</style>
