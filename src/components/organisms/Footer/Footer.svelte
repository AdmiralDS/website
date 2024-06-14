<script lang="ts">
  import { IconArrowLeft, IconArrowRight } from '@components/atoms';
  import './footer.css';
  import { onMount } from 'svelte';
  import { joinAbsoluteUrlPath } from '@components/tools';
  import { base as BASE_URL } from '$app/paths'

  const currentYear = new Date().getFullYear();
  let currentLocation: string;

  onMount(() => {
    currentLocation = window.location.pathname;
  });

  let nextPage: string;
  let nextPageLink: string;
  let prevPageLink: string;

  $: switch (currentLocation) {
    case '/users':
      nextPage = 'Библиотека';
      nextPageLink = joinAbsoluteUrlPath(BASE_URL, 'library#library');
      prevPageLink = joinAbsoluteUrlPath(BASE_URL, '//#ds-info');
      break;
    case '/library':
      nextPage = 'Дизайн-система';
      nextPageLink = joinAbsoluteUrlPath(BASE_URL, '//#ds-info');
      prevPageLink = joinAbsoluteUrlPath(BASE_URL, 'users#users');
      break;
    default:
      nextPage = 'Пользователи';
      nextPageLink = joinAbsoluteUrlPath(BASE_URL, 'users#users');
      prevPageLink = joinAbsoluteUrlPath(BASE_URL, 'library#library');
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
