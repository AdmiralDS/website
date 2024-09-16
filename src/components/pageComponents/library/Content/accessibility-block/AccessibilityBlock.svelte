<script lang="ts">
  import { ContentBlock } from '@components/templates';
  import './accessibilityBlock.css';
  import accessibilityList from './accessibility-list.json';
  import Eye from './eye.svg';
  import Scan from './scan.svg';
  import Shield from './shield.svg';
  import { MOBILE_WIDTH } from '@components/const.ts';

  $: innerWidth = 0;

  const getComponent = (name: string) => {
    switch (name) {
      case 'eye': return Eye;
      case 'scan': return Scan;
      case 'shield': return Shield;
    }
  }

</script>

<svelte:window bind:innerWidth />

<ContentBlock id="accessibility" title="Доступность">
  <div class="accessibility__info">
    Все компоненты соответствуют стандарту доступности
    {#if innerWidth > MOBILE_WIDTH}
      <br />
    {/if}
    WCAG AA и отлично отрабатывают в режимах VoiceOver
    {#if innerWidth > MOBILE_WIDTH}
      <br />
    {/if}
    и Talkback для людей с нарушением зрения
  </div>
  <div class="accessibility__descr-wrapper">
    {#each accessibilityList as item}
      <div class="accessibility__descr-container">
        <div class="accessibility__icon-wrapper">
          <svelte:component this={getComponent(item.icon)} />
        </div>
        <div class="accessibility__header">{item.title}</div>
        <div class="accessibility__description">{item.description}</div>
      </div>
    {/each}
  </div>
</ContentBlock>
