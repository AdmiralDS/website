<script lang="ts">
  export let id: string | undefined = undefined;
  export let title: string | undefined = undefined;
  export let titleTheme: 'dark' | 'light' = 'dark'

  const classList: Array<string> = ['block-container'];
  if ($$props.class) {
    classList.push($$props.class)
  }

  const className = classList.join(' ')
</script>

<div {...$$restProps} class={className}>
  {#if (title || id)}
    <h2 class="block-title {titleTheme}" {id}>{title}</h2>
  {/if}
  <slot />
</div>
<style>
  @import "./content-block.css";
</style>
