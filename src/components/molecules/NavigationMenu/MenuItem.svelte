<script lang="ts">
  import { onMount } from 'svelte';
  import type { MenuItemProps } from './types.ts';

  /** Уникальный ключ, он же URL */
  export let key: string;
  export let label: string;
  export let children: Array<MenuItemProps> = [];
  /** Key активного элемента. Необходим именно key, так как он передается по дереву children */
  export let active: string | undefined = undefined;
  /** Текущий отступ относительно root */
  export let indent: number = 0;
  /** Признак включения анимации открытия/закрытия */
  export let animated: boolean = false;
  /** Признак открытого узла */
  export let opened: boolean = false;
  export let onClick: (key: string) => void;

  const GAP = 20;

  const handleClick = () => {
    onClick(key);
  };

  let childrenWrapper: HTMLDivElement;
  let maxHeight: string = '0';

  onMount(() => {
    if (childrenWrapper) {
      const sumChildrenHeight = Array.from(childrenWrapper.children).reduce((value, child) => {
        return value + child.clientHeight;
      }, 0);

      maxHeight = `${sumChildrenHeight + childrenWrapper.children.length * GAP}px`;
    }
  });
</script>

<div class="menu-item-wrapper" style="margin-left: {indent}px">
  <a class="menu-item" class:active={active === key} href={key} on:click|preventDefault={handleClick}>{label}</a>
  {#if children && children.length > 0}
    <div
      class="subitems-wrapper"
      class:animated
      style="max-height: {opened ? maxHeight : 0}"
      bind:this={childrenWrapper}
    >
      <div class="level-separator" />
      {#each children as child}
        <svelte:self {...child} {active} {onClick} indent={indent + 20} />
      {/each}
    </div>
  {/if}
</div>

<style>
  @import 'menuItem.css';
</style>
