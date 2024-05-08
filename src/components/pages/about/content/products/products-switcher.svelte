<script lang="ts">
  import ThemeToggle from './theme-toggle.svelte';
  import { ArrowButtons } from '@components/ui-kit/Svelte';
  import { Switcher } from '@components/ui-kit/Svelte';
  import './products-switcher.css';

  export let items: Record<string, string>;
  export let activeItem: string;

  let checked: boolean;

  $: imgSrc = checked ? 'images/sfera-dark.png' : 'images/sfera-light.png';

  const onArrowClick = () => undefined;
  const handleItemClick = (name: string) => {
    if (name === 'site') {
      window.open('https://www.sferaplatform.ru/sfera-metodologiya', '_blank');
    }
  };
</script>

<ThemeToggle bind:checked />
<Switcher class="product-switcher" {items} showNumber={false} {activeItem} disabled onItemClick={handleItemClick}>
  <img slot="info" src={imgSrc} alt="Сфера" class="info-cover" />
  <ArrowButtons
    prevDisabled
    nextDisabled={false}
    onPrevClick={onArrowClick}
    onNextClick={onArrowClick}
    slot="ext-controls"
  />
</Switcher>
