<template>

  <div class="header">
    <div class="header-left"><span class="iconfont">&#xe624;</span></div>
    <div class="header-input"> <span class="iconfont search-icon">&#xe632;</span> 输入城市/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">城城城城城城城市<span class="iconfont arrow-icon">&#xe62d;</span></div>
    </router-link>
  </div>

</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="stylus" scoped>
  /*@import '~styles/varibles.styl'*/
  /*scoped只对当前页面起作用*/
  @import "../../../assets/styles/varibles.styl"

  1 rem = HTML font-size = 50px
  .header{
    display flex
    height:0.86rem;
    line-height 0.86rem
    background-color $bgColor
  }
  .header-left{
    width : 0.64rem;
    float: left
    text-indent 0.2rem
    color white
    font-weight bold
    /*font-size 12px*/
    /*background-color red*/
  }
  .header-input{

    background-color #ffffff
    border-radius  0.1rem
    margin-top 0.12rem
    margin-bottom 0.12rem
    margin-left 0.2rem
    flex 1
    color lightgrey
    line-height 0.64rem
    /*设置左边缩进*/
    text-indent 0.1rem

  }
  .header-right{

    float right
    min-width 1.24rem
    /*background-color blue*/
    text-align center
    color white
    padding-left 0.2rem
    padding-right 0.2rem

  }
  .arrow-icon{

    font-size 0.2rem
  }

  .search-icon{

    font-size 0.3rem
  }



</style>
