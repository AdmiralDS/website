<script lang="ts">
  import type { SvelteElement } from 'svelte/compiler';

  export let text: string;
  export let icon: SvelteElement | undefined = undefined
</script>


<div class="card">
  {#if icon}
    <svelte:component this={icon} />
  {/if}
  <span class="card__text">{text}</span>
</div>

<style>
  @import './card.css';
</style>
