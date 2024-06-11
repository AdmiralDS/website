<script lang="ts">
  import Moon from './moon.svg';
  import { Toggle } from '@components/atoms';

  export let checked = false;
</script>

<div class="toggle-wrapper">
  <Moon />
  <div class="vertical-separator" />
  <Toggle bind:checked />
</div>

<style>
  .toggle-wrapper {
    margin-top: 25px;
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
