<script>
    import Toggle from "@components/ui-kit/Svelte/Toggle/toggle.svelte";
    import {IconArrowLeft, IconArrowRight} from "@components/ui-kit";
  //   let currentIndex = 0;
  // const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']; // Add your items here

  // function slide(direction) {
  //   if (direction === 'left') {
  //     currentIndex = (currentIndex - 1 + items.length) % items.length;
  //   } else {
  //     currentIndex = (currentIndex + 1) % items.length;
  //   }
  // }
</script>

<div class="icons-block__icon-tile">
    <div class="icons-block__tile-header">
        <div class="icons-block__tile-heading">Actions</div>
        <div class="icons-block__switcher-wrapper">
            <Toggle />
            <div class="icons-block__switcher-title">Solid</div>
        </div>
    </div>
    
    <div class="icons-block__icons-wrapper"></div>

    <div class="icons-block__controls-wrapper">
        <div class="icons-block__arrow-button">
            <IconArrowLeft width='16' height='16' />
        </div>
        <div class="icons-block__arrow-button">
            <IconArrowRight width='16' height='16' />
        </div>
    </div>
</div>

<style lang="css">
	@import 'icons-block.css';
</style	>