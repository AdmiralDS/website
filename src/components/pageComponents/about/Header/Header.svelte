<script lang="ts">
  import { HeaderBlock } from '@components/templates';
  import Cover from './image.png';
  import { Divider } from '@components/atoms';
  import Card from './Card.svelte';
  import Arrow from './arrow.svg';
  import Square from './square.svg';
  import Eye from './eye.svg';
</script>

<HeaderBlock id="ds-info" class="about-header">
  <video autoplay loop poster={Cover} id="cover" muted>
    <source src="Admiral_animation_video.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
  </video>
  <Divider />
  <span class="header-text"> АДМИРАЛ — это дизайн система</span>
  <span class="header__subtext">
    Цель дизайн-системы — создать единообразный и узнаваемый визуальный стиль, который будет использоваться во всех
    продуктах и сервисах компании. Это поможет клиентам и партнерам быстрее узнавать продукты компании, а также
    привлекать новых пользователей и удерживать старых
  </span>
  <Divider />
  <div class="cards-wrapper">
    <Card text="Ускоряет проектирование продуктов и упрощает разработку" icon={Arrow}/>
    <div class="vertical-divider"></div>
    <Card text="Создаёт консистентный пользовательский опыт цифровых продуктов" icon={Square}/>
    <div class="vertical-divider"></div>
    <Card text="Стандарты, которые задают высокую планку дизайна и разработки интерфейсов" icon={Eye}/>
  </div>
</HeaderBlock>

<style>
  @import 'header.css';
</style>
