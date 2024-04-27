<script lang="ts">
  import type { NavItemProps } from 'common';
  import { beforeNavigate } from '$app/navigation';

  export let href: string;
  export let anchor: string;
  export let label: string;
  export let children: Array<NavItemProps> = [];
  export let currentActive: string;
  export let onToggleOpen: (key: string) => void;
  export let indent: number = 0;

  export let opened: boolean = true;
  export let onClick: (key: string) => void;

  const handleClick = () => {
    
    if (children.length > 0) {
      onToggleOpen?.(id);
      opened = !opened;
    }
    onClick(id);
  };

  $: link = href ? `${href}/#${anchor}` : `${import.meta.env.BASE_URL}#${anchor}`;
  $: id = href ? `${href}/#${anchor}` : `${anchor}`;

  beforeNavigate(({ from, to }) => {
    // отсутствует видимость link
    // link = href ? `${href}/#${anchor}` : `${import.meta.env.BASE_URL}#${anchor}`;
});
</script>

<a
  class="nav-item"
  style="margin-left: {indent}px"
  class:active={currentActive === id}
  href={link}
  on:click|preventDefault={handleClick}>{label}</a
>

{#if currentActive === id && children}
  <div class={`${opened ? "children-opened" : "children-closed"}`}>
    {#each children as child}
      <svelte:self {...child} {currentActive} {onClick} indent={indent + 20} />
    {/each}
  </div>
{/if}

<style>
  @import './item.css';
</style>
