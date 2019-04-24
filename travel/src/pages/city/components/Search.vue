<template>
    <div class="search">
      <input class="search-input" type="text" placeholder="请输入城市名称">
    </div>
</template>

<script>
    export default {
        name: "CitySearch"
    }
</script>

<style lang="stylus" scoped>\
@import "../../../assets/styles/varibles.styl"
  .search
    padding 0 0.1rem
    background-color $bgColor
    height 0.7rem
    .search-input
      width 100%
      /*box-sizing: border-box*/
      /*margin-top 0.05rem*/
      height 0.6rem
      color #666
      border-radius 0.1rem
      text-align center





</style>
