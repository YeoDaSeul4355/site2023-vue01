<template>
  <div className="youtube__search container dream">
    <input
      type="search"
      ref="{inputRef}"
      onKeyPress="{onKeyPress}"
      placeholder="영상을 검색하세요!"
    />
    <button className="button-red dream">검색</button>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/setting/mixins.scss";
.youtube__search {
  text-align: center;
  margin-bottom: 50px;
  input {
    border: 1px solid #e8ecf2;
    font-size: 16px;
    padding: 10px 20px;
    @include border(50px);
    min-width: 300px;
    margin-right: 10px;
  }
  button {
    @include border(50px);
  }
}
</style>
