<script lang="ts">
  import Moon from './moon.svelte';
  import { Toggle } from '@components/ui-kit/Svelte';

  export let checked = false;
</script>

<div class="toggle-wrapper">
  <Moon />
  <div class="vertical-separator" />
  <Toggle bind:checked />
</div>

<style>
  .toggle-wrapper {
    position: absolute;
    right: 0;
    top: 103px;
    display: flex;
    column-gap: 10px;
    align-items: center;
  }

  .vertical-separator {
    height: 20px;
    width: 1px;
    background-color: var(--Light_grey);
  }
</style>
