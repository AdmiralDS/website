<script lang="ts">
  import ThemeToggle from './theme-toggle.svelte';
  import { IconArrowLeft, IconArrowRight, Switcher } from '@components/ui-kit/Svelte';
  import './products-switcher.css';

  export let items: Record<string, string>;
  export let activeItem: string;

  let checked: boolean;

  $: imgSrc = checked ? 'images/dark-image.png' : 'images/light-image.png';
</script>

<ThemeToggle bind:checked />
<Switcher class="product-switcher" {items} showNumber={false} {activeItem} disabled>
  <img slot="info" src={imgSrc} alt="image" class="info-cover" />
  <div class="arrows" slot="ext-controls">
    <button class="arrow-button" disabled>
      <IconArrowLeft width="15" height="15" />
    </button>
    <button class="arrow-button">
      <IconArrowRight width="15" height="15" />
    </button>
  </div>
</Switcher>
