<script lang="ts">
  import Cover from './library.png';

  import { HeaderBlock } from '@components/templates';
</script>

<HeaderBlock id={'library'} class="library-header-image" style="background: url({Cover})">
  <div class="header__wrapper" slot="content">
    <span class="header-text">
      Визуальный <br />
      язык понятный <br />
      каждому
    </span>
  </div>
</HeaderBlock>


<style>
  @import "header.css";
</style>
