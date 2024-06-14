<script lang="ts">
  import { IconArrowLeft, IconArrowRight } from '@components/atoms';
  import './footer.css';
  import { onMount } from 'svelte';
  import { base as BASE_URL } from '$app/paths'

  const currentYear = new Date().getFullYear();
  let currentLocation: string;

  onMount(() => {
    currentLocation = window.location.pathname.replace(BASE_URL, '');
  });

  let nextPage: string;
  let nextPageLink: string;
  let prevPageLink: string;

  $: switch (currentLocation) {
    case '/users':
      nextPage = 'Библиотека';
      nextPageLink = 'library#library';
      prevPageLink = '/#ds-info';
      break;
    case '/library':
      nextPage = 'Дизайн-система';
      nextPageLink = '/#ds-info';
      prevPageLink = 'users#users';
      break;
    default:
      nextPage = 'Пользователи';
      nextPageLink = 'users#users';
      prevPageLink = 'library#library';
      break;
  }
</script>

<div class="footer">
  <div class="buttons-block">
    <a href={prevPageLink} class="footer-button__prev-page">
      <IconArrowLeft />
    </a>
    <a href={nextPageLink} class="footer-button__next-page">
      <IconArrowRight />
      <span class="footer-button__next-page-title">{nextPage}</span>
    </a>
  </div>
  <div class="copyright">{`© Группа компаний «Иннотех», 2020-${currentYear}`}</div>
</div>
