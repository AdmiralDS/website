<script lang="ts">
  import { MOBILE_WIDTH } from '@components/const.ts';
  export let isTransparent: boolean = false;
  $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

{#if innerWidth <= MOBILE_WIDTH}
  <div class={`mobile-plug-wrapper ${isTransparent ? 'mobile-plug-wrapper--transparent' : ''}`}>
    <div class="mobile-plug"></div>
  </div>
{/if}

<style>
  @import './mobileplug.css';
</style>