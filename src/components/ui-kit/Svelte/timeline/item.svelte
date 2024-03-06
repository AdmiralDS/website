<script lang="ts">
  import type { TimelineItem } from 'common';

  export let item: TimelineItem;
</script>

<div class="timeline-item" class:active={!!item.active}>
  <div class="line" />
  <div class="point" class:small={item.size === 's'} class:large={item.size === 'l'}>
    {#if item.title || item.detail}
      <div class="point-text" class:bottom={item.textPosition === 'bottom'} class:top={item.textPosition === 'top'}>
        {#if item.title}
          <div class="point-title">
            {item.title}
          </div>
        {/if}
        {#if item.detail}
          <div class="point-detail" class:with-border={item.detailHasBorder}>
            {item.detail}
          </div>
        {/if}
      </div>
    {/if}
  </div>
</div>

<style>
  .timeline-item {
    display: flex;
    flex: 1 0 auto;
    align-items: center;
  }

  .timeline-item:first-child {
    flex: 0 1 auto;
  }

  .timeline-item:first-child .line {
    display: none;
  }

  .timeline-item .line {
    flex: 1 0 auto;
    height: 2px;
    background-color: grey;
  }

  .timeline-item .point {
    flex: 0 1 auto;
    background: none;
    text-align: center;
    line-height: 1.2;
    position: relative;
    border-radius: 50%;
    border: 2px solid #7a8190;
  }

  .timeline-item .point.large {
    width: 20px;
    height: 20px;
  }

  .timeline-item .point.small {
    width: 10px;
    height: 10px;
  }

  .timeline-item .point.small .point-detail {
    color: var(--Grey, #7a8190);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px; /* 125% */
    letter-spacing: -0.1px;
  }

  .timeline-item.active .point {
    border-color: #0d42ff;
  }

  .timeline-item .point-text {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 240px;
    align-items: baseline;
    row-gap: 10px;
    text-align: start;
  }

  .timeline-item .small .point-text {
    width: 180px;
  }

  .timeline-item .point-text.bottom {
    top: 40px;
  }
  .timeline-item .point-text.top {
    bottom: 20px;
  }

  .timeline-item .point-title {
    color: var(--Dark_grey, #35383a);
    font-variant-numeric: lining-nums tabular-nums;

    /* 20/25 */
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 125% */
  }

  .timeline-item .point-detail {
    color: var(--Grey, #7a8190);

    /* 16/20/regular */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
  }
  .timeline-item .point-detail.with-border {
    border-radius: 4px;
    border: 1px solid var(--Light_grey, #e6eaf0);
    background: var(--White, #fff);
    padding: 10px;
    box-sizing: border-box;
  }
</style>
