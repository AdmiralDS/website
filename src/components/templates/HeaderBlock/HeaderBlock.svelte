<script lang="ts">
  import { TABLET_WIDTH, MOBILE_WIDTH } from '@components/const.ts';
  import { DesktopHeader } from './DesktopHeader';
  import { MobileHeader } from './MobileHeader';
  import { TabletHeader } from './TabletHeader';

  $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

{#if innerWidth <= MOBILE_WIDTH}
  <MobileHeader class={$$props.class} style={$$props.style} {...$$restProps}>
    <slot name='video' slot="video" />
    <slot name='content' slot="content" />
  </MobileHeader>
{:else if innerWidth <= TABLET_WIDTH}
  <TabletHeader class={$$props.class} style={$$props.style} {...$$restProps}>
    <slot name='video' slot="video" />
    <slot name='content' slot="content" />
  </TabletHeader>
  {:else}
  <DesktopHeader class={$$props.class} style={$$props.style} {...$$restProps}>
    <slot name='video' slot="video" />
    <slot name='content' slot="content" />
  </DesktopHeader>
{/if}
