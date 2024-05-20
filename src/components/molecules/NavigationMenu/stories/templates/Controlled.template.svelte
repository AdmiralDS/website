<script lang="ts">
  import { type NavigationItem, NavigationMenu } from '@components/molecules';
  import { navItems } from '../items';
  import AdmiralLogo from './admiral.svelte';

  let active: string = '#ds-info';
  let opened: Array<string> = new Array(1).fill(active);

  const onItemClick = (key: string, item: NavigationItem) => {
    if (item.children && item.children) {
      opened = new Array(1).fill(key);
    }
  };
</script>

<NavigationMenu items={navItems} bind:active {opened} {onItemClick}>
  <AdmiralLogo slot="logo" />
</NavigationMenu>
