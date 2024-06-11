<script lang="ts">
  import { Button } from '@components/atoms';
  import Icon from './telegram.svg';

  const handleClickEmail = () => window.open('mailto:Admiral@inno.tech')
</script>

<div class="about-header__contacts">
  <Button variant="ghost" class="icon_button">
    <Icon class="icon"/>
  </Button>
  <Button variant="ghost" id="email-button" on:click={handleClickEmail}>Связаться с нами</Button>
</div>

<style>
  .about-header__contacts {
    padding: 30px 0 20px;
    grid-column: 1 / span 12;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 10px;
  }
  :global(.icon_button) {
    width: 30px;
  }
  :global(.icon_button svg) {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
</style>

