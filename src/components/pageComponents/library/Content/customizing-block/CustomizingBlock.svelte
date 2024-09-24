<script>
import { ContentBlock } from '@components/templates';
import Switcher from './switcher/Switcher.svelte';  import { MOBILE_WIDTH } from '@components/const.ts';

$: innerWidth = 0;

import './customizingBlock.css';
  import MobilePlug from '@components/atoms/MobilePlug/MobilePlug.svelte';
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
    <div class="customizing-block__plug-wrapper">
      <MobilePlug isTransparent />
    </div>
  </div>
</ContentBlock>
