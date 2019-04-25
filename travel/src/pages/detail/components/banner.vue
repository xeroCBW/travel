<template>

  <div>
    <div class="banner">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_600x330_28bda6b0.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">
          深圳欢乐谷(AAAAA景区)
        </div>
        <div class="banner-number">
          <span class="iconfont search-icon">&#xe652;39</span>
        </div>
      </div>
    </div>
  </div>



</template>

<script>
    export default {
        name: "DetailBanner"
    }
</script>

<style lang="stylus" scoped>

  .banner
    position relative
    overflow: hidden
    padding-bottom 55%
    height 0
    .banner-img
      width 100%
    .banner-info
      display flex
      height 0.6rem
      /*padding 上下 左右*/
      /*padding 0.1rem 0.3rem*/
      /*background red*/
      position absolute
      left 0
      right 0
      bottom 0
      .banner-title
        /*font-size 14px*/
        margin-top 0.1rem
        margin-left 0.2rem
        height 0.4rem
        line-height 0.4rem
        font-size 0.3rem
        flex 1
        /*padding 0 0.2rem*/
        color white
      .banner-number
        margin-right 1rem
        margin-top 0.1rem
        height 0.2rem
        line-height 0.2rem
        font-size 12px
        color white
        /*上下 左右*/
        padding 0.1rem 0.2rem

        border-radius 0.3rem
        background-color rgba(0,0,0,0.8)


</style>
