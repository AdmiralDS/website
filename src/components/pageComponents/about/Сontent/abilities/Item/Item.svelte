<script lang="ts">
  import Arrow from '../arrow.svelte';
  import { MOBILE_WIDTH } from '@components/const';

  $: innerWidth = 0;

  export let name: string;
  export let number: number;
  export let label: string;
  export let active: boolean = false;
  export let onClick: (key: string) => void;

  const handleClick = () => {
    onClick(name);
  };
</script>

<svelte:window bind:innerWidth />
<div
  role="button"
  tabindex={number}
  class="abilities-item"
  class:active
  on:keypress={handleClick}
  on:click={handleClick}
>
  <div>
    {number}
  </div>
  <div class="abilities-item__title">
    {label}
  </div>
  {#if innerWidth > MOBILE_WIDTH}
    {#if active}
      <Arrow />
    {:else}
      <div class="abilities-item__arrow-plug" />
    {/if}
  {/if}
</div>

<style>
  @import 'item.css';
</style>
