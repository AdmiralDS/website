<script lang="ts">
  import { EmployeeSlider, PriceSlider, ProductSlider } from './NamedSlider';
  import { Toggle } from '@components/ui-kit/Svelte';
  import Arrow from './Arrow.svelte';

  let result: number = 47;
</script>

<div class="calculator-wrapper">
  <div class="calculator_left-pane">
    <div class="calculator-text">
      Используйте калькулятор для расчета вашей выгоды от внедрения дизайн-системы Адмирал
    </div>
    <EmployeeSlider />
    <PriceSlider />
    <ProductSlider />
    <div class="calculator-multichannel-switcher">
      Вывод продукта сразу в несколько каналов
      <Toggle />
    </div>
  </div>
  <div class="divider">
    <div class="separator" />
  </div>
  <div class="calculator_right-pane">
    <div class="calculator_result-banner">
      <span class="result-percent">{`${result}%`}</span>
      <span class="result-descr">Сокращение всех затрат</span>
      <div class="arrow-wrapper">
        <Arrow />
      </div>
      <button class="result_try-button" on:click={() => window.open('mailto:Admiral@inno.tech')}
        >ХОЧУ ПОПРОБОВАТЬ</button
      >
    </div>
  </div>
</div>

<style lang="css">
  @import './Calculator.css';
</style>
