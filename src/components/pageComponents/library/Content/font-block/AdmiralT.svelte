<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { renderer } from './Renderer';
  export let isDarkTheme: boolean;
  let theme: 'dark' | 'light' = isDarkTheme ? 'dark' : 'light';
  export let textType: 'Header' | 'Subtitle' | 'Body' | 'Caption' = 'Header';
  let prevTextType = textType;
  export let text: string = '';
  let prevText = text;

  let container;
  let root;

  const mountReactComponent = () => {
    if (container) {
      root = renderer(container, { theme, textType, text });
    }
  };

  const unmountReactComponent = () => {
    try {
      if (container) root.unmount();
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
