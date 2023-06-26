<template>
  <div class="youtube__tag">
    <div>
      <button
        v-for="(tag, index) in youtubeTags"
        :key="index"
        @click="btnClick(tag.name)"
      >
        {{ tag.name }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["onSearch"],
  data() {
    return {
      youtubeTags: [
        { name: "현대 미술" },
        { name: "서양화" },
        { name: "동양화" },
        { name: "디자인" },
        { name: "일러스트" },
        { name: "소묘" },
      ],
    };
  },
  methods: {
    btnClick(name) {
      this.onSearch(name);
    },
  },
};
</script>
<style lang="scss">
.youtube__tag {
  div {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 50px;
    button {
      cursor: pointer;
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
      &.active {
        color: #fff;
        background-color: #8b99ad;
        transition: all 0.5s;
      }
    }
  }
}
</style>
