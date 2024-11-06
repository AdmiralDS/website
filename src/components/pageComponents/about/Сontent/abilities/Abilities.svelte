<script lang="ts">
  import { Switcher } from './Switcher';
  import { ContentBlock } from '@components/templates';
  import { MobilePlug } from '@components/atoms';
</script>

<ContentBlock id="abilities" title="Возможности" class="abilities-block">
  <div class="abilities-container">
    <Switcher />
  </div>
  <MobilePlug isTransparent />
</ContentBlock>

<style>
  @import 'abilities.css';
</style>
