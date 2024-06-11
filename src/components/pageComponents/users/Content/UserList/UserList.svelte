<script>
  import users from './users.json';
  import { UserCard } from '../UserCard';
</script>

<div class="users-list">
  {#each users as user, index}
    <UserCard {index} {...user} />
  {/each}
</div>

<style>
  .users-list {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 100px;
    border-bottom: 1px solid var(--Light_grey, #e6eaf0);
    gap: 10px;
  }
</style>
