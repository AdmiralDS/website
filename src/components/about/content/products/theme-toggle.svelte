<script lang="ts">
import Moon from './moon.svelte';
import { Toggle } from "../../../ui-kit/index.js";
</script>

<div class="toggle-wrapper">
  <Moon />
  <div class="vertical-separator" />
  <Toggle />
</div>

<style>
  .toggle-wrapper {
    position: absolute;
    right: 0;
    top: 105px;
    display: flex;
    column-gap: 10px;
    align-items: stretch;
  }
  .vertical-separator {
    width: 1px;
    background-color:  var(--Light_grey, #E6EAF0);
  }
</style>