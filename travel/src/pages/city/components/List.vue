<template>


  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">您的位置</div>

        <div class="button-list">
          <div class="button-wrapper"><div class="button">北京</div></div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotCities" >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"  v-for="(item,key) in cities" :ref="key" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="inner in item" :key="inner.id">{{inner.name}}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Bscroll from 'better-scroll'
    export default {
      name: "CityList",
      props:{
        hotCities:Array,
        cities:Object,
        letter:String
      },
      mounted(){
        this.scroll= new Bscroll(this.$refs.wrapper);
      },
      watch:{
        letter(){
          if(this.letter){
            //获取数据
            const element = this.$refs[this.letter][0]
            this.scroll.scrollToElement(element)
          }
        }
      }
    }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"

  .border-topbottom
    &:before
      border-color #ccc
    &:before
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .title
    line-height 0.4rem
    background #eee
    padding-left 0.2rem


  .list
    position absolute
    overflow hidden
    top 1.6rem
    left 0
    right 0
    bottom 0
    .button-list
      overflow hidden
      padding 0.1rem 0.6rem 0.1rem 0.1rem
      /*background-color red*/
      .button-wrapper
        float left
        width 33.33%
        /*background-color green*/
        .button
          border 1px solid #ccc
          border-radius 0.1rem
          /*background yellow*/
          margin: .1rem
          padding: .1rem 0
          text-align center
    .item-list
      overflow hidden
      /*padding 0.1rem 0.6rem 0.1rem  0.1rem*/
      .item
        line-height 0.6rem
        padding-left 0.1rem



</style>
