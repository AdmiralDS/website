<script lang="ts">
  import Cover from './cover.png';
  import { ContentBlock } from '@components/templates';
  import { Button, MobilePlug } from '@components/atoms';
</script>

<ContentBlock>
  <div class="platforms-wrapper">
    <div class="platforms-container">
      <h2 class="block-title light" id="platforms">Платформы</h2>
      <div class="content">
        Дизайн-система является комплексным решением для создания пользовательского интерфейса. Она включает в себя
        работу с контентом, аналитику и настройки, которые могут быть использованы для любого устройства или продукта
      </div>
      <Button
        variant="ghost"
        class="bottom-button"
        id="platform-email-button"
        on:click={() => window.open('mailto:Admiral@inno.tech')}>Хочу попробовать</Button
      >
    </div>
    <img class="platforms-cover" src={Cover} alt="cover" />
    <div class="platforms-block__plug-wrapper">
      <MobilePlug isTransparent />
    </div>
  </div>
</ContentBlock>

<style>
 @import 'Platrforms.css';
</style>
