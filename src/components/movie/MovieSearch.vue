<template>
  <div class="movie__search container">
    <h2 class="blind">검색하기</h2>
    <input
      type="search"
      ref="{inputRef}"
      onKeyPress="{onKeyPress}"
      placeholder="영화를 검색하세요!"
    />
    <!-- <button type="submit" onClick="{onClick}" class="button-blue">
      검색하기
    </button> -->
  </div>
</template>
<style lang="scss">
@import "@/assets/scss/setting/mixins.scss";
.movie__search {
  text-align: center;
  margin-bottom: 50px;
  input {
    border: 1px solid #e8ecf2;
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 50px;
    min-width: 300px;
    margin-right: 10px;
  }
  button {
    border-radius: 50px;
  }
}
</style>
