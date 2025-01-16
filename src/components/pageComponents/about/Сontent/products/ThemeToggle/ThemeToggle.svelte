<script lang="ts">
  import Moon from './moon.svg';
  import Sun from './sun.svg';
  import { Toggle } from '@components/atoms';

  export let checked = false;
</script>

<div class="toggle-wrapper">
  {#if checked === true}
    <Moon />
  {:else}
    <Sun />
  {/if}
  <div class="vertical-separator" />
  <Toggle bind:checked />
</div>

<style>
  @import 'ThemeToggle.css';
</style>
