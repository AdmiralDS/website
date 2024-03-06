<script lang="ts">

  export let styleName: string;
  export let isDarkTheme: boolean;
  export let color: string;
  
  const components = ["Calendar", "Alert view", "Toast notification"];
  let activeComponent = "Calendar";
  const handleCLickOnActiveComponent = (currentComponent: string) =>  activeComponent = currentComponent;

  // TODO: добавить react-компоненты
  // const getComponent = () => {
  //   switch (activeComponent) {
  //     case 'Calendar':
  //       return Calendar;
  //     case 'Alert view':
  //       return Alert;
  //     case 'Toast notification':
  //       return Notification;
  //   }
  // };
</script>

<div class="custom-info">
  <div class="components-control-wrapper">
    {#each components as component}
    <div 
        class={`custom-chip-control ${activeComponent === component ? 'custom-chip-control--active' : ''}`}
        on:click={() => handleCLickOnActiveComponent(component)}
      >
        {component}
      </div>
    {/each}
  </div>
  <div class="component-wrapper">{activeComponent}</div>
  <!-- <svelte:component this={getComponent()} /> -->
</div>

<style>
    .custom-info {
        width: 100%;
        height: 380px;
        border-radius: 12px;
        background: var(--Dark_blue_gradient);
        padding: 20px;

        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    }

    .components-control-wrapper {
      display: flex;
      gap: 10px;
      margin-bottom: 40px;
    }

    .custom-chip-control {
      padding: 4px 12px;
      outline: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 64px;
      cursor: pointer;

      color: rgb(255, 255, 255);
      font-family: Inter;
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
    }

    .custom-chip-control.custom-chip-control--active {
      background: rgba(255, 255, 255, 0.2);
      outline: none;
    }

    .component-wrapper {
      display: flex;
      margin: auto;
    }
</style>
