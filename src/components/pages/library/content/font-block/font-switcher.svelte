<script>
  import './font-block.css';
  import { Button } from '@components/ui-kit/Svelte';
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
      <Button on:click={() => handleTypeClick(item)} variant={`${item === currentFontType ? 'primary' : 'inactive'}`}
        >{item}</Button
      >
    {/each}
  </div>
</div>

<style lang="css"></style>
