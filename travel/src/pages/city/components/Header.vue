<template>
<div class="header">
    <p>城市选择</p>
    <router-link to="/">
      <div class="header-back iconfont">&#xe624;</div>
    </router-link>

</div>
</template>

<script>
    export default {
        name: "CityHeader"
    }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  .header
    position relative
    display flex
    height $headerHeight
    background $bgColor
    p
      color white
      font-size 16px
      width 100%
      text-align center
      line-height $headerHeight
    .header-back
      /*设置top lef才会进行对齐*/
      position absolute
      left 0
      top 0
      line-height $headerHeight
      text-indent .2rem
      min-width 1rem
      color white
      /*background-color red*/


</style>
