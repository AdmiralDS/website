<script lang="ts">
  export let heading: string;
</script>

<div class="subcontent-block" id={$$props.id}>
  <div class="subcontent-block__first-column">
    <div class="subcontent-block__info-wrapper">
      <div class="subcontent-block__heading">{heading}</div>
      <div class="subcontent-block__info">
        <slot name="description" />
      </div>
    </div>
    <div class="subcontent-block__tags-wrapper">
      <slot name="tags" />
    </div>
  </div>
  <div class="subcontent-block__last-column">
    <slot name="subcontent" />
  </div>
</div>

<style>
  @import 'subcontent-block.css';
</style>
