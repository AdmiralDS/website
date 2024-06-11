<script lang="ts">
    import { ContentBlock } from '@components/templates';
</script>

<ContentBlock id="users" title="пользователи" class='users-block'>
    <div class="users-description__info">
        Практика показывает, что даже самый точный инструмент <br />
        без инструкции превращается в булыжник. Гайдлайны помогают <br />
        разработке и бизнесу общаться на одном языке
    </div>
</ContentBlock>

<style>
    .users-description__info {
    color: var(--Grey, #7a8190);
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
    margin-top: 20px;
}
</style>