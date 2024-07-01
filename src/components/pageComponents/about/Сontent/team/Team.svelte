<script lang="ts">
  import { default as Employee } from './Employee.svelte';
  import { ContentBlock } from '@components/templates';
  import { Tag } from '@components/atoms';

  const members = [
    { name: 'Андрей Иванов', role: 'Лидер стрима', avatar: 'AIvanov.png' },
    { name: 'Игорь Иванов', role: 'Руководитель отдела дизайна', avatar: 'IIvanov.png' },
    { name: 'Диана Иванова', role: 'Руководитель проекта', avatar: 'DIvanova.png' },
    { name: 'Эльдар Гызыев', role: 'Дизайнер ОДС Aдмирал', avatar: 'EGyzyev.png' },
    { name: 'Андрей Литвинов', role: 'Лидер команды Web разработки', avatar: 'ALitvinov.png' },
    { name: 'Виктория Шуваева', role: 'Менеджер проекта', avatar: 'VShuvaeva.png' },
    { name: 'Анастасия Журавлева', role: 'Дизайнер ОДС Aдмирал', avatar: 'AZhuravleva.png' },
    { name: 'Пётр Басин', role: 'Лидер команды UX исследований', avatar: 'PBasin.png' },
    { name: 'Никита Маслов', role: 'Менеджер проекта', avatar: 'NMaslov.png' },
    { name: 'Хочу в команду', role: 'Мы оставили это место для тебя', avatar: '', customAvatar: true },
  ];
</script>

<ContentBlock id="team" title="Команда">
  <div class="employees">
    {#each members as item}
      <Employee {...item} />
    {/each}
  </div>
  <div class="buttons-container">
    <Tag text='Улучшают сейчас' />
    <Tag text='12+ участников' />
  </div>
</ContentBlock>

<style>
  .employees {
    padding: 40px 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 16px;
    row-gap: 20px;
  }
  .buttons-container {
    display: flex;
    column-gap: 5px;
  }
</style>
