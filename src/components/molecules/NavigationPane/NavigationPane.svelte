<script lang="ts">
  import { type NavigationItem } from '@components/molecules';
  import { TabletPane } from './Tablet';
  import { DesktopPane } from './Desktop';
  import { TABLET_WIDTH } from '@components/const.ts';

  $: innerWidth = 0;

  export let items: Array<NavigationItem>;
  export let active: string | undefined;
</script>

<svelte:window bind:innerWidth />

{#if innerWidth <= TABLET_WIDTH}
  <TabletPane {items} {active} />
{:else}
  <DesktopPane {items} {active} />
{/if}
