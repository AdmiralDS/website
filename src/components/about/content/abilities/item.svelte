<script lang="ts">
  import Arrow from './arrow.svelte';
  // import type {AbilitiyName} from './switcher.svelte'

  export let name: string;
  export let number: number;
  export let label: string;
  export let active: boolean = false;
  export let onClick: (key: string) => void;

  const handleClick = () => {
    onClick(name);
  };
</script>

<div class="abilities-item" class:active on:click={handleClick}>
  <span>
    {number}
  </span>
  <span style="margin-right: auto;">
    {label}
  </span>
  {#if active}
    <Arrow />
  {/if}
</div>

<style>
  .abilities-item {
    cursor: pointer;
    height: 30px;
    padding: 20px 0;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 19px;

    color: var(--Grey, #7a8190);
    font-variant-numeric: lining-nums tabular-nums;

    /* 20/25 */
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 125% */
  }
  .abilities-item:not(:last-child) {
    border-bottom: 1px solid #e6eaf0;
  }

  .nav-item:hover:not(.active) {
    color: var(--Blue, #0d42ff);
  }

  .active {
    color: var(--Blue, #0d42ff);
  }
</style>
