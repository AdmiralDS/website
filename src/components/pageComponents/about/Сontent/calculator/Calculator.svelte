<script lang="ts">
  import { EmployeeSlider, PriceSlider, ProductSlider } from './NamedSlider';
  import { Toggle } from '@components/atoms';
  import Arrow from './Arrow.svelte';
  import { ContentBlock } from '@components/templates';
  import Main from '@components/templates/Main/Main.svelte';

  const minResult = 30;
  const maxResult = 49;

  $: employeeCounter = 360;
  const minEmployeeCounter = 10;
  const maxEmployeeCounter = 1000;

  $: priceCounter =  50;
  const minPriceCounter = 10;
  const maxPriceCounter = 180;

  $: productCounter = 20;
  const minProductCounter = 10;
  const maxProductCounter = 50;

  $: isMultiChannel = false;

  let result: number = 30;

  const handleToggleClick = () => isMultiChannel = !isMultiChannel;
  const getTenPercentFromNumber = (num: number) => Math.ceil(num * 0.1);
  
  const makeCounting = (...args) => {
    const range = maxResult - minResult;
    const employeeRange = maxEmployeeCounter - minEmployeeCounter;
    const priceRange = maxPriceCounter - minPriceCounter;
    const productRange = maxProductCounter - minProductCounter;

    const currentEmployeeCounter = Math.max(employeeCounter, minEmployeeCounter);
    const currentEmployeeRangePoint = (currentEmployeeCounter - minEmployeeCounter) / employeeRange;

    const currentPriceCounter = Math.max(priceCounter, minPriceCounter);
    const currentPriceRangePoint = (currentPriceCounter - minPriceCounter)  / priceRange;

    const currentProductCounter = Math.max(productCounter, minProductCounter);
    const currentProductRangePoint = (currentProductCounter - minProductCounter) / productRange;

    result = Math.ceil(minResult + (currentEmployeeRangePoint / 3 + currentPriceRangePoint / 3 + currentProductRangePoint / 3) * range);

    if (isMultiChannel) {
      result = getTenPercentFromNumber(result) + result;
    }
  }

  $: makeCounting(employeeCounter, priceCounter, productCounter, isMultiChannel);
</script>

<ContentBlock>
  <div class="calculator-wrapper">
    <div class="calculator_left-pane">
      <div class="calculator-text">
        Используйте калькулятор для расчета вашей выгоды от внедрения дизайн-системы Адмирал
      </div>
      <EmployeeSlider bind:value={employeeCounter} />
      <PriceSlider bind:value={priceCounter} />
      <ProductSlider bind:value={productCounter} />
      <div class="calculator-multichannel-switcher">
        Вывод продукта сразу в несколько каналов
        <Toggle isChecked={isMultiChannel} on:click={handleToggleClick} />
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
</ContentBlock>

<style lang="css">
  @import './Calculator.css';
</style>
