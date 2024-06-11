<script lang="ts">
  import { Timeline } from '@components/ui-kit/Svelte';
  import history from './history.json';
</script>

<div class="scrolling-container">
  <Timeline items={history} />
</div>

<style>
  .scrolling-container {
    box-sizing: border-box;
    position: relative;
    width: fit-content;
    padding: 80px 0 135px;
    margin-bottom: 40px;
    transition: transform 300ms ease-in-out;
  }

  :global(.line) {
    width: 30vw;
    min-width: 250px;
    max-width: 500px;
  }
</style>
