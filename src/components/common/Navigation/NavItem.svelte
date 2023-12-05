<script lang="ts">
  import type { NavItemProps } from '../../../@types/common.ts';

  export let href: string;
  export let label: string;
  export let children: Array<NavItemProps> = [];
  export let currentActive: string;
  export let indent: number = 0;

  let opened: boolean;
  export let onClick: (key: string) => void;

  const handleClick = () => {
    if (children.length > 0) {
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
  .nav-item {
    height: 30px;
    padding: 0 12px;
    border-radius: 64px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;

    color: var(--Dark_grey, #35383a);

    text-decoration: none;
    text-align: center;
    /* 16/medium */
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
    text-rendering: geometricPrecision;
  }

  .nav-item:hover:not(.active) {
    color: var(--Blue, #0d42ff);
  }

  .active {
    background: var(--Blue, #0d42ff);
    color: #fff;
  }
</style>
