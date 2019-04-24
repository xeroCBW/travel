<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item in lists">
        <div class="img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="info-title">{{item.title}}</p>
          <p class="info-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "HomeWeekend",
      data:function () {
        return {
          lists: [
              {
                imgUrl:"http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg",
                title:"清远周边逛",
                desc:"人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？"
              },
              {
                imgUrl:"http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg",
                title:"深圳必打卡",
                desc:"来到深圳，你需要来这里签到"
              },
              {
                imgUrl:"http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg",
                title:"欢乐长隆",
                desc:"世界欢乐汇聚长隆，这里拥有多个大型游乐设备和精彩的演出，和小伙伴们一起感受刺激的体验"
              }
            ]
        }
      }
    }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/mixins.styl"

  .title
    background lightblue
    line-height 0.8rem
    text-indent 0.2rem
    font-size 16px
  .img-wrapper
    height 0
    overflow hidden
    padding-bottom 37%
    .item-img
      width 100%
  .item-info
    padding 0.2rem
    min-width: 0
    .info-title
      /*margin-top 0.1rem*/
      /*text-indent 0.2rem*/
      font-size 14px
      ellipsis()
    .info-desc
      margin-top 0.2rem
      /*text-indent 0.2rem*/
      font-size 12px
      color lightgrey
      ellipsis()



</style>
