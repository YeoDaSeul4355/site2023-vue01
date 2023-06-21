<template>
  <section id="imagesSection" class="images__wrap section center">
    <h3>근대 미술 대표 화가</h3>
    <p>근•현대 미술의 유명한 대표 화가들을 소개합니다.</p>
    <div class="images__inner container">
      <div class="member">
        <figure class="images__header">
          <img src="@/assets/images/image/artist01.png" alt="카드1" />
        </figure>
        <div class="images__body">
          <h4>알폰스 무하</h4>
          <a href="@" class="btn">작품 보기</a>
        </div>
      </div>
      <div class="member">
        <figure class="images__header">
          <img src="@/assets/images/image/artist02.png" alt="카드1" />
        </figure>
        <div class="images__body">
          <h4>마르크 샤갈</h4>
          <a href="@" class="btn">작품 보기</a>
        </div>
      </div>
      <div class="member">
        <figure class="images__header">
          <img src="@/assets/images/image/artist03.png" alt="카드1" />
        </figure>
        <div class="images__body">
          <h4>살바도르 달리</h4>
          <a href="@" class="btn">작품 보기</a>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.images__inner {
  @include flex-between;

  .member {
    width: 32%;
    .images__header {
      margin-top: -20px;

      img {
        width: 100%;
      }
    }
    .images__body {
      z-index: 100;
      position: relative;
      margin-top: -90px;
      padding: 15px 10px;
      background: #000000c4;
      color: #fff;

      h4 {
        font-size: 22px;
      }
      a {
        color: #fff;
        font-weight: 300;
        text-decoration: underline;
        text-underline-position: under;
      }
    }
  }
}
</style>
