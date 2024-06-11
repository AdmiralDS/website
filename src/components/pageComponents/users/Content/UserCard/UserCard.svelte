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
  .user-card {
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    background: var(--Dark_blue_gradient);
    padding: 20px 20px 40px 20px;
  }

  .user-card__first-row {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 20px;
    word-spacing: 20px;

    color: var(--Light_grey, #e6eaf0);
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }

  .user-card__last-row {
    display: grid;
    grid-template-columns: 67% auto;
  }

  .user-card__info-column {
    display: flex;
    flex-direction: column;
    padding-top: 45px;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
  }

  .user-card__info-main {
    color: var(--White, #fff);
    font-family: CoFo Kak;
    font-size: 40px;
    font-weight: 800;
    line-height: 40px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .user-card__info-sub {
    color: var(--Light_grey, #e6eaf0);
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
  }

  .user-card__icon-wrapper {
    margin: 40px auto 0;
    width: 120px;
    height: 120px;
  }

  :global(.user-card__icon) {
    width: 100%;
    height: 100%;
  }
</style>
