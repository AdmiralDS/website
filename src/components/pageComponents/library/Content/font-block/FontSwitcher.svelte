<script>
  import './fontSwitcher.css';
  import { Chips } from '@components/atoms';
  import AdmiralT from './AdmiralT.svelte';
  import { MobilePlug } from '@components/atoms';

  const textExamples = [
    'Привет, Адмирал!',
    'Адмирал — это дизайн-система, которая управляет кораблём вашего проекта. Она обеспечивает порядок и гармонию на борту.',
    'Адмирал — это дизайн-система, которая управляет кораблём вашего проекта. Она обеспечивает порядок и гармонию на борту. Позволяет команде дизайнеров сосредоточиться на создании качественных продуктов.',
    'Адмирал — это дизайн-система, которая управляет кораблём вашего проекта. Она обеспечивает порядок и гармонию на борту, позволяя команде дизайнеров сосредоточиться на создании качественных продуктов. Адмирал следит за тем, чтобы каждый элемент дизайна был на своём месте и гармонично сочетался с остальными. Когда наступает шторм, Адмирал становится настоящим героем. Он умело маневрирует между волнами, сохраняя стабильность и равновесие корабля.',
  ];
  const textTypeList = ['Header', 'Subtitle', 'Body', 'Caption'];
  let currentFontType = textTypeList[0];
  let currentText = textExamples[0];

  function handleTypeClick(type) {
    currentFontType = textTypeList[type];
    currentText = textExamples[type];
  }
</script>

<div class="lib-font-block__font-tile-wrapper">
  <div class="lib-font-block__font-tile">
    <div class="lib-font-block__font-text-wrapper">
      <AdmiralT isDarkTheme={false} textType={currentFontType} text={currentText} />
    </div>
    <div class="lib-font-block__font-buttons-container">
      {#each textTypeList as item, i}
        <Chips on:click={() => handleTypeClick(i)} appearance="primary" selected={item === currentFontType}>
          {item}
        </Chips>
      {/each}
    </div>
  </div>
  <MobilePlug />
</div>

<style lang="css"></style>
