<script lang="ts">
  import { Contacts } from '@components/molecules';
  import { Divider } from '@components/atoms';
  
  const classes: Array<string> = ['header-block-template__desktop'];
    if ($$props.class) {
      classes.push($$props.class);
    }
  
  const className = classes.join(' ');
</script>

<div {...$$restProps} class={className}>
  <div class="header-block-template__desktop-content">
    <slot name='video' />
    <Contacts />
    <Divider />
    <slot name='content' />
  </div>
</div>

<style>
  @import './header-block-desktop.css';
</style>