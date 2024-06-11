<script lang="ts">
  import { Contacts } from '@components/molecules'
  const classes: Array<string> = ['header']
  if ($$props.class) {
    classes.push($$props.class);
  }

  const className = classes.join(' ')
</script>

<div  {...$$restProps} class={className}>
  <div class="header__content">
    <Contacts />
    <slot />
  </div>
</div>

<style>
  @import "./header-block.css";
</style>
