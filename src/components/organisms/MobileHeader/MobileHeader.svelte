<script>
  const classes = ['mobile-header-template__content'];
  if ($$props.class) {
    classes.push($$props.class);
  }

  const className = classes.join(' ');

  const handleClickOnMenuControl = () => {
    const clickEvent = new CustomEvent('clickHeaderTabletButton');

    document.dispatchEvent(clickEvent);
  };

  const { id } = $$props;
</script>

<div class="mobile-header-template" {id}>
  <div {...$$restProps} class={className}>
    <slot name="video" />
    <slot name="content" />
  </div>
</div>

<style>
  @import './header-block-mobile.css';
</style>
