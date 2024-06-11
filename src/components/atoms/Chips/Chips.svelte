<script lang="ts">
  import { get_current_component } from 'svelte/internal';
  import { createEventForwarder } from '@components/tools';

  /** Specifies the visual styling of the chips. */
  export let appearance: 'primary' | 'secondary';
  export let selected: boolean = false;

  const forwardEvents = createEventForwarder(get_current_component());
</script>

<div use:forwardEvents class="chips style-{appearance}{selected ? '-selected' : ''}">
  <slot />
</div>

<style lang="css">
  @import 'chips.css';
</style>
