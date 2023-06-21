<!-- <template>
  <div className="youtube__slider">
    <swiper
      :slides-per-view="1"
      :space-8between="50"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      navigation
      :parallax="true"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      :loop="true"
      :modules="modules"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(youtube, index) in youtubes" :key="index">
        <img
          :src="youtube.snippet.thumbnails.high.url"
          :alt="youtube.snippet.title"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Navigation, Pagination, EffectFade, Autoplay, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
export default {
  props: {
    youtubes: {
      type: Array,
      required: true,
    },
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
      modules: [Navigation, Pagination, EffectFade, Autoplay, Parallax],
    };
  },
};
</script>
<style lang="scss">
.youtube__slider {
  margin-bottom: 100px;
  a {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    img {
      // object-fit: cover;
      // object-fit: cover;
      width: 100%;
      height: 650px;
    }
  }
}
</style> -->
<template><div>YoutubeSlider</div></template>
