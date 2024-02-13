<script lang="ts">
  import type { NavItemProps } from '@types';

  export let href: string;
  export let label: string;
  export let children: Array<NavItemProps> = [];
  export let currentActive: string;
  export let onToggleOpen: (key: string) => void;
  export let indent: number = 0;

  export let opened: boolean;
  export let onClick: (key: string) => void;

  const handleClick = () => {
    if (children.length > 0) {
      onToggleOpen?.(href);
      opened = !opened;
    }
    onClick(href);
  };
</script>

<a
  class="nav-item"
  style="margin-left: {indent}px"
  class:active={currentActive === href}
  href={`#${href}`}
  on:click={handleClick}>{label}</a
>

{#if opened && children}
  {#each children as child}
    <svelte:self {...child} {currentActive} {onClick} indent={indent + 20} />
  {/each}
{/if}

<style>
    @import "./item.css";
</style>
