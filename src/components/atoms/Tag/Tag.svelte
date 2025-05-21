<script lang="ts">
  export let onClick: (() => void) | undefined = undefined;
  export let text: string = '';
</script>

<!-- svelte-ignore a11y-no-static-element-interactions a11y-click-events-have-key-events -->
<div class={`tag ${onClick && 'tag--active'}`} on:click={onClick}>
  <div class="tag__text-wrapper">
    {text}
  </div>
</div>

<style lang="css">
  @import 'Tag.css';
</style>
