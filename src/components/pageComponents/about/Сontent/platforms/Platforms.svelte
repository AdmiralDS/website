<script lang="ts">
  import Cover from './cover.png';
  import { ContentBlock } from '@components/templates';
  import { Button } from '@components/atoms';
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
  </div>
</ContentBlock>

<style>
  .platforms-wrapper {
    height: 340px;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
  }
  .platforms-container {
    position: relative;
    z-index: 1;
    padding: 20px;
    height: 100%;
    box-sizing: border-box;
  }

  .content {
    margin-top: 20px;
    max-width: 50%;
    color: var(--White, #fff);
    font-variant-numeric: lining-nums tabular-nums;

    /* 20/25 */
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 125% */
  }

  .platforms-cover {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  :global(.platforms-container .bottom-button) {
    bottom: 20px;
    left: 20px;
    position: absolute;
  }
</style>
