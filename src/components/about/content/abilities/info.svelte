<script lang="ts">
    import { onMount } from 'svelte';
    import Theme from './icons/theme.svelte';
    import Accessability from './icons/accessability.svelte';
    import Global from './icons/global.svelte';
    import Mobile from './icons/mobile.svelte';
    // import text from './text.json';

    export let name: string;
    // export let Icon;
    // export let mainText: string;
    // export let infoText: string;

    const TEXT: Record<string, {mainText: string; infoText: string}> = {
        theme: {
            mainText : "+5 темизаций сформировано", 
            infoText: "Можно создать уникальный визуальный стиль для продукта, не отвязывая от дизайн-системы Адмирал"
        },
        accessibility: {
            mainText : "Доступность ДЛЯ всех", 
            infoText: "Базовые материалы визуального языка соответствуют гайдлайнам доступности продукта WCAG"
        },
        global: {
            mainText : "мыслим только глобально", 
            infoText: "Более 20 стран могут свободно применять нашу дизайн-систему, не заботясь о переработке компонентов"
        },
        mobile: {
            mainText : 'Мобильность,<br/>Всё на борту', 
            infoText: "Для вашего удобства дизайн-система Адмирал поддерживает мобильную библиотеку компонентов"
        }
    }

    const getIcon = () => {
        switch (name) {
            case 'theme': return Theme;
            case 'accessibility': return Accessability;
            case 'global': return Global;
            case 'mobile': return Mobile;
        }
    }

    onMount(async () => {
		// Icon = (await import(`./${name}.svelte`)).default;
	});
</script>

<div class='ability-info'>
    <svelte:component this={getIcon()} />
    <div class="main-text">{@html TEXT[name].mainText}</div>
    <div class="info-text">{@html TEXT[name].infoText}</div>
</div>
<style>
    .ability-info {
        width: 100%;
        height: 380px;
        border-radius: 12px;
        background: var(--Dark_blue_gradient, radial-gradient(336.44% 141.22% at 99% 100%, rgba(0, 0, 255, 0.35) 0%, rgba(6, 6, 114, 0.35) 29.74%, rgba(6, 6, 114, 0.00) 64.24%), #030125);
        padding: 40px 44px;

        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        align-items: center;
    }
    .main-text {
        color: var(--White, #FFF);
        text-align: center;
        font-variant-numeric: lining-nums tabular-nums;

        /* 40/40 */
        font-family: CoFo Kak;
        font-size: 40px;
        font-style: normal;
        font-weight: 800;
        line-height: 40px; /* 100% */
        text-transform: uppercase;

        margin: 60px 0 10px;
    }
    .info-text {
        color: var(--Light_grey, #E6EAF0);
        text-align: center;
        font-variant-numeric: lining-nums tabular-nums;

        /* 20/25 */
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 25px; /* 125% */
    }
</style>