<script lang="ts">
  import { type NavigationItem, NavigationPane } from '@components/molecules';
  import { fade } from 'svelte/transition';
  import { cubicIn, cubicOut } from 'svelte/easing';
  import { MOBILE_WIDTH } from '@components/const';
  import { MobileHeaderMenu } from '@components/organisms/MobileHeader';
  import { onMount } from 'svelte';

  import System from 'svelte-system-info';
  import { checkBrowserVersion } from '../tools/checkBrowserVersion.js';

  onMount(() => {
    if (!checkBrowserVersion(System.BrowserName, System.BrowserVersion)) {
      setTimeout(() =>
        alert('Необходимо обновить браузер.\nВ текущей версия некоторые элементы могут отображаться некорректно.'),
      );
    }
  });

  export let data;
  let currentScrollTop = 0;

  $: innerWidth = 0;

  const desktopNavItems: Array<NavigationItem> = [
    {
      page: 'about',
      href: '',
      anchor: 'ds-info',
      label: 'Дизайн-система',
      children: [
        {
          page: 'about',
          anchor: 'abilities',
          label: 'Возможности',
        },
        {
          page: 'about',
          anchor: 'team',
          label: 'Команда',
        },
        {
          page: 'about',
          anchor: 'products',
          label: 'Наши продукты',
        },
        {
          page: 'about',
          anchor: 'platforms',
          label: 'Платформы',
        },
      ],
    },
    {
      page: 'users',
      href: `users`,
      anchor: `users`,
      label: 'Пользователи',
      children: [
        {
          page: 'users',
          anchor: 'designers',
          label: 'Дизайнеры',
        },
        {
          page: 'users',
          anchor: 'developers',
          label: 'Разработчики',
        },
        {
          page: 'users',
          anchor: 'business',
          label: 'Бизнес',
        },
      ],
    },
    {
      page: 'library',
      href: `library`,
      anchor: `library`,
      label: 'Библиотека',
      children: [
        {
          page: 'library',
          anchor: 'fonts',
          label: 'Шрифт',
        },
        {
          page: 'library',
          anchor: 'palette',
          label: 'Палитра',
        },
        {
          page: 'library',
          anchor: 'icons',
          label: 'Иконки',
        },
        {
          page: 'library',
          anchor: 'accessibility',
          label: 'Доступность',
        },
        {
          page: 'library',
          anchor: 'customizing',
          label: 'Кастомизация',
        },
      ],
    },
  ];

  const mobileNavItems: Array<NavigationItem> = [
    {
      page: 'about',
      href: '',
      anchor: 'ds-info',
      label: 'Дизайн-система',
    },
    {
      page: 'users',
      href: `users`,
      anchor: `users`,
      label: 'Пользователи',
    },
    {
      page: 'library',
      href: `library`,
      anchor: `library`,
      label: 'Библиотека',
    },
  ];

  $: navItems = innerWidth <= MOBILE_WIDTH ? mobileNavItems : desktopNavItems;

  const handleScroll = (e) => {
    const scrollTop = (e.target as HTMLDivElement).scrollTop;
    if (currentScrollTop > scrollTop) {
      const event = new CustomEvent('maincontainerscroll', { detail: { direction: 'top' } });
      document.dispatchEvent(event);
    } else {
      const event = new CustomEvent('maincontainerscroll', { detail: { direction: 'down' } });
      document.dispatchEvent(event);
    }

    currentScrollTop = scrollTop;
  };
</script>

<svelte:window bind:innerWidth />
<p style="line-height:150%">
  <!-- {System.BrowserName}
  {System.BrowserVersion} -->
</p>

{#if innerWidth && innerWidth <= MOBILE_WIDTH}
  <MobileHeaderMenu />
{/if}
<NavigationPane items={navItems} />
<div class="main-container-wrapper">
  {#key data.pathname}
    <div
      class="main-container"
      in:fade={{ easing: cubicOut, duration: 300, delay: 400 }}
      out:fade={{ easing: cubicIn, duration: 300 }}
      on:scroll={handleScroll}
    >
      <slot />
    </div>
  {/key}
</div>
