<script lang="ts">
  export let id: string;
  export let title: string;
  export let titleTheme: 'dark' | 'light' = 'dark'
</script>

<div class='block-container'>
  <h2 class="block-title ${titleTheme}" {id}>{title}</h2>
  <slot />
</div>
<style>
  @import "./content-block.css";
</style>
