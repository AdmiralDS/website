<script>
  import { ProductCard } from './../ProductCard';
  import { ThemeToggle}  from './../ThemeToggle';
  import { ArrowButtons } from '@components/molecules';

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
  <div class="products-block_header-theme-wrapper">
    <ThemeToggle bind:checked />
  </div>
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
  @import 'ProductsBlock.css';
</style>
