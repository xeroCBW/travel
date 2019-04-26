<template>

  <div>
    <div class="item"  v-for="item in categoryList">
      <div class="border-title border-bottom">
        <span class="item-icon"></span>
        {{item.title}}
      </div>
      <div class="item-child" v-if="item.children">
        <detail-list :categoryList="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailList",
      props:{
        categoryList:Array
      }
    }
</script>

<style lang="stylus" scoped>

  .border-bottom
  &:before
    border-color #ccc
  .item
    //只要单纯设置行高就可以了,高度就会随着变化
    line-height 0.8rem
    font-size 0.3rem
    .item-icon
      display: inline-block;
      /*margin-top 0.1rem*/
      /*margin-left 0.1rem*/
      /*margin-right: .1rem;*/
      position relative
      left: .1rem
      top: .1rem
      margin-right: .1rem

      width: .4rem;
      height: .4rem;
      //后面这两个是精灵图的设置
      background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
      background-size: .4rem 3rem;
    .item-child
      padding-left 0.2rem






</style>
