<template>
  <section id="moviesSection" :class="attr">
    <div class="movies__inner container">
      <div class="movies__text">
        <h3>예술인들을 위한 추천 영화</h3>
        <p>
          영화를 통해 미술과 작가를 만나보아요.<br />작품에 대한 시대적 배경을
          알 수 있습니다!
        </p>
        <a href="#" class="button-green">바로가기</a>
      </div>
      <div class="movies__item">
        <div>
          <img src="@/assets/images/movies/movies01.png" alt="영화포스터" />
        </div>
        <div>
          <img src="@/assets/images/movies/movies02.png" alt="영화포스터" />
        </div>
        <div>
          <img src="@/assets/images/movies/movies03.png" alt="영화포스터" />
        </div>
        <div>
          <img src="@/assets/images/movies/movies04.png" alt="영화포스터" />
        </div>
        <div>
          <img src="@/assets/images/movies/movies05.png" alt="영화포스터" />
        </div>
        <div>
          <img src="@/assets/images/movies/movies06.png" alt="영화포스터" />
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
<style lang="scss">
.movies__wrap {
  overflow: hidden;
}
.movies__inner {
  height: 750px;
  .movies__text {
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

  .movies__item {
    @include flex-between;
    margin-top: 70px;
    position: absolute;
    > div {
      width: 268px;

      img {
        width: 100%;
        padding: 0 20px 0 0;
        @include border(20px);
      }
    }
  }
}

// movie__page
.movie__page {
  .movie__slider {
    display: none;
  }
  .movie__search {
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
  .movie__tag {
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
  .movie__cont {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 100px;

      li {
        width: 23.3333%;
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
