<template>
  <section id="youtubeSection" :class="attr">
    <div class="youtube__inner container">
      <div class="youtube__text">
        <h3>현대 미술 유튜버 추천</h3>
        <p>
          다양한 작품들을 자신의 관점으로 해석하는 영상을 준비했습니다.<br />구독과
          좋아요! 부탁드립니다.
        </p>
        <a href="#" class="button-blue">자세히 보기</a>
      </div>
      <div class="youtube__item">
        <div>
          <img src="@/assets/images/youtube/youtube01.png" alt="유튜브" />
        </div>
        <div>
          <img src="@/assets/images/youtube/youtube02.png" alt="유튜브" />
        </div>
        <div>
          <img src="@/assets/images/youtube/youtube03.png" alt="유튜브" />
        </div>
        <div>
          <img src="@/assets/images/youtube/youtube04.png" alt="유튜브" />
        </div>
        <div>
          <img src="@/assets/images/youtube/youtube05.png" alt="유튜브" />
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
@import "@/assets/scss/setting/mixins.scss";
.youtube__wrap {
  overflow: hidden;
}
.youtube__inner {
  height: 600px;
  .youtube__text {
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

  .youtube__item {
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

// youtube__page
.youtube__page {
  .youtube__slider {
    display: none;
  }
  .youtube__search {
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
  .youtube__tag {
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
          transition: all 0.5s;
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
  .youtube__cont {
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
