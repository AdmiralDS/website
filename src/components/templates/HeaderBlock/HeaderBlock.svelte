<script lang="ts">
  import { Contacts } from '@components/molecules';
  import { TABLET_WIDTH } from '@components/const.ts';
  import { TabletButton } from './TabletButton';

  const classes: Array<string> = ['header'];
  if ($$props.class) {
    classes.push($$props.class);
  }

  const className = classes.join(' ');

  $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<div {...$$restProps} class={className}>
  {#if innerWidth <= TABLET_WIDTH}
    <TabletButton />
  {/if}
  <div class="header__content">
    <Contacts />
    <slot />
  </div>
</div>

<style>
  @import './header-block.css';
</style>
