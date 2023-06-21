<template>
  <section id="cardsSection" :class="attr">
    <h3>대표 작품 구경하기</h3>
    <p>각 시대별로 유명했던 작품들을 모아놓았습니다.</p>
    <div class="cards__inner container">
      <div class="cards__btn">
        <ul>
          <li class="active"><a href="#">1880년대</a></li>
          <li><a href="#">1920년대</a></li>
          <li><a href="#">1940년대</a></li>
          <li><a href="#">1960년대</a></li>
        </ul>
      </div>
      <div class="cards__conts">
        <div class="card" v-for="(text, index) in texts" :key="index">
          <figure class="card__header">
            <img :src="text.img" :alt="'카드' + (index + 1)" />
          </figure>
          <div class="card__body">
            <span>
              <img :src="text.icon" alt="작가" />
            </span>
            <div>
              <h4>{{ text.title }}</h4>
              <p>{{ text.desc }}</p>
            </div>
          </div>
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
  data: function () {
    return {
      texts: [
        {
          img: "./images/card/card01.jpg",
          icon: "./images/card/card_icon01.png",
          title: "백일몽",
          desc: "알폰스 무하",
        },
        {
          img: "./images/card/card02.jpg",
          icon: "./images/card/card_icon02.png",
          title: "구성II - 빨강, 파랑 그리고 노랑",
          desc: "피에트 몬드리안",
        },
        {
          img: "./images/card/card03.jpg",
          icon: "./images/card/card_icon03.png",
          title: "별이 빛나는 밤",
          desc: "빈센트 반고흐",
        },
        {
          img: "./images/card/card04.jpg",
          icon: "./images/card/card_icon04.png",
          title: "KISS",
          desc: "구스타프 클림트",
        },
        {
          img: "./images/card/card05.jpg",
          icon: "./images/card/card_icon05.png",
          title: "Ophelia",
          desc: "존 에버렛 밀레이",
        },
        {
          img: "./images/card/card06.jpg",
          icon: "./images/card/card_icon06.png",
          title: "꿈(La rve)",
          desc: "파블로 피카소",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/setting/mixins.scss";
.cards__inner {
  .cards__btn {
    margin-bottom: 30px;

    ul {
      display: flex;
      justify-content: center;

      li {
        display: inline-block;
        margin: 0px 10px 10px 10px;
        padding: 10px;
        background-color: #d9e4ff;
        border-radius: 50px;
        border: 1px solid #a2bcff;
        transition: background-color 0.3s;

        &:hover {
          background-color: darken(#d9e4ff, 10%);
        }

        a {
          padding: 10px 15px;
          font-size: 18px;
          font-weight: 300;
          color: #232323;
        }
      }
    }
  }

  .cards__conts {
    @include flex-between;
    flex-wrap: wrap;
    .card {
      width: 32.2222%;
      text-align: left;
      line-height: 1.4;
      .card__header {
        img {
          width: 100%;
        }
      }
      .card__body {
        display: flex;
        align-items: center;
        margin-top: 10px;
        span {
          padding-right: 10px;
        }

        h4 {
          font-size: 20px;
          font-weight: 500;
        }
        p {
          font-size: 16px;
          color: #8997a8;
        }
      }
      &:nth-child(4),
      &:nth-child(5),
      &:nth-child(6) {
        margin-top: 50px;
      }
    }
  }
}
</style>
