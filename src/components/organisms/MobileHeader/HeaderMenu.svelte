<script lang="ts">
  import { Burger, Logo } from '@assets/icons';
  import { onMount } from 'svelte';

  let modificator: 'opened' | 'closed' = 'opened';

  const handleClickOnMenuControl = () => {
    const clickEvent = new CustomEvent('clickHeaderTabletButton');

    document.dispatchEvent(clickEvent);
  };

  const handleHandleMainContainerScroll = (e) => {
    if (e.detail.direction === 'top') {
      modificator = 'opened';
    } else {
      modificator = 'closed';
    }
  };

  onMount(function () {
    document.addEventListener('maincontainerscroll', handleHandleMainContainerScroll);

    return () => {
      document.removeEventListener('maincontainerscroll', handleHandleMainContainerScroll);
    };
  });
</script>

<div class={`mobile-header-template__heading ${modificator}`}>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="mobile-header-template__icon-wrapper" on:click={handleClickOnMenuControl}>
    <Burger fill="var(--Dark_grey, rgb(53, 56, 58))" />
  </div>
  <div class="mobile-header-template__logo-wrapper">
    <Logo fill="var(--Dark_grey, rgb(53, 56, 58))" />
  </div>
</div>

<style>
  @import './header-block-mobile.css';
</style>
