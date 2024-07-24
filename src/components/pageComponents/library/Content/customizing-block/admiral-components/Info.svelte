<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { WrappedReactComponent } from './WrappedReactComponent';
  import { Chips } from '@components/atoms';
  import { renderer } from './Renderer';

  export let styleName: string;
  export let isDarkTheme: boolean;
  let theme: 'dark' | 'light' = isDarkTheme ? 'dark' : 'light';
  export let color: string = 'blue';
  let prevColor = color;
  export let colorPickerValueHex: string = '#ff00bb';
  let prevColorPickerValueHex = colorPickerValueHex;
  export let colorPickerValueHsv: { h: number; s: number; v: number; a: number } = { h: 316, s: 100, v: 100, a: 1 };
  let prevColorPickerValueHsv = colorPickerValueHsv;
  export let borderRadius: 0 | 2 | 4 | 6 | 8 | 10 = 4;
  let prevBorderRadius = borderRadius;

  const components = ['Calendar', 'Dropdown Menu', 'Notifications'];
  let activeComponent = 'Calendar';
  let prevActiveComponent = activeComponent;
  const handleCLickOnActiveComponent = (currentComponent: string) => (activeComponent = currentComponent);

  let container;
  let root;

  const mountReactComponent = () => {
    if (container)
      root = renderer(container, {
        component: activeComponent,
        theme,
        borderRadius,
        color,
        colorPickerValueHex,
        colorPickerValueHsv,
      });
    // ReactDOM.render(
    //   React.createElement(WrappedReactComponent, {
    //     component: activeComponent,
    //     theme,
    //     borderRadius,
    //     color,
    //     colorPickerValueHex,
    //     colorPickerValueHsv,
    //   }),
    //   container,
    // );
  };

  const unmountReactComponent = () => {
    try {
      if (root) root.unmount();
      // ReactDOM.unmountComponentAtNode(container);
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
  @import 'info.css';
</style>
