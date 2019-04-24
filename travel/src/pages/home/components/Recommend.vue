<template>

  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="item" v-for="item in lists">
        <img class="item-img"  :src=item.imgurl alt="">
        <div class="item-info">
          <p class="info-title">{{item.title}}</p>
          <p class="info-desc">{{item.desc}}</p>
          <button class="info-button">查看详情</button>
        </div>
      </li>
    </ul>
    </div>


</template>

<script>
    export default {
        name: "HomeRecommend",
      data:function () {

          return{

            lists:[
              {
                imgurl:"http://img1.qunarzz.com/sight/p0/1904/de/de517f86e9fd0d87a3.water.png_200x200_6b795cbf.png",
                title:"世界之窗",
                desc:"一个下午让你走遍全世界~"
              },
              {
                imgurl:"http://img1.qunarzz.com/sight/p0/1806/e7/e74b5f08f7c7ee9fa3.water.jpg_200x200_451e3e02.jpg",
                title:"西冲",
                desc:"西冲~"
              },
              {
                imgurl:"http://img1.qunarzz.com/sight/p0/1502/15/15ca1d0eab6bf46c.water.jpg_200x200_50ca7bb1.jpg",
                title:"东部华侨城大侠谷",
                desc:"行走峡湾栈道，倾听大自然的天籁之音~"
              },
              {
                imgurl:"http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg",
                title:"深圳小梅沙海洋世界",
                desc:"一天穿越四大洋"
              },
              {
                imgurl:"http://img1.qunarzz.com/sight/p0/1702/9b/9b45082b3e38b2fda3.water.jpg_200x200_785628c9.jpg",
                title:"锦绣中华民俗村",
                desc:"56个民族56支花~"
              }
            ]
          }
      }

    }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/mixins.styl"
  .title
    background-color #25a4bb
    line-height 0.8rem
    text-indent 0.2rem
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding 0.1rem
      /*background-color red*/
    .item-info
      /*background-color yellow*/
      padding 0.1rem
      flex 1
      min-width: 0
      .info-title
        /*background-color red*/
        line-height 0.6rem
        ellipsis()
      .info-desc
        /*background-color green*/
        line-height 0.4rem
        font-size 12px
        color lightgrey
        margin-top 0.1rem
        ellipsis()
      .info-button
        margin-top  0.1rem
        padding 0 0.2rem
        background-color orange
        line-height: .44rem
        border-radius 0.1rem
        color white
        font-size 12px







</style>
