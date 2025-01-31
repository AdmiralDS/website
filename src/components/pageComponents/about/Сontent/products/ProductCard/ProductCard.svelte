<script>
  import { ThemeToggle}  from './../ThemeToggle';
  import { MOBILE_WIDTH } from '@components/const';

  $: innerWidth = 0;

  export let product;
  export let isDark = false;

  $: imgSrc = isDark ? product.imgDark : product.imgLight;

  const handleTitleClick = product.link ? () => window.open(product.link, '_blank') : undefined;
</script>

<svelte:window bind:innerWidth />
<div class="products-block_card-container">
  <div class="products-block_card-content">
    <div class="products-block_card-items">
      <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
      <div class="products-block_card-title" on:click={handleTitleClick}>
        <span>{product.title}</span>
        <!-- <div class="products-block__icon-wrapper">
          <IconArrowRight width="16" height="16" />
        </div> -->
      </div>
      {#each product.description as text}
        <div class="products-block_card-description">{text}</div>
      {/each}
      {#if innerWidth <= MOBILE_WIDTH}
        <div class="products-block__mobile-description">
          <div>Тёмная тема</div>
          <ThemeToggle bind:checked={isDark} />
        </div>
      {/if}
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
  @import 'ProductCard.css';
</style>
