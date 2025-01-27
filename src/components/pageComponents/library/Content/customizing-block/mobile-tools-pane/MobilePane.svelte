<script lang="ts">
  import { slide, fade } from 'svelte/transition';
  import { linear, quintOut } from 'svelte/easing';
  import { onMount } from 'svelte';

  export let onClose: () => void;

  $: isPaneOpened = false;

  const handleCloseMenu = () => {
    isPaneOpened = false;
    setTimeout(onClose, 250);
  };

  onMount(() => (isPaneOpened = true));
</script>

{#if isPaneOpened}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="background" transition:fade={{ duration: 250, easing: quintOut }} on:click={handleCloseMenu} />
  <div class="pane-wrapper" transition:slide={{ duration: 250, easing: linear, axis: 'y' }}></div>
{/if}

<style>
  @import './mobilePane.css';
</style>
