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
  @import './user-list.css';
</style>
