<script lang="ts">
    export let onClick: (() => void) | undefined = undefined;
    export let text: string = '';
</script>

<div class={`tag ${onClick && 'tag--active'}`} on:click={onClick}>
    <div class="tag__text-wrapper">
        {text}
    </div>
</div>
  
<style lang="css">
    @import 'Tag.css';
</style>