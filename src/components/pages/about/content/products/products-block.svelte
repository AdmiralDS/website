<script>
  import ThemeToggle from '@components/pages/about/content/products/theme-toggle.svelte';
  import { ArrowButtons, IconArrowRight } from '@components/ui-kit/Svelte';

  export let products = [
    {
      title: 'Платформа производства «Сфера»',
      link: 'https://www.sferaplatform.ru/sfera-metodologiya',
      imgLight: 'images/sfera-light.png',
      imgDark: 'images/sfera-dark.png',
      description: ['Адаптивный веб и мобильная версия', 'Геометрический стиль'],
    },
    {
      title: 'ZZZ',
      link: 'https://www.sferaplatform.ru/sfera-metodologiya',
      imgLight: 'images/sfera-light.png',
      imgDark: 'images/sfera-dark.png',
      description: ['Zzz', 'Xxx'],
    },
  ];

  let maxProducts = products.length;
  let currentProductIndex = 0;
  let checked;

  const handlePrevClick = () => {
    const newValue = currentProductIndex - 1;
    currentProductIndex = newValue < 0 ? 0 : newValue;
  };
  const handleNextClick = () => {
    const newValue = currentProductIndex + 1;
    currentProductIndex = newValue > maxProducts ? maxProducts : newValue;
  };

  $: currentProduct = products[currentProductIndex];
  $: imgSrc = checked ? currentProduct.imgDark : currentProduct.imgLight;
  $: prevDisabled = currentProductIndex === 0;
  $: nextDisabled = currentProductIndex === maxProducts - 1;
</script>

<div class="products-block_header">
  <div class="products-block_header-text">
    Ниже приведены несколько примеров проектов, в которых используется дизайн-система Адмирал
  </div>
  <ThemeToggle bind:checked />
</div>
<div class="products-block_card-container">
  <div class="products-block_card-content">
    <div class="products-block_card-items">
      <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
      <div class="products-block_card-title" on:click={() => window.open(currentProduct.link, '_blank')}>
        <span>{currentProduct.title}</span>
        <IconArrowRight width="16" height="16" />
      </div>
      {#each currentProduct.description as text}
        <div class="products-block_card-description">{text}</div>
      {/each}
    </div>
    <div class="products-block_card-items-controls">
      <ArrowButtons {prevDisabled} {nextDisabled} onPrevClick={handlePrevClick} onNextClick={handleNextClick} />
    </div>
  </div>
  <div class="divider">
    <div class="separator" />
  </div>
  <div class="products-block_card-image">
    <img src={imgSrc} alt={currentProduct.title} class="product-image-cover" />
  </div>
</div>

<style>
  .products-block_header {
    margin: 20px 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .products-block_header-text {
    width: 50%;

    color: var(--Grey);
    font-variant-numeric: lining-nums tabular-nums;

    /* 20/25 */
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 125% */
  }

  .products-block_card-container {
    position: relative;
    display: flex;
    column-gap: 10px;
    margin-top: 40px;
  }

  .products-block_card-content {
    display: flex;
    flex: 0 1 33%;
    flex-direction: column;
    min-width: 33%;
  }

  .products-block_card-items {
    display: flex;
    flex: 0 1 33%;
    flex-direction: column;
    min-width: 33%;
  }

  .products-block_card-title {
    cursor: pointer;
    padding: 0 0 20px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: var(--Blue, #0d42ff);
    font-variant-numeric: lining-nums tabular-nums;

    /* 20/25 */
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 125% */
  }

  .products-block_card-description {
    padding: 20px 0;

    color: var(--Grey, #7a8190);
    font-variant-numeric: lining-nums tabular-nums;

    /* 20/25 */
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 125% */
    border-top: 1px solid #e6eaf0;
  }

  .products-block_card-items-controls {
    margin-top: 40px;
  }

  .divider {
    width: 1px;
  }
  .separator {
    width: 1px;
    position: absolute;
    height: 100%;
    background-color: #e6eaf0;
  }
  .product-image-cover {
    width: 100%;
    object-fit: contain;
    height: auto;
    max-height: 577px;
    margin: auto;
  }

  .products-block_card-image {
    flex: 1 1 auto;
  }
</style>
