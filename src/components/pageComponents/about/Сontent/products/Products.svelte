<script lang="ts">
  import { ContentBlock } from '@components/templates';
  import { ProductsBlock } from './ProductsBlock';

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
