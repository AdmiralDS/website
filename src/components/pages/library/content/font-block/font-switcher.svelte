<script>
  import './font-block.css';
  import { Chips } from '@components/ui-kit/Svelte';

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

  function getFontClassName(fontType) {
    switch (fontType) {
      case 'Subtitle':
        return 'lib-font-block__font-example--Subtitle';
      case 'Body':
        return 'lib-font-block__font-example--Body';
      case 'Caption':
        return 'lib-font-block__font-example--Caption';
      case 'Header':
      default:
        return 'lib-font-block__font-example--Header';
    }
  }
</script>

<!-- добавить шрифты вместо цветов, подумать над названием классов для этого -->

<div class="lib-font-block__font-tile">
  <div class={`lib-font-block__font-example ${getFontClassName(currentFontType)}`}>
    {currentText}
  </div>
  <div class="lib-font-block__font-buttons-container">
    {#each textTypeList as item, i}
      <Chips on:click={() => handleTypeClick(i)} appearance="primary" selected={item === currentFontType}>
        {item}
      </Chips>
    {/each}
  </div>
</div>

<style lang="css"></style>
