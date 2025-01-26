<script>
  import { ContentBlock } from '@components/templates';
  import Switcher from './switcher/Switcher.svelte';
  import { LINKS, MOBILE_WIDTH } from '@components/const';
  import { Button, MobilePlug } from '@components/atoms';

  $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<ContentBlock id="customizing" title="КАСТОМИЗАЦИЯ">
  <div class="customizing__info">
    Компоненты в библиотеке являются базовыми для
    {#if innerWidth > MOBILE_WIDTH}
      <br />
    {/if}
    системы и могут закрыть большинство потребностей
    {#if innerWidth > MOBILE_WIDTH}
      <br />
    {/if}
    при проектировании интерфейсов
  </div>
  <div class="switcher-wrapper">
    <Switcher />
    {#if innerWidth <= MOBILE_WIDTH}
      <div class="customizing-block__plug-wrapper">
        <MobilePlug isTransparent />
      </div>
      <div class="customization-links">
        <Button variant="primary" on:click={() => window.open(LINKS.PIXSO, '_blank')}>Pixso components</Button>
        <Button variant="primary" on:click={() => window.open(LINKS.STORYBOOK, '_blank')}>Storybook</Button>
      </div>
    {/if}
  </div>
</ContentBlock>

<style>
  @import './customizingBlock.css';
</style>
