<script lang="ts">
  import { ContentBlock } from '@components/templates';
  import ProductsBlock from './ProductsBlock.svelte';

  const products = [
    {
      title: 'Платформа производства «Сфера»',
      link: 'https://www.sferaplatform.ru/sfera-metodologiya',
      imgLight: 'images/sfera-light.png',
      imgDark: 'images/sfera-dark.png',
      description: ['Адаптивный веб и мобильная версия', 'Геометрический стиль'],
    },
  ] as const;
</script>

<ContentBlock id="products" title="наши продукты">
  <ProductsBlock products={products} />
</ContentBlock>

<style>
  .products-text {
    margin: 20px 0 40px;
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
