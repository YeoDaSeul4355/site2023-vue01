<template>
  <ContTitle title="unsplash" />
  <UnsplashSlider />
  <UnsplashSearch />
  <UnsplashTag />
  <UnsplashCont :images="images" />
</template>

<script>
// @ is an alias to /src
import ContTitle from "@/components/layout/ContTitle.vue";
import UnsplashSlider from "@/components/unsplash/UnsplashSlider.vue";
import UnsplashSearch from "@/components/unsplash/UnsplashSearch.vue";
import UnsplashTag from "@/components/unsplash/UnsplashTag.vue";
import UnsplashCont from "@/components/unsplash/UnsplashCont.vue";
import { ref } from "vue";

export default {
  components: {
    ContTitle,
    UnsplashSlider,
    UnsplashSearch,
    UnsplashTag,
    UnsplashCont,
  },

  setup() {
    const images = ref([]);

    const TopImages = async () => {
      await fetch(
        "https://api.unsplash.com/photos?client_id=HWsGXX5NmVoWI3FflAtezFOkvUNF4Wr7dJ-UFcw2UNc&per_page=30"
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          images.value = result;
        })
        .catch((error) => console.log("error", error));
    };
    TopImages();

    return {
      TopImages,
      images,
    };
  },
};
</script>
