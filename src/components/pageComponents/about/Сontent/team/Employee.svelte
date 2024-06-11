<script lang="ts">
  export let name: string;
  export let role: string;
  export let avatar: string;
</script>

<div class="stream-employee">
  <img class="avatar" src={`/images/employee/${avatar}`} alt={name} />
  <div class="name">{name}</div>
  <div class="role">{role}</div>
</div>

<style>
  .stream-employee {
    max-width: 145px;
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
    width: 10px;
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
