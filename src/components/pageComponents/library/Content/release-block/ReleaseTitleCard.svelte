<div class="release-title-card">
  <div class="release-title-card__header">Релизы</div>
  <div class="release-title-card__info">Анонсы и релизы <br /> дизайн-системы Admiral</div>
</div>

<style lang="css">
  .release-title-card {
    box-sizing: border-box;
    height: 75px;
    border: none;
    cursor: default;
  }
  .release-title-card__header {
    color: var(--Dark_grey, #35383a);
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
    margin-bottom: 10px;

    @media (max-width: 767px) {
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0px;
    }
  }
  .release-title-card__info {
    color: var(--Grey);
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
