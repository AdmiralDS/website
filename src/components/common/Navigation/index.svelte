<script lang="ts">
  import NavItem from './NavItem.svelte';
  import type { NavItemProps } from '../../../@types/common.ts';
  import Logo from './admiral.svelte';

  export let navItems: Array<NavItemProps>;
  let currentActive: string;

  const handleClick = (key: string) => {
    currentActive = key;
  };
</script>

<nav class="side-nav">
  <Logo />
  {#if navItems}
    <div class="side-nav-items">
      {#each navItems as item}
        <NavItem {...item} onClick={handleClick} {currentActive} />
      {/each}
    </div>
  {/if}
</nav>

<style>
  .side-nav {
    flex: 1 0 20.6%;
    box-sizing: border-box;
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 328px;
    background: var(--Light_blue, #f5f9fd);
    padding-top: 36px;
    padding-left: 40px;
  }
  .side-nav-items {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: flex-start;
  }
</style>
