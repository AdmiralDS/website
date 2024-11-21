<script lang="ts">
  import history from './history.json';
  import { ScrollableTimeline } from '@components/organisms';
  import { ContentBlock } from '@components/templates';
</script>

<ContentBlock title="история развития">
  <div class="history-wrapper">
    <ScrollableTimeline items={history} />
  </div>
</ContentBlock>

<style>
  @import 'History.css';
</style>
