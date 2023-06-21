<template>
  <div class="youtube__cont container dream">
    <ul>
      <li v-for="(youtube, index) in youtubes" :key="index">
        <img
          :src="youtube.snippet.thumbnails.medium.url"
          :alt="youtube.snippet.title"
        />
        <span>{{ youtube.snippet.title }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    youtubes: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/setting/mixins.scss";
.youtube__cont {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 100px;

    li {
      width: 24%;
      margin-bottom: 4%;

      span {
        display: block;
        margin: 4px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>
