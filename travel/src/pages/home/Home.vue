<template>
<div>
  <!--<div> <h1>home</h1></div>-->
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>

  <!--<router-link to="/city">城市页面</router-link>-->
</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }

}
</script>

<style scoped>

</style>
