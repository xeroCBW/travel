<template>

  <div>
    <router-link tag="div" to="/" class="header-abs">
      <span class="iconfont">&#xe624;</span>
    </router-link>
    <div class="header-fix"
         v-show="!showAbs"
         :style="opacityStyle">
      <router-link to="/">
       <div class="header-fix-back iconfont">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>


</template>

<script>
    export default {
      name: "DetailHeader",
      data(){
        return{
          showAbs:true,
          opacityStyle:{
            opacity: 0
          }
        }
      },
      methods:{
        handleScroll () {
          const top = document.documentElement.scrollTop
          if (top > 60) {
            let opacity = top / 140
            opacity = opacity > 1 ? 1 : opacity
            this.opacityStyle = { opacity }
            this.showAbs = false
          } else {
            this.showAbs = true
          }
        }
      },
      mounted(){
        window.addEventListener('scroll', this.handleScroll)
      },
      unmounted(){
        window.removeEventListener('scroll', this.handleScroll)
      }
    }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  .header-abs
    position absolute
    top 0.2rem
    left 0.2rem
    width 0.8rem
    height $headerHeight
    border-radius 0.4rem
    color white
    background-color rgba(0,0,0,0.8)
    line-height $headerHeight
    text-align center
  .header-fix
    z-index 2
    position fixed
    top 0
    left 0
    right 0
    height 0.8rem
    background-color #25a4bb
    color white
    line-height $headerHeight
    font-size 0.3rem
    text-align center
    .header-fix-back
      position absolute
      top 0
      left 0
      width 0.64rem
      margin-top 0.1rem
      line-height 0.6rem
      /*height 0.6rem*/
      font-size 0.4rem
      color white
      /*background-color red*/
      text-align center


</style>
