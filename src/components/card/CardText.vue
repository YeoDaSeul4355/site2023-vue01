<template>
  <div class="card">
    <figure class="card__header">
      <img :src="cardImg" :alt="title" />
    </figure>
    <div class="card__body">
      <span>
        <img :src="iconImg" :alt="desc" />
      </span>
      <div>
        <h4>{{ title }}</h4>
        <p>{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardImg: String,
    iconImg: String,
    title: String,
    desc: String,
  },
};
</script>

<style scoped>
/* 필요한 스타일을 추가하세요 */
</style>
