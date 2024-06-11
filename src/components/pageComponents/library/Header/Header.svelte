<script lang="ts">
  import Cover from './library.png';

  import { HeaderBlock } from '@components/templates';
  import { Divider } from '@components/atoms';
</script>

<HeaderBlock id={'library'} class="library-header-image" style="background: url({Cover})">
  <Divider />
  <div class="header__wrapper">
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
