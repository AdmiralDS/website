<script>
  import './font-block.css';
  import Chips from '@components/ui-kit/Svelte/Chips/Chips.svelte';
  const textTypeList = ['Header', 'Subtitle', 'Body', 'Caption'];
  let currentFontType = 'Header';

  function handleTypeClick(fontType) {
    currentFontType = fontType;
  }
</script>

<!-- добавить шрифты вместо цветов, подумать над названием классов для этого -->

<div class="lib-font-block__font-tile">
  <div
    class={`lib-font-block__font-example
    ${currentFontType === 'Subtitle' && 'lib-font-block__font-example--Subtitle'}
    ${currentFontType === 'Body' && 'lib-font-block__font-example--Body'}
    ${currentFontType === 'Caption' && 'lib-font-block__font-example--Caption'}
  `}
  >
    Admiral Semi Bold :)
  </div>
  <div class="lib-font-block__font-buttons-container">
    {#each textTypeList as item}
      <Chips on:click={() => handleTypeClick(item)} appearance="primary" selected={item === currentFontType}>
        {item}
      </Chips>
    {/each}
  </div>
</div>

<style lang="css"></style>
