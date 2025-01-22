<script lang="ts">
  import { type NavigationItem } from '@components/molecules';
  import { MobilePane } from './Mobile';
  import { TabletPane } from './Tablet';
  import { DesktopPane } from './Desktop';
  import { MOBILE_WIDTH, TABLET_WIDTH } from '@components/const.ts';

  $: innerWidth = 0;

  export let items: Array<NavigationItem>;
  export let active: string | undefined = undefined;
</script>

<svelte:window bind:innerWidth />

{#if innerWidth <= MOBILE_WIDTH}
  <MobilePane {items} {active} />
{:else if innerWidth <= TABLET_WIDTH}
  <TabletPane {items} {active} />
{:else}
  <DesktopPane {items} {active} />
{/if}
