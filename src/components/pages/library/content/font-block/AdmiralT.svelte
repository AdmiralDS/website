<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { WrappedAdmiralT } from '@components/pages/library/content/font-block/WrappedAdmiralT.tsx';

  export let isDarkTheme: boolean;
  let theme: 'dark' | 'light' = isDarkTheme ? 'dark' : 'light';
  export let textType: 'Header' | 'Subtitle' | 'Body' | 'Caption' = 'Header';
  let prevTextType = textType;
  export let text: string = '';
  let prevText = text;

  let container;

  const mountReactComponent = () => {
    if (container)
      ReactDOM.render(
        React.createElement(WrappedAdmiralT, {
          theme,
          textType,
          text,
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
    if (theme !== newTheme || prevTextType !== textType || prevText !== text) {
      theme = newTheme;
      prevTextType = textType;
      prevText = text;
      unmountReactComponent();
      mountReactComponent();
    }
  }
</script>

<div bind:this={container} />
