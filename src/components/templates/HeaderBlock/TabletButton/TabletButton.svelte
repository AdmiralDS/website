<script>
  import { Burger, Logo } from '@assets/icons';
  import { base as BASE_URL } from '$app/paths';

  const handleClickOnMenuControl = () => {
    const clickEvent = new CustomEvent('clickHeaderTabletButton');

    document.dispatchEvent(clickEvent);
  };
</script>

<div class="tablet-button">
  <!-- svelte-ignore a11y-no-static-element-interactions a11y-click-events-have-key-events -->
  <div class="tablet-icon-wrapper" on:click={handleClickOnMenuControl}>
    <Burger fill="var(--White, rgb(255, 255, 255))" />
  </div>
  <a href={BASE_URL}>
    <Logo fill="var(--White, rgb(255, 255, 255))" />
  </a>
</div>

<style>
  @import './tablet-button.css';
</style>
