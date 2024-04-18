<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { WrappedReactComponent } from './WrappedReactComponent';
  import { Chips } from '@components/ui-kit/Svelte';

  export let styleName: string;
  export let isDarkTheme: boolean;
  let theme: 'dark' | 'light' = isDarkTheme ? 'dark' : 'light';
  export let color: string = 'blue';
  let prevColor = color;
  export let colorPickerValueHex: string = '#ff00bb';
  let prevColorPickerValueHex = colorPickerValueHex;
  export let colorPickerValueHsv: { h: number; s: number; v: number; a: number } = { h: 316, s: 100, v: 100, a: 1 };
  let prevColorPickerValueHsv = colorPickerValueHsv;
  export let borderRadius: number = 4;
  let prevBorderRadius = borderRadius;

  const components = ['Calendar', 'Alert view', 'Notification'];
  let activeComponent = 'Calendar';
  let prevActiveComponent = activeComponent;
  const handleCLickOnActiveComponent = (currentComponent: string) => (activeComponent = currentComponent);

  let container;

  const mountReactComponent = () => {
    if (container)
      ReactDOM.render(
        React.createElement(WrappedReactComponent, {
          component: activeComponent,
          theme,
          borderRadius,
          color,
          colorPickerValueHex,
          colorPickerValueHsv,
        }),
        container,
      );
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
    if (
      activeComponent !== prevActiveComponent ||
      theme !== newTheme ||
      prevBorderRadius !== borderRadius ||
      prevColor !== color ||
      prevColorPickerValueHex !== colorPickerValueHex
    ) {
      prevActiveComponent = activeComponent;
      theme = newTheme;
      prevBorderRadius = borderRadius;
      prevColor = color;
      prevColorPickerValueHex = colorPickerValueHex;
      console.log(theme);
      unmountReactComponent();
      mountReactComponent();
    }
  }
</script>

<div class="custom-info">
  <div class="components-control-wrapper">
    {#each components as component}
      <Chips
        appearance="secondary"
        selected={activeComponent === component}
        on:click={() => handleCLickOnActiveComponent(component)}
      >
        {component}
      </Chips>
    {/each}
  </div>
  <div class="component-wrapper" bind:this={container} />
</div>

<style>
  .custom-info {
    width: 100%;
    height: fit-content;
    /*height: 445px;*/
    min-height: 445px;
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

  .component-wrapper {
    display: flex;
    margin: auto;
  }
</style>
