<script lang="ts">
  // <!--import Contacts from '../Contacts.astro';-->
</script>

<div  {...$$restProps} class='header'>
  <div class="header__content">
<!--    <Contacts />-->
    <slot />
  </div>
</div>

<style>
  @import "./header-block.css";
</style>
