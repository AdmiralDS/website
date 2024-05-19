<script lang="ts">
  import Arrow from './arrow.svelte';

  export let name: string;
  export let number: number;
  export let label: string;
  export let active: boolean = false;
  export let showNumber: boolean = true;
  export let disabled: boolean = false;
  export let onClick: (key: string) => void;

  const handleClick = () => {
    onClick(name);
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
<div class="switcher-item" class:active class:disabled on:click={handleClick}>
  {#if showNumber}
    <span>
      {number}
    </span>
  {/if}
  <span style="margin-right: auto;">
    {label}
  </span>
  {#if active}
    <Arrow />
  {/if}
</div>

<style>
  @import './item.css';
</style>
