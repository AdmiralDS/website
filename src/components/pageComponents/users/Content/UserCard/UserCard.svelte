<script>
  import { onMount } from 'svelte';

  export let index, id, groupName, title, info, icon;
  let Icon;

  onMount(async () => {
    Icon = (await import(`../${icon}.svg`)).default;
  });
</script>

<div class="user-card" {id}>
  <div class="user-card__first-row">
    {`${index + 1} ${groupName}`}
  </div>
  <div class="user-card__last-row">
    <div class="user-card__info-column">
      <div class="user-card__info-main">{title}</div>
      <div class="user-card__info-sub">{info}</div>
    </div>
    <div class="user-card__icon-wrapper">
      <svelte:component this={Icon} class="user-card__icon" />
    </div>
  </div>
</div>

<style>
  @import './user-card.css';
</style>
