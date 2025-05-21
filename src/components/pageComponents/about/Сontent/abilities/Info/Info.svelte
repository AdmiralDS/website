<script lang="ts">
  import { onMount } from 'svelte';
  import themeIcon from '@assets/theme.gif';
  import accessibilityIcon from '@assets/accessability.gif';
  import globalIcon from '@assets/global.gif';
  import mobileIcon from '@assets/mobile.gif';

  export let name: string;
  let prevName: string = name;
  let imageLoading: boolean = false;

  const TEXT: Record<string, { mainText: string; infoText: string }> = {
    theme: {
      mainText: '+5 темизаций сформировано',
      infoText: 'Можно создать уникальный визуальный стиль для продукта, не отвязывая от дизайн-системы Адмирал',
    },
    accessibility: {
      mainText: 'Доступность ДЛЯ всех',
      infoText: 'Базовые материалы визуального языка соответствуют гайдлайнам доступности продукта WCAG',
    },
    global: {
      mainText: 'мыслим только глобально',
      infoText: 'Более 20 стран могут свободно применять нашу дизайн-систему, не заботясь о переработке компонентов',
    },
    mobile: {
      mainText: 'Мобильность,<br/>Всё на борту',
      infoText: 'Для вашего удобства дизайн-система Адмирал поддерживает мобильную библиотеку компонентов',
    },
  };

  $: {
    if (name !== prevName) {
      prevName = name;
      imageLoading = true;
    }
  }

  $: getIcon = () => {
    switch (name) {
      case 'theme':
        return themeIcon;
      case 'accessibility':
        return accessibilityIcon;
      case 'global':
        return globalIcon;
      case 'mobile':
        return mobileIcon;
    }
  };

  const handleImageLoad = () => {
    imageLoading = false;
  };
</script>

<div class="ability-info">
  <img
    class="ability-info__img"
    class:loading={imageLoading}
    alt="The project logo"
    src={getIcon()}
    on:load={handleImageLoad}
  />
  <div class="main-text">{@html TEXT[name].mainText}</div>
  <div class="info-text">{@html TEXT[name].infoText}</div>
</div>

<style>
  @import 'info.css';
</style>
