<script lang="ts">
  import { get_current_component } from 'svelte/internal';
  import { createEventForwarder } from '@components/tools';

  /** @restProps {button | a} */
  /** Specifies the visual styling of the button. */
  export let variant: 'primary' | 'secondary' | 'inactive' | 'ghost';

  /** Controls whether the button is intended for user interaction, and styles it accordingly. */
  export let disabled = false;

  /** Specifies a custom class name for the button. */
  let className = '';
  export { className as class };

  /** Obtains a bound DOM reference to the button. */
  export let element: HTMLElement = null;

  const forwardEvents = createEventForwarder(get_current_component());
</script>

<button
  bind:this={element}
  use:forwardEvents
  class="button style-{variant} {className}"
  class:disabled
  {...$$restProps}
>
  <slot />
</button>

<style lang="css">
  @import 'button.css';
</style>
