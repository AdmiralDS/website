<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { WrappedReactComponent } from './WrappedReactComponent';

  export let styleName: string;
  export let isDarkTheme: boolean;
  let theme: 'dark' | 'light' = isDarkTheme ? 'dark' : 'light';
  export let color: string = 'blue';
  let prevColor = color;
  export let borderRadius: number = 4;
  let prevBorderRadius = borderRadius;

  const components = ['Calendar', 'Alert view', 'Toast notification'];
  let activeComponent = 'Calendar';
  const handleCLickOnActiveComponent = (currentComponent: string) => (activeComponent = currentComponent);

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

  let container;

  const mountReactComponent = () => {
    if (container)
      ReactDOM.render(React.createElement(WrappedReactComponent, { theme, borderRadius, color }), container);
  };

  const unmountReactComponent = () => {
    try {
      if (container) ReactDOM.unmountComponentAtNode(container);
    } catch (err) {
      console.warn(`react-adapter failed to unmount.`, { err });
    }
  };

  onMount(mountReactComponent);

  onDestroy(unmountReactComponent);

  $: {
    const newTheme = isDarkTheme ? 'dark' : 'light';
    if (theme !== newTheme || prevBorderRadius !== borderRadius || prevColor !== color) {
      theme = newTheme;
      prevBorderRadius = borderRadius;
      prevColor = color;
      console.log(newTheme);
      unmountReactComponent();
      mountReactComponent();
    }
  }
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
  <div class="component-wrapper" bind:this={container} />
</div>

<style>
  .custom-info {
    width: 100%;
    height: fit-content;
    min-height: 380px;
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
