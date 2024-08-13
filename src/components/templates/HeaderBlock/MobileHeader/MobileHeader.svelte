<script>
    import { Burger, LogoSmall } from '@assets/icons';

    const classes = ['mobile-header-template__content'];
    if ($$props.class) {
      classes.push($$props.class);
    }
  
  const className = classes.join(' ');

  const handleClickOnMenuControl = () => {
    const clickEvent = new CustomEvent('clickHeaderTabletButton');

    document.dispatchEvent(clickEvent);
  };

  const {id} = $$props;
</script>

<div class="mobile-header-template" id={id}>
    <div class="mobile-header-template__heading">
      <div class="mobile-header-template__icon-wrapper" on:click={handleClickOnMenuControl}>
        <Burger fill="var(--Dark_grey, rgb(53, 56, 58))" />
      </div>
      <div class="mobile-header-template__logo-wrapper">
        <LogoSmall fill="var(--Dark_grey, rgb(53, 56, 58))" />
      </div>
    </div>
    <div {...$$restProps} class={className}>
      <slot name='video' />
      <slot name='content' />
    </div>
</div>

<style>
  @import './header-block-mobile.css';
</style>