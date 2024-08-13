<script lang="ts">
  import Cover from './image.png';

  import { HeaderBlock } from '@components/templates';
</script>

<HeaderBlock id={'users'} class="users-header-image" style="background: url({Cover})">
  <div class="header__wrapper" slot="content">
    <span class="header-text">
      С адмирал <br />
      все говорят <br />
      на одном языке
    </span>
  </div>
</HeaderBlock>

<style>
  @import './header.css';
</style>
