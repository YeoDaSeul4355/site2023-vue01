<template>
  <section id="cardsSection" class="container section">
    <div class="cards__inner container">
      <div class="cards__btn">
        <button
          :class="{ active: activeButton === cardTag.menu1 }"
          @click="handleButtonClick(cardTag.menu1)"
        >
          {{ cardTag.menu1 }}
        </button>
        <button
          :class="{ active: activeButton === cardTag.menu2 }"
          @click="handleButtonClick(cardTag.menu2)"
        >
          {{ cardTag.menu2 }}
        </button>
        <button
          :class="{ active: activeButton === cardTag.menu3 }"
          @click="handleButtonClick(cardTag.menu3)"
        >
          {{ cardTag.menu3 }}
        </button>
      </div>
      <div class="cards__conts">
        <CardText
          v-for="(text, index) in cardData"
          :key="index"
          :cardImg="text.cardImg"
          :iconImg="text.iconImg"
          :title="text.title"
          :desc="text.desc"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CardText from "./CardText.vue";

export default {
  components: {
    CardText,
  },
  data() {
    return {
      activeButton: "1800년대",
      cardTag: {
        menu1: "1800년대",
        menu2: "1900년대",
        menu3: "2000년대",
      },
      cardData: [
        {
          cardImg: "./images/card/card01.jpg",
          iconImg: "./images/card/card_icon01.png",
          title: "백일몽",
          desc: "알폰스 무하",
        },
        {
          cardImg: "./images/card/card02.jpg",
          iconImg: "./images/card/card_icon02.png",
          title: "구성II - 빨강, 파랑 그리고 노랑",
          desc: "피에트 몬드리안",
        },
        {
          cardImg: "./images/card/card03.jpg",
          iconImg: "./images/card/card_icon03.png",
          title: "별이 빛나는 밤",
          desc: "빈센트 반고흐",
        },
        {
          cardImg: "./images/card/card04.jpg",
          iconImg: "./images/card/card_icon04.png",
          title: "KISS",
          desc: "구스타프 클림트",
        },
        {
          cardImg: "./images/card/card05.jpg",
          iconImg: "./images/card/card_icon05.png",
          title: "Ophelia",
          desc: "존 에버렛 밀레이",
        },
        {
          cardImg: "./images/card/card06.jpg",
          iconImg: "./images/card/card_icon06.png",
          title: "꿈(La rve)",
          desc: "파블로 피카소",
        },
      ],
    };
  },
  methods: {
    handleButtonClick(buttonName) {
      this.activeButton = buttonName;

      if (buttonName === this.cardTag.menu2) {
        this.cardData = [
          {
            cardImg: "./images/card/card07.png",
            iconImg: "./images/card/card_icon07.png",
            title: "이렌 캉 당베르 양의 초상화",
            desc: "르누아르",
          },
          {
            cardImg: "./images/card/card08.png",
            iconImg: "./images/card/card_icon08.png",
            title: "오송빌 백작부인의 초상화",
            desc: "앵그르",
          },
          {
            cardImg: "./images/card/card09.png",
            iconImg: "./images/card/card_icon09.png",
            title: "진주 귀걸이를 한 소녀",
            desc: "요페르메이르하네스",
          },
          {
            cardImg: "./images/card/card10.png",
            iconImg: "./images/card/card_icon10.png",
            title: "그랑드자트섬의 일요일 오후",
            desc: "조르주 쇠라",
          },
          {
            cardImg: "./images/card/card11.png",
            iconImg: "./images/card/card_icon11.png",
            title: "열개의 별",
            desc: "클로드 모네",
          },
          {
            cardImg: "./images/card/card12.png",
            iconImg: "./images/card/card_icon12.png",
            title: "호라티우스 형제의 맹세",
            desc: "자크루이 다비드",
          },
        ];
      } else if (buttonName === this.cardTag.menu3) {
        this.cardData = [
          {
            cardImg: "./images/card/card13.png",
            iconImg: "./images/card/card_icon01.png",
            title: "백일몽",
            desc: "알폰스 무하",
          },
          {
            cardImg: "./images/card/card14.png",
            iconImg: "./images/card/card_icon02.png",
            title: "구성II - 빨강, 파랑 그리고 노랑",
            desc: "피에트 몬드리안",
          },
          {
            cardImg: "./images/card/card15.png",
            iconImg: "./images/card/card_icon02.png",
            title: "구성II - 빨강, 파랑 그리고 노랑",
            desc: "피에트 몬드리안",
          },
          {
            cardImg: "./images/card/card16.png",
            iconImg: "./images/card/card_icon02.png",
            title: "구성II - 빨강, 파랑 그리고 노랑",
            desc: "피에트 몬드리안",
          },
          {
            cardImg: "./images/card/card17.png",
            iconImg: "./images/card/card_icon02.png",
            title: "구성II - 빨강, 파랑 그리고 노랑",
            desc: "피에트 몬드리안",
          },
          {
            cardImg: "./images/card/card18.png",
            iconImg: "./images/card/card_icon02.png",
            title: "구성II - 빨강, 파랑 그리고 노랑",
            desc: "피에트 몬드리안",
          },
        ];
      } else {
        this.cardData = [
          {
            cardImg: "./images/card/card01.jpg",
            iconImg: "./images/card/card_icon01.png",
            title: "백일몽",
            desc: "알폰스 무하",
          },
          {
            cardImg: "./images/card/card02.jpg",
            iconImg: "./images/card/card_icon02.png",
            title: "구성II - 빨강, 파랑 그리고 노랑",
            desc: "피에트 몬드리안",
          },
        ];
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.cards__inner {
  .cards__btn {
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    button {
      display: inline-block;
      margin: 0px 10px 10px 10px;
      padding: 10px 20px;
      background-color: #d9e4ff;
      border-radius: 50px;
      border: 1px solid #a2bcff;
      transition: background-color 0.3s;
      font-size: 18px;
      font-weight: 300;
      cursor: pointer;
      &:hover {
        background-color: darken(#d9e4ff, 10%);
      }
      &.active {
        background-color: darken(#d9e4ff, 10%);
      }
    }
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
      margin-top: 50px;
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
      }
    }
  }
}
</style>
