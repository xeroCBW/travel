<template>
<div class="icons">
  <div class="icon">
    <div class="icon-img">
      <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
    </div>
    <p class="icon-desc">热门景点</p>
  </div>

  <!--设置基本数据-->

</div>
</template>

<script>
    export default {
        name: "HomeIcons"
    }
</script>

<style lang="stylus" scoped>
  1 rem = HTML font-size = 50px

  /*设置占位*/
  .icons
    overflow hidden
    height 0
    padding-bottom 50%
    background green
    .icon
      position relative
      float left
      width 25%
      height 0
      padding-bottom 25%
      /*background-color red*/
      overflow hidden
      .icon-img
        position absolute
        left 0
        right:0
        top 0
        bottom 0.44rem
        /*background-color yellow*/
        box-sizing border-box
        padding 0.1rem
        .icon-img-content
          height 100%
          margin 0 auto
          display block
      .icon-desc
        position absolute
        line-height 0.44rem
        left 0
        right 0
        bottom 0
        background-color $darkTextColor
        text-align center



</style>
