<script>
  import { ContentWrapper } from '../ContentWrapper';
</script>

<main  >
  <slot name="header" >
    Header Slot
  </slot>
  <ContentWrapper>
    <slot name="content">
      Content Slot
    </slot>
  </ContentWrapper>
</main>

<style>
    main {
        color: white;
        font-size: 20px;
        line-height: 1.6;
        flex: 1 1 auto;
        overflow: auto;
        width: 100%;
        scroll-behavior: smooth;

        display: flex;
        flex-direction: column;
    }
</style>
