<script lang="ts">
  import { HeaderBlock } from '@components/templates';
  import { Card } from './Card';
  import { Arrow, Square, Eye } from '@assets/icons';
  import Cover from './image.png';
</script>

<HeaderBlock id="ds-info" class="about-header">
  <video autoplay loop poster={Cover} id="cover" muted slot="video">
    <source src="Admiral_animation_video.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
  </video>
  <div class="about-header__content" slot="content">
    <span class="header-text"> АДМИРАЛ — это дизайн система</span>
    <span class="header__subtext">
      Цель дизайн-системы — создать единообразный и узнаваемый визуальный стиль, который будет использоваться во всех
      продуктах и сервисах компании. Это поможет клиентам и партнерам быстрее узнавать продукты компании, а также
      привлекать новых пользователей и удерживать старых
    </span>
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
