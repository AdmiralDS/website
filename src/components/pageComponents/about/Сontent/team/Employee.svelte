<script lang="ts">
  export let name: string;
  export let role: string;
  export let avatar: string;
  export let customAvatar: boolean;
  import { base } from '$app/paths';
  import PlusIcon from './plus.svelte';

  const srcUrl = `${base}/images/employee/${avatar}`;
</script>

<div class="stream-employee">
  {#if customAvatar}
    <div class="apply-for-role" on:click={() => window.open('mailto:Admiral@inno.tech')}>
      <PlusIcon />
    </div>
  {:else}
    <img class="avatar" src={srcUrl} alt={name} />
  {/if}
  <div class="name">{name}</div>
  <div class="role">{role}</div>
</div>

<style>
  .stream-employee {
    max-width: 145px;
  }
  .apply-for-role {
    cursor: pointer;
  }
  .stream-employee .avatar {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
  .stream-employee .name {
    color: var(--Dark_grey, #35383a);
    /* 16/medium */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
    margin-bottom: 4px;
    width: 55px;
  }
  .stream-employee .role {
    color: var(--Grey, #7a8190);

    /* 16/20/regular */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
  }
</style>
