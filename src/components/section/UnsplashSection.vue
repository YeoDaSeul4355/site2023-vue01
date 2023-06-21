<template>
  <section id="unsplashSection" :class="attr">
    <div class="unsplash__inner container">
      <div class="unsplash__text">
        <h3>작품 이미지 다운로드</h3>
        <p>
          유명 화가들의 작품들을 고화질로 다운로드 받을 수 있습니다.<br />상업적
          이용은 피해주세요!
        </p>
        <a href="#" class="button-yellow">바로가기</a>
      </div>
      <div class="unsplash__item">
        <div>
          <img
            src="@/assets/images/unsplash/unsplash01.png"
            alt="unsplashIMG"
          />
        </div>
        <div>
          <img
            src="@/assets/images/unsplash/unsplash02.png"
            alt="unsplashIMG"
          />
        </div>
        <div>
          <img
            src="@/assets/images/unsplash/unsplash03.png"
            alt="unsplashIMG"
          />
        </div>
        <div>
          <img
            src="@/assets/images/unsplash/unsplash04.png"
            alt="unsplashIMG"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    attr: String,
  },
};
</script>
<style lang="scss" scoped>
// unsplash__wrap
@import "@/assets/scss/setting/mixins.scss";

.unsplash__wrap {
  overflow: hidden;
}
.unsplash__inner {
  height: 600px;
  .unsplash__text {
    h3 {
      font-size: 50px;
      margin-bottom: 40px;
    }
    p {
      font-size: 22px;
      font-weight: 300;
      margin-bottom: 60px;
    }
    a {
      @include border(50px);
    }
  }

  .unsplash__item {
    @include flex-between;
    margin-top: 70px;
    position: absolute;
    > div {
      width: 413px;

      img {
        width: 100%;
        padding: 0 20px 0 0;
        @include border(20px);
      }
    }
  }
}

// unsplash__page
.unsplash__page {
  .unsplash__slider {
    display: none;
  }
  .unsplash__search {
    text-align: center;
    margin-bottom: 50px;
    input {
      border: 1px solid #e8ecf2;
      font-size: 16px;
      padding: 10px 20px;
      @include border(50px);
      min-width: 300px;
      margin-right: 10px;
    }
    button {
      @include border(50px);
    }
  }
  .unsplash__tag {
    ul {
      display: flex;
      justify-content: center;
      margin-top: 100px;
      margin-bottom: 50px;
      li {
        a {
          border: 1px solid #8b99ad;
          padding: 10px 20px;
          margin: 0 10px;
          color: #8b99ad;
          &:hover {
            border-radius: 30px;
            color: #fff;
            background-color: #8b99ad;
            transition: all 0.5s;
          }
        }
      }
    }
  }
  .unsplash__cont {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 100px;

      li {
        width: 31.3333%;
        margin-bottom: 4%;

        span {
          display: block;
          margin: 4px 0;
        }
      }
    }
  }
}
</style>
