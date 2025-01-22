<script lang="ts">
  import Logo from '../admiral.svg?component';
  import Cross from './cross.svg?component';
  import { slide, fade } from 'svelte/transition';
  import { linear, quintOut } from 'svelte/easing';
  import Pane from '../Pane.svelte';
  import { onMount } from 'svelte';
  import { base as BASE_URL } from '$app/paths';
  import type { NavigationItem } from '@components/molecules';

  export let items: Array<NavigationItem>;
  export let active: string | undefined = undefined;

  $: isPaneOpened = false;

  const handleClickOnMenuControl = () => (isPaneOpened = !isPaneOpened);
  const handleCloseMenu = () => (isPaneOpened = false);
  const handleItemClick = () => (isPaneOpened = false);

  onMount(function () {
    document.addEventListener('clickHeaderTabletButton', handleClickOnMenuControl);

    return () => {
      document.removeEventListener('clickHeaderTabletButton', handleClickOnMenuControl);
    };
  });
</script>

{#if isPaneOpened}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="background" transition:fade={{ duration: 250, easing: quintOut }} on:click={handleCloseMenu} />
  <div class="pane-wrapper" transition:slide={{ duration: 250, easing: linear, axis: 'y' }}>
    <Pane {items} {active} {...$$restProps} class="side-nav-mobile-view" onItemClick={handleItemClick}>
      <div class="mobile-pane-container">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div on:click={handleClickOnMenuControl} class="close-icon">
          <Cross />
        </div>
        <a href={BASE_URL}>
          <Logo fill="var(--Dark_grey, rgb(53, 56, 58))" />
        </a>
      </div>
      <button class="email-button" slot="ext-info" on:click={() => window.open('mailto:Admiral@inno.tech')}
        >Связаться с нами</button
      >
    </Pane>
  </div>
{/if}

<style>
  @import './mobilePane.css';
</style>
