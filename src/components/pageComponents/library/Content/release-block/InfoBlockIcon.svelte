<script>
  import { HourglassOutline } from '@components/atoms';

  export let skeleton = false;

  $: iconColor = skeleton ? 'transparent' : '#0d42ff';
</script>

<HourglassOutline width="16px" height="16px" viewBox="0 0 16 16" stroke={iconColor} />
