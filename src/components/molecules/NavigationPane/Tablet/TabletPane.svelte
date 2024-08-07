<script lang="ts">
  import Logo from '../admiral.svg';
  import Cross from './cross.svg';
  import { slide, fade } from 'svelte/transition';
  import { linear, quintOut } from 'svelte/easing';
  import Pane from '../Pane.svelte';
  import { onMount } from 'svelte';
  import { base as BASE_URL } from '$app/paths';

  $: isPaneOpened = false;

  const handleClickOnMenuControl = () => (isPaneOpened = !isPaneOpened);
  const handleCloseMenu = () => isPaneOpened = false;

  onMount(function () {
    document.addEventListener('clickHeaderTabletButton', handleClickOnMenuControl);

    return () => {
      document.removeEventListener('clickHeaderTabletButton', handleClickOnMenuControl);
    };
  });
</script>

{#if isPaneOpened}
  <div 
    class="background" transition:fade={{ duration: 250, easing: quintOut }} 
    on:click={handleCloseMenu}
  />
  <div 
    id="tablet-pane"
    class="pane-wrapper" 
    transition:slide={{ duration: 250, easing: linear, axis: 'x' }}
  >
    <Pane {...$$props}>
      <div class="tablet-pane-container">
        <div on:click={handleClickOnMenuControl}>
          <Cross />
        </div>
        <a href={BASE_URL}>
          <Logo fill="var(--Dark_grey, rgb(53, 56, 58))" />
        </a>
      </div>
    </Pane>
  </div>
{/if}

<style>
  @import './tabletPane.css';
</style>
