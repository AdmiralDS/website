<script lang="ts">
  import Arrow from './arrow.svelte';

  export let name: string;
  export let number: number;
  export let radius: number;
  export let label: string;
  export let active: boolean = false;
  export let onClick: (key: string) => void;

  const handleClick = () => {
    onClick(name);
  };
</script>

<div
  role="button"
  tabindex={number}
  class="customization-item"
  class:active
  on:keypress={handleClick}
  on:click={handleClick}
>
  <span
    style="margin-right: auto;
    display: flex;
    column-gap: 26px;"
  >
    <span>{`${radius} px`}</span>{label}
  </span>
  {#if active}
    <Arrow />
  {/if}
</div>

<style>
  .customization-item {
    cursor: pointer;
    height: 30px;
    padding: 0 0 20px 0;

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
  .customization-item:not(:first-child) {
    padding-top: 20px;
  }

  .customization-item:not(:last-child) {
    border-bottom: 1px solid #e6eaf0;
  }

  .active {
    color: var(--Blue, #0d42ff);
  }
</style>
