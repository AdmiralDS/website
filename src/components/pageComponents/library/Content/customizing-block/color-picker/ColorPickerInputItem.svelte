<script lang="ts">
  import ColorItem from './ColorItem.svelte';
  import { activeColor } from '../stores.js';
  import { MOBILE_WIDTH } from '@components/const';

  /** DOM element of the label wrapper */
  export let labelElement: HTMLLabelElement;

  /** hex color */
  export let hex: string | undefined;

  /** input label */
  export let label: string;

  /** input name, useful in a native form */
  export let name: string | undefined = undefined;

  function noop() {
    /* prevent browser color picker from opening unless javascript is broken */
  }
  $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<!-- svelte-ignore a11y-no-noninteractive-element-interactions a11y-click-events-have-key-events -->
<label bind:this={labelElement} on:click|preventDefault={noop} on:mousedown|preventDefault={noop}>
  <div class="container">
    <input
      type="color"
      {name}
      value={hex}
      on:click|preventDefault={noop}
      on:mousedown|preventDefault={noop}
      aria-haspopup="dialog"
    />
    {#if innerWidth <= MOBILE_WIDTH}
      <ColorItem color="custom" size={'l'} current={$activeColor === 'custom'} />
    {:else}
      <div style={'margin-top: -12px'}>
        <ColorItem color="custom" size={'s'} current={$activeColor === 'custom'} />
      </div>
    {/if}
  </div>
  {label}
</label>

<!--
@component button to open the color picker. Also provides a hidden input with the hex value selected by the user
to fallback to color picker to the default browser one if a problem happens. This component cannot be imported
directly but can be overridden.
-->
<style>
  label {
    display: inline-flex;
    align-items: center;
    /*gap: 8px;*/
    cursor: pointer;
    /*border-radius: 3px;*/
    margin: 0;
    /*height: var(--input-size, 25px);*/
    user-select: none;
  }

  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    /*width: var(--input-size, 25px);*/
  }

  input {
    margin: 0;
    padding: 0;
    border: none;
    width: 1px;
    height: 1px;
    flex-shrink: 0;
    opacity: 0;
  }

  /*input:focus-visible ~ .color {
    outline: 2px solid var(--focus-color, red);
    outline-offset: 2px;
  }*/
</style>
