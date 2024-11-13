<script lang="ts">
  import Moon from './moon.svg';
  import { Toggle } from '@components/atoms';

  export let checked = false;
</script>

<div class="toggle-wrapper">
  <!-- <Moon /> -->
  <div class="vertical-separator" />
  <Toggle bind:checked />
</div>

<style>
  @import 'ThemeToggle.css';
</style>
