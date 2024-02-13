<script lang="ts">
  import NavItem from './NavItem.svelte';
  import Logo from './admiral.svelte';
  import { onMount } from 'svelte';
  import type { NavItemProps } from '@types';

  export let navItems: Array<NavItemProps>;
  export let defaultActive: string;
  let currentActive: string = defaultActive;

  let opened: Array<string> = [];

  $: if (defaultActive) {
    opened.push(defaultActive);
  }

  const handleClick = (key: string) => {
    currentActive = key;
  };

  const handleToggleOpenItem = (key: string) => {
    const index = opened.indexOf(key);
    if (index > -1) {
      opened.splice(index, 1);
    } else {
      console.log('add', key, opened);
      opened = [...opened, key];
      console.log(opened);
    }
  };

  console.log(opened, defaultActive);
</script>

<nav class="side-nav">
  <Logo />
  {#if navItems}
    <div class="side-nav-items">
      {#each navItems as item}
        <NavItem
          {...item}
          {currentActive}
          opened={opened.includes(item.href)}
          onClick={handleClick}
          onToggleOpen={handleToggleOpenItem}
        />
      {/each}
    </div>
  {/if}
</nav>

<style>
  @import './navigation.css';
</style>
