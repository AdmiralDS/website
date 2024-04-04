<script lang="ts">
  export let current = false;
  export let color: string;
</script>

<div class="color-item__outer" style="background: {color}" on:click>
  <div class="color-item__inner" aria-current={current} on:click></div>
</div>

<style lang="css">
  .color-item__outer {
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    padding: 3px;
  }

  .color-item__inner {
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--White, #fff);
  }
  .color-item__inner[aria-current='true'] {
    margin-top: 2px;
    margin-left: 2px;
    width: 10px;
    height: 10px;
  }
</style>
