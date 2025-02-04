<script lang="ts">
  export let name: string;
  export let role: string;
  export let avatar: string;
  export let customAvatar: boolean;
  import { base } from '$app/paths';
  import PlusIcon from '@assets/icons/plus.svelte';

  const srcUrl = `${base}/images/employee/${avatar}`;
</script>

<div class="stream-employee">
  {#if customAvatar}
    <!-- svelte-ignore a11y-no-static-element-interactions a11y-click-events-have-key-events -->
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
  @import './employee.css';
</style>
