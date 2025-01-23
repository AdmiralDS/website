<script lang="ts">
  import Logo from '../admiral.svg?component';
  import Cross from './cross.svg?component';
  import { slide, fade } from 'svelte/transition';
  import { linear, quintOut } from 'svelte/easing';
  import Pane from '../Pane.svelte';
  import { onMount } from 'svelte';
  import { base as BASE_URL } from '$app/paths';
  import type { NavigationItem } from '@components/molecules';
  import { beforeNavigate } from '$app/navigation';

  export let items: Array<NavigationItem>;
  export let active: string | undefined = undefined;

  $: isPaneOpened = false;

  const handleClickOnMenuControl = () => (isPaneOpened = !isPaneOpened);
  const handleCloseMenu = () => (isPaneOpened = false);

  onMount(function () {
    document.addEventListener('clickHeaderTabletButton', handleClickOnMenuControl);

    return () => {
      document.removeEventListener('clickHeaderTabletButton', handleClickOnMenuControl);
    };
  });

  beforeNavigate(() => {
    isPaneOpened = false;
  });
</script>

{#if isPaneOpened}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="background" transition:fade={{ duration: 250, easing: quintOut }} on:click={handleCloseMenu} />
  <div id="tablet-pane" class="pane-wrapper" transition:slide={{ duration: 250, easing: linear, axis: 'x' }}>
    <Pane {items} {active} {...$$restProps} class="side-nav-tablet-view">
      <div class="tablet-pane-container">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
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
