<script>
  import ThemeToggle from './ThemeToggle.svelte';
  import { ArrowButtons } from '@components/molecules';
  import ProductCard from './ProductCard.svelte';

  export let products = [];

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
  $: prevDisabled = currentProductIndex === 0;
  $: nextDisabled = currentProductIndex === maxProducts - 1;
</script>

<div class="products-block_header">
  <div class="products-block_header-text">
    Ниже приведены несколько примеров проектов, в которых используется дизайн-система Адмирал
  </div>
  <ThemeToggle bind:checked />
</div>
<ProductCard product={currentProduct} isDark={checked}>
  <ArrowButtons
    {prevDisabled}
    {nextDisabled}
    onPrevClick={handlePrevClick}
    onNextClick={handleNextClick}
    slot="ext-controls"
  />
</ProductCard>

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
</style>
