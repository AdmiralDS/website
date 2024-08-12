<script lang="ts">
  import { Button } from '@components/atoms';
  import { TelegramIcon } from '@assets/icons';

  const handleClickEmail = () => window.open('mailto:Admiral@inno.tech')
</script>

<div class="contacts">
  <Button variant="ghost" class="icon_button">
    <TelegramIcon class="icon"/>
  </Button>
  <Button variant="ghost" id="email-button" on:click={handleClickEmail}>Связаться с нами</Button>
</div>

<style>
 @import './contacts.css';
</style>

