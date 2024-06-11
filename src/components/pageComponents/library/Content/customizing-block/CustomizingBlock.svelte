<script>
import { ContentBlock } from '@components/templates';
import Switcher from './switcher/Switcher.svelte';
import './customizingBlock.css';
</script>

<ContentBlock id="customizing" title="КАСТОМИЗАЦИЯ">
  <div class="customizing__info">
    Компоненты в библиотеке являются базовыми для<br />
    системы и могут закрыть большинство потребностей<br />
    при проектировании интерфейсов
  </div>
  <div class="switcher-wrapper">
    <Switcher />
  </div>
</ContentBlock>
