<template>
  <div class="unsplash__tag container">
    <ul>
      <li>
        <router-link to="" @click="onClick('art')">예술</router-link>
      </li>
      <li>
        <router-link to="" @click="onClick('morden')">현대 미술</router-link>
      </li>
      <li>
        <router-link to="" @click="onClick('sculpture')">구조물</router-link>
      </li>
      <li>
        <router-link to="" @click="onClick('design')">디자인</router-link>
      </li>
      <li>
        <router-link to="" @click="onClick('illustration')"
          >일러스트</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    onClick(value) {
      this.$emit("search", value);
    },
  },
};
</script>
<style lang="scss">
.unsplash__tag {
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
</style>
