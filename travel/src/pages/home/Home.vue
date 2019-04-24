<template>
<div>
  <!--<div> <h1>home</h1></div>-->
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
  <home-recommand></home-recommand>
  <home-weekend></home-weekend>

  <!--<router-link to="/city">城市页面</router-link>-->
</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommand from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommand,
    HomeWeekend
  }

}
</script>

<style scoped>

</style>
