<template>
  <section id="sliderSection" :class="attr">
    <div class="slider__inner">
      <h2 class="blind">배너 슬라이드</h2>
      <swiper
        :slides-per-view="1"
        :space-8between="50"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :loop="true"
        :modules="modules"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(slider, index) in sliders" :key="index">
          <div class="slider__img">
            <div class="slider s1 container">
              <div class="text">
                <h3 v-html="slider.title"></h3>
                <p v-html="slider.desc"></p>
                <a href="#" class="more button-red">더 알아보기</a>
              </div>
              <div class="img" aria-label="hidden">
                <img :src="slider.iconImg01" :alt="slider.title" />
                <img :src="slider.iconImg02" :alt="slider.title" />
                <img :src="slider.iconImg03" :alt="slider.title" />
              </div>
              <div class="circle" aria-label="hidden">
                <span class="circle c1"></span>
                <span class="circle c2"></span>
                <span class="circle c3"></span>
                <span class="circle c4"></span>
                <span class="circle c5"></span>
              </div>
            </div>
          </div>
        </swiper-slide>
        ...
      </swiper>
    </div>
  </section>
</template>
<script>
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
export default {
  // 속성값
  props: {
    attr: String,
  },
  // 데이터
  data: function () {
    return {
      sliders: [
        {
          title: "MORDERN<br />ART",
          desc: "감각적인 경험과 사회적인 의미를 통해 상상력과 현실의 경계를 <br />허무는 근•현대 미술을 소개합니다.",
          iconImg01: "./images/slider/slider_icon12.png",
          iconImg02: "./images/slider/slider_icon11.png",
          iconImg03: "./images/slider/slider_icon13.png",
        },
        {
          title: "PIECE <br />OF WORK",
          desc: "근•현대 대표 화가들의 작품들을 <br />감상해보세요!",
          iconImg01: "./images/slider/slider_icon03.png",
          iconImg02: "./images/slider/slider_icon07.png",
          iconImg03: "./images/slider/slider_icon02.png",
        },
        {
          title: "ART OF<br />MOVIE",
          desc: "감각적인 경험과 사회적인 의미를 통해 상상력과 현실의 경계를 <br />허무는 근•현대 미술을 소개합니다.",
          iconImg01: "./images/slider/slider_icon09.png",
          iconImg02: "./images/slider/slider_icon04.png",
          iconImg03: "./images/slider/slider_icon10.png",
        },
      ],
    };
  },
  // 스와이퍼
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Autoplay],
    };
  },
};
</script>

<style lang="scss">
// slider__wrap
@import "@/assets/scss/setting/mixins.scss";
.swiper {
  overflow: visible;
}
.swiper-pagination {
  bottom: -80px !important;
}
.slider__wrap {
  background-color: #ededed;
}
.slider__inner {
  overflow: hidden;
  position: relative;
  padding: 100px 0;
  .slider__img {
    .slider {
      .text {
        h3 {
          font-size: 110px;
          font-weight: 800;
          text-transform: uppercase;
          line-height: 1;
          margin-bottom: 40px;
        }

        p {
          font-size: 24px;
          line-height: 1.2;
          margin-bottom: 50px;
        }

        .more {
          // display: inline-block;
          // background-color: #ffbf6b;
          // color: #fff;
          // padding: 10px 40px;
          font-size: 18px;
        }
      }
      .img {
        position: absolute;
        right: 0;
        top: -120px;
        width: 600px;
        height: 600px;
        background-image: url(@/assets/images/slider/slider_circle01.png);
        background-size: cover;
        img {
          &:nth-child(1) {
            position: absolute;
            width: 300px;
            top: 20px;
          }
          &:nth-child(2) {
            position: absolute;
            width: 300px;
            right: 0;
            top: 130px;
          }
          &:nth-child(3) {
            position: absolute;
            width: 300px;
            bottom: 0;
          }
        }
      }
      .circle {
        span {
          display: block;
          position: absolute;
          left: 50%;
          top: 50%;
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }
        span:nth-child(1) {
          background-color: var(--button_blue);
          left: 50%;
          width: 10px;
          height: 10px;
        }
        span:nth-child(2) {
          background-color: var(--button_red);
          top: 20%;
          left: -10%;
          width: 40px;
          height: 40px;
        }
        span:nth-child(3) {
          background-color: var(--button_yellow);
          left: 100%;
          top: 10%;
        }
        span:nth-child(4) {
          background-color: var(--button_green);
          left: 17%;
          top: -10%;
          width: 10px;
          height: 10px;
        }
        span:nth-child(5) {
          background-color: var(--button_blue);
          left: 90%;
          top: 80%;
          width: 30px;
          height: 30px;
        }
      }
    }
  }

  .slider__btn {
    > a {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 22px;
      height: 40px;
      background-repeat: no-repeat;
      transition: opacity 0.3s;

      &:hover {
        opacity: 0.5;
      }
    }
    .left {
      left: 20px;
      background-image: url(@/assets/images/slider/slider__left.png);
    }
    .right {
      right: 20px;
      background-image: url(@/assets/images/slider/slider__right.png);
    }
  }

  .slider__dot {
    position: absolute;
    left: 50%;
    bottom: -80px;
    transform: translateX(-50%);
    a {
      display: inline-block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      margin: 0 5px;
      border: 4px solid #4857ec;
      background-color: #4857ec;
      box-shadow: 0 0 0 3px transparent;
      &.active {
        box-shadow: 0 0 0 3px #4857ec;
        border-width: 4px;
        background-color: #fff;
      }
    }
  }
}
</style>
