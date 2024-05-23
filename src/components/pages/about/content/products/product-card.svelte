<script>
  import { IconArrowRight } from '@components/ui-kit/Svelte';

  export let product;
  export let isDark = false;

  $: imgSrc = isDark ? product.imgDark : product.imgLight;
</script>

<div class="products-block_card-container">
  <div class="products-block_card-content">
    <div class="products-block_card-items">
      <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
      <div class="products-block_card-title" on:click={() => window.open(product.link, '_blank')}>
        <span>{product.title}</span>
        <IconArrowRight width="16" height="16" />
      </div>
      {#each product.description as text}
        <div class="products-block_card-description">{text}</div>
      {/each}
    </div>
    <div class="products-block_card-items-controls">
      <slot name="ext-controls" />
    </div>
  </div>
  <div class="divider">
    <div class="separator" />
  </div>
  <div class="products-block_card-image">
    <img src={imgSrc} alt={product.title} class="product-image-cover" />
  </div>
</div>

<style>
  @import 'product-card.css';
</style>
