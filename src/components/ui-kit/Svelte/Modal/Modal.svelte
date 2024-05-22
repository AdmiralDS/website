<script>
  import { get_current_component } from 'svelte/internal';
  import { createEventForwarder } from '../createEventForwarder.ts';
  import { CloseIcon } from '@components/ui-kit/Svelte';

  export let showModal; // boolean

  let dialog; // HTMLDialogElement

  $: if (dialog && showModal) dialog.showModal();
  const forwardEvents = createEventForwarder(get_current_component());
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog use:forwardEvents bind:this={dialog} on:close={() => (showModal = false)} on:click|self={() => dialog.close()}>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click|stopPropagation>
    <!-- svelte-ignore a11y-autofocus -->
    <button autofocus on:click={() => dialog.close()}>
      <CloseIcon width="10px" height="10px" />
    </button>
    <slot />
  </div>
</dialog>

<style>
  dialog {
    position: relative;
    box-sizing: border-box;
    width: 700px;
    height: 379px;
    max-width: 32em;
    border-radius: 12px;
    border: none;
    padding: 0;
    cursor: default;
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.4);
  }
  dialog > div {
    padding: 20px;
  }
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  button {
    position: absolute;
    top: 20px;
    right: 20px;
    display: block;
    width: 10px;
    height: 10px;
    outline: none;
    cursor: pointer;
    color: var(--Grey, #7a8190);
    background-color: transparent;
    border: none;
    box-sizing: border-box;
    padding: 0;
  }
</style>
