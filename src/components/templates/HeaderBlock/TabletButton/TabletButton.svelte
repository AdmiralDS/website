<script>
  import Logo from './admiral.svg';
  import Lines from './lines.svg';
  import { base as BASE_URL } from '$app/paths';

  const handleClickOnMenuControl = () => {
    const clickEvent = new CustomEvent('clickHeaderTabletButton');

    document.dispatchEvent(clickEvent);
  };
</script>

<div class="header__tablet-button">
  <div class="header__tablet-icon-wrapper" on:click={handleClickOnMenuControl}>
    <Lines />
  </div>
  <a href={BASE_URL}>
    <Logo fill="var(--White, rgb(255, 255, 255))" />
  </a>
</div>

<style>
  .header__tablet-button {
    position: absolute;
    top: 36px;
    left: 30px;
    display: flex;
    gap: 20px;
  }

  .header__tablet-icon-wrapper {
    display: flex;
  }
</style>
