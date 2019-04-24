<template>
  <div class="wrapper">
    <swiper :options="swiperOption">

        <!-- slides -->
        <swiper-slide v-for="(image,index) in lists" ><img class="swiper-img" :src="image.imgUrl" alt=""></swiper-slide>
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
  </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
      props:{
        lists:Array
      },
        data:function () {
          return {
            swiperOption:{
              //设置显示点点
              pagination:'.swiper-pagination',
              loop:true
            },
            // lists:[
            //   {
            //   id:'0001',
            //   url:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
            //  },
            //   {
            //     id:'0002',
            //     url:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/26c9b54e3e02d3724f614883d77a62c6.jpg_750x200_57aa8efa.jpg'
            //   },
            //   {
            //     id:'0003',
            //     url:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/5daa78ddf9a3e3aca32195e079b9545d.jpg_750x200_3aeaa5c2.jpg'
            //   },
            // ]
          }
        }

    }
</script>

<style lang="stylus" scoped >
  @import "../../../assets/styles/varibles.styl"

  /*类选择器要一直挨着*/
  .wrapper>>>.swiper-pagination-bullet-active{
    /*background-color red*/
    /*color red*/
    background red
  }

  .wrapper{

    width 100%
    height:0
    padding-bottom 33.3%
    /*设置overflow hidden*/
    overflow hidden
    background-color lightgrey

  }
  .swiper-img{
    width 100%
  }



</style>
