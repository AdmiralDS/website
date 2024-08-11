<script lang="ts">
  import { Contacts } from '@components/molecules';
  import { TabletButton } from '../TabletButton';
  import { Divider } from '@components/atoms';
  
  
  const classes: Array<string> = ['header-block-template__tablet'];
    if ($$props.class) {
      classes.push($$props.class);
    }
  
  const className = classes.join(' ');
</script>
  
  <div {...$$restProps} class={className}>
    <TabletButton />
    <div class="header-block-template__tablet-content">
      <slot name='video' />
      <Contacts />
      <Divider />
      <slot name='content' />
    </div>
  </div>
  
  
<style>
  @import './header-block-tablet.css';
</style>
  