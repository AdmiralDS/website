<script lang="ts">
    import { ContentBlock } from '@components/templates';
    import { MOBILE_WIDTH } from '@components/const.ts';

    $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<ContentBlock id="users" title="пользователи" class='users-block'>
    <div class="users-description__info">
        Практика показывает, что даже самый точный инструмент
        {#if innerWidth >= MOBILE_WIDTH}
            <br />
        {/if}
        без инструкции превращается в булыжник. Гайдлайны помогают
        {#if innerWidth >= MOBILE_WIDTH}
            <br />
        {/if}
        разработке и бизнесу общаться на одном языке
    </div>
</ContentBlock>

<style>
 @import './description.css';
</style>