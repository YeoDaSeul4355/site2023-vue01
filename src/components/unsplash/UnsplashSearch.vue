<template>
  <div className="unsplash__search container">
    <h2 className="blind">검색하기</h2>
    <input
      type="search"
      ref="{inputRef}"
      onKeyPress="{onKeyPress}"
      placeholder="이미지를 검색하세요!"
    />
    <!-- <button type="submit" onClick="{onClick}" className="button-yellow">
      검색하기
    </button> -->
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/setting/mixins.scss";
.unsplash__search {
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
    @include border(50px);
  }
}
</style>
