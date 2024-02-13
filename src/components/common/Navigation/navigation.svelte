<script lang="ts">
  import NavItem from './NavItem.svelte';
  import Logo from './admiral.svelte';
  import type { NavItemProps } from '@types';

  export let navItems: Array<NavItemProps>;
  export let defaultActive: string;
  let currentActive: string = defaultActive;

  let opened: Array<string> = [];

  $: if (defaultActive) {
    opened = [...opened, defaultActive];
  }

  const handleClick = (key: string) => {
    currentActive = key;
  };

  const handleToggleOpenItem = (key: string) => {
    const index = opened.indexOf(key);
    if (index > -1) {
      opened.splice(index, 1);
    } else {
      opened = [...opened, key];
    }
  };
</script>

<nav class="side-nav">
  <Logo />
  {#if navItems}
    <div class="side-nav-items">
      {#each navItems as item}
        <NavItem
          {...item}
          {currentActive}
          opened={opened.includes(item.href ? `${item.href}/#${item.anchor}` : `${item.anchor}`)}
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
