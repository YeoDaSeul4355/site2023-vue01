<template>
  <ContTitle title="movies" />
  <MovieSlider :movies="movies" />
  <MovieSearch />
  <MovieTag />
  <MovieCont :movies="movies" />
</template>

<script>
// @ is an alias to /src
import ContTitle from "@/components/layout/ContTitle.vue";
import MovieSlider from "@/components/movie/MovieSlider.vue";
import MovieSearch from "@/components/movie/MovieSearch.vue";
import MovieTag from "@/components/movie/MovieTag.vue";
import MovieCont from "@/components/movie/MovieCont.vue";
import { ref } from "vue";

export default {
  components: {
    ContTitle,
    MovieSlider,
    MovieSearch,
    MovieTag,
    MovieCont,
  },

  setup() {
    const movies = ref([]);
    const searchs = ref([]);
    const search = ref(["marvel"]);

    const TopMovies = async () => {
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=86951144e4cb4c72a22189f65fc8c04b&limit=30&quesry=${search.value}`
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result.results);
          movies.value = result.results;
          searchs.value = result.results;
          console.log(searchs);
        }) // 첫 번째로 확인해야할 것(console로 result값 불러오는지)
        .catch((error) => console.error("error", error));
    };
    TopMovies();

    return {
      movies,
      searchs,
      TopMovies,
    };
  },
};
</script>
