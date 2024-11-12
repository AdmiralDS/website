<script lang="ts">
  import { HeaderBlock } from '@components/templates';
  import { Card } from './Card';
  import { Arrow, Square, Eye } from '@assets/icons';
  import Cover from './image.png';
  import { MOBILE_WIDTH } from '@components/const';

  $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<HeaderBlock id="ds-info" class="about-header">
  <video autoplay loop poster={Cover} id="cover" muted slot="video">
    <source src="Admiral_animation_video.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
  </video>
  <div class="about-header__content" slot="content">
    <div class="header-text"> АДМИРАЛ — 
        <br />
      это дизайн система</div>
    <div class="header__subtext">
      Цель дизайн-системы — создать 
      {#if innerWidth <= MOBILE_WIDTH}
        <br />
      {/if}
      единообразный и узнаваемый 
      {#if innerWidth <= MOBILE_WIDTH}
        <br />
      {/if}
      визуальный стиль, который будет 
      {#if innerWidth <= MOBILE_WIDTH}
        <br />
      {/if}
      использоваться во всех
      продуктах и 
      {#if innerWidth <= MOBILE_WIDTH}
        <br />
      {/if}
      сервисах компании. Это поможет 
      {#if innerWidth <= MOBILE_WIDTH}
        <br />
      {/if}
      клиентам и партнерам быстрее узнавать 
      {#if innerWidth <= MOBILE_WIDTH}
        <br />
      {/if}
      продукты компании, а также
      привлекать 
      {#if innerWidth <= MOBILE_WIDTH}
        <br />
      {/if}
      новых пользователей и удерживать старых
    </div>
    <div class="cards-wrapper">
      <Card text="Ускоряет проектирование продуктов и упрощает разработку" icon={Arrow}/>
      <Card text="Создаёт консистентный пользовательский опыт цифровых продуктов" icon={Square}/>
      <Card text="Стандарты, которые задают высокую планку дизайна и разработки интерфейсов" icon={Eye}/>
    </div>
  </div>
</HeaderBlock>

<style>
  @import 'header.css';
</style>
