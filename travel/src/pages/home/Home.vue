<template>
<div>
  <!--<div> <h1>home</h1></div>-->
  <home-header></home-header>
  <home-swiper></home-swiper>
  test
  <!--<router-link to="/city">城市页面</router-link>-->
</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper
  }

}
</script>

<style scoped>

</style>
