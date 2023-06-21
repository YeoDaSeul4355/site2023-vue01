<template>
  <main>
    <SliderSection attr="slider__wrap dream" />
    <IntroSection attr="intro__wrap section dream" />
    <CardSection attr="cards__wrap section center bg-blue dream" />
    <YoutubeSection attr="youtube__wrap section dream" />
    <UnsplashSection attr="unsplash__wrap section dream bg-blue" />
    <MovieSection attr="movies__wrap section dream" />
  </main>
</template>

<script>
// @ is an alias to /src
import IntroSection from "@/components/section/IntroSection.vue";
import SliderSection from "@/components/section/SliderSection.vue";
import CardSection from "@/components/section/CardSection.vue";
import YoutubeSection from "@/components/section/YoutubeSection.vue";
import UnsplashSection from "@/components/section/UnsplashSection.vue";
import MovieSection from "@/components/section/MovieSection.vue";

export default {
  components: {
    IntroSection,
    SliderSection,
    CardSection,
    YoutubeSection,
    UnsplashSection,
    MovieSection,
  },
};
</script>
