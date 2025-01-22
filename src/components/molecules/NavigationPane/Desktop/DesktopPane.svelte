<script>
  import Pane from '../Pane.svelte';
  import Logo from '../admiral.svg';
  import { base as BASE_URL } from '$app/paths';
</script>

<Pane {...$$props} class="side-nav-desktop-view">
  <a href={BASE_URL}>
    <Logo fill="var(--Dark_grey, rgb(53, 56, 58))" />
  </a>
</Pane>

<style>
  @import './desktopPane.css';
</style>
