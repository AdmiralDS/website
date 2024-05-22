<script>
  import { HourglassOutline } from '@components/ui-kit/Svelte';

  export let skeleton = false;

  $: iconColor = skeleton ? 'transparent' : '#0d42ff';
</script>

<HourglassOutline width="16px" height="16px" stroke={iconColor} />
