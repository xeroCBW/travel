<template>
<div class="icons">
  <swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide v-for="(page,index) in pages" :key="index" >
      <div class="icon" v-for="item in page">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.imgurl" alt="">
        </div>
        <p class="icon-desc">{{item.desc}}</p>
      </div>
    </swiper-slide>
    <!--<swiper-slide ><img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/26c9b54e3e02d3724f614883d77a62c6.jpg_750x200_57aa8efa.jpg" alt=""></swiper-slide>-->
    <!--<swiper-slide ><img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/5daa78ddf9a3e3aca32195e079b9545d.jpg_750x200_3aeaa5c2.jpg" alt=""></swiper-slide>-->
    <!--<swiper-slide>I'm Slide 4</swiper-slide>-->
    <!--<swiper-slide>I'm Slide 5</swiper-slide>-->
    <!--<swiper-slide>I'm Slide 6</swiper-slide>-->
    <!--<swiper-slide>I'm Slide 7</swiper-slide>-->
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
    <!--<div class="swiper-button-next" slot="button-next"></div>-->
    <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->

  </swiper>

  <!--设置基本数据-->

</div>
</template>

<script>
    export default {
        name: "HomeIcons",
        data:function () {

          return{
            lists:[
              {
                desc:"热门景点",
                imgurl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
              },
              {
                desc:"广州融创",
                imgurl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/bda58ffc3016edad84e656e8a94b0321.png"
              },
              {
                desc:"深圳必游",
                imgurl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png"

              },
              {
                desc:"海洋馆",
                imgurl:"http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png"
              },
              {
                desc:"动植物园",
                imgurl:"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png"

              },
              {
                desc:"深圳动物园",
                imgurl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/cba147cf6cfcea7109d0bff6aac6f626.png"

              },
              {
                desc:"世界之窗",
                imgurl:"http://img1.qunarzz.com/piao/fusion/1803/a6/6d97515091789602.png"
              },
              {
                desc:"玛雅水公园",
                imgurl:"http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png"

              },
              {
                desc:"东部华侨城",
                imgurl:"http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png"
              },
              {
                desc:"玩转长隆",
                imgurl:"http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png"
              }
            ],
            swiperOption: {
              autoplay: false
            }
          }
        },
      computed:{
        pages(){
          const  pages = []
          this.lists.forEach((item,index)=>{
            const page=Math.floor((index/8))
            //如果不存在就创建一个数组,
            //然后根据index每次放一些进去
            if(!pages[page]){
              pages[page] = []
            }
            pages[page].push(item);
          });
          return pages
        }
      }
    }
</script>

<style lang="stylus" scoped>
  1 rem = HTML font-size = 50px

  /*设置占位*/
  .icons>>>.swiper-container
    /*overflow hidden  可以不写 .swiper-container 默认有这个属性*/
    height 0
    padding-bottom 50%
    /*background green*/
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
