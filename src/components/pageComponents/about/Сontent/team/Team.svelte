<script lang="ts">
  import { Employee } from './Employee';
  import { ContentBlock } from '@components/templates';
  import { Tag } from '@components/atoms';
  import { MOBILE_WIDTH } from '@components/const';
  
  $: innerWidth = 0;

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

  const mobileMembers = [
    { name: 'Андрей Иванов', role: 'Лидер стрима', avatar: 'AIvanov.png' },
    { name: 'Игорь Иванов', role: 'Руководитель отдела дизайна', avatar: 'IIvanov.png' },
    { name: 'Диана Иванова', role: 'Руководитель проекта', avatar: 'DIvanova.png' },
    { name: 'Эльдар Гызыев', role: 'Дизайнер ОДС Aдмирал', avatar: 'EGyzyev.png' },
    { name: 'Андрей Литвинов', role: 'Лидер команды Web разработки', avatar: 'ALitvinov.png' },
    { name: 'Виктория Шуваева', role: 'Менеджер проекта', avatar: 'VShuvaeva.png' },
    { name: 'Пётр Басин', role: 'Лидер команды UX исследований', avatar: 'PBasin.png' },
    { name: 'Никита Маслов', role: 'Менеджер проекта', avatar: 'NMaslov.png' },
    { name: 'Хочу в команду', role: 'Мы оставили это место для тебя', avatar: '', customAvatar: true },
  ];
</script>

<svelte:window bind:innerWidth />
<ContentBlock id="team" title="Команда">
  <div class="employees">
    {#if innerWidth > MOBILE_WIDTH}
      {#each members as item}
        <Employee {...item} />
      {/each}
    {:else}
      {#each mobileMembers as item}
        <Employee {...item} />
      {/each}
    {/if}

  </div>
  <div class="buttons-container">
    <Tag text='Улучшают сейчас' />
    <Tag text='12+ участников' />
  </div>
</ContentBlock>

<style>
  @import 'Team.css';
</style>
