<script>
  import Logo from './admiral.svg';
  import Lines from './lines.svg';

  const handleClickOnMenuControl = () => {
    const clickEvent = new CustomEvent('clickHeaderTabletButton');

    document.dispatchEvent(clickEvent);
  };
</script>

<div class="header__tablet-button" on:click={handleClickOnMenuControl}>
  <Lines />
  <Logo fill="var(--White, rgb(255, 255, 255))" />
</div>

<style>
  .header__tablet-button {
    position: absolute;
    top: 36px;
    left: 30px;
    /*z-index: 98;*/
    display: flex;
    gap: 20px;
  }
</style>
