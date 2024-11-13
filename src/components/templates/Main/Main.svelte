<script>
  import { ContentWrapper } from '../ContentWrapper';
  import { Footer } from '@components/organisms';
  import { MOBILE_WIDTH } from '@components/const.ts';

  $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<main>
  <slot name="header" >
    Header Slot
  </slot>
  <ContentWrapper>
    <slot name="content">
      Content Slot
    </slot>
    {#if innerWidth > MOBILE_WIDTH}
      <Footer />
    {/if}
  </ContentWrapper>
</main>

<style>
    main {
        color: white;
        font-size: 20px;
        line-height: 1.6;
        flex: 1 1 auto;
        width: 100%;
        scroll-behavior: smooth;

        display: flex;
        flex-direction: column;
    }
</style>
