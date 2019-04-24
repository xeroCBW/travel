<template>
<div>
  <!--<div> <h1>home</h1></div>-->
  <home-header></home-header>
  <home-swiper :lists="swiperList"></home-swiper>
  <home-icons :lists="iconList"></home-icons>
  <home-recommand :lists="recommendList"></home-recommand>
  <home-weekend :lists="weekendList"></home-weekend>

  <!--<router-link to="/city">城市页面</router-link>-->
</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommand from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'

export default {
  name: 'Home',
  data(){
    return{

      lastCity:"",
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommand,
    HomeWeekend
  },
  methods:{
    getList(){
      axios.get('/api/index.json')
        .then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess(res){
      res = res.data;
      if(res.ret&&res.data){
        const  data = res.data;

        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;

      }

    }
  },
  mounted(){
    this.getList()
  }

}
</script>

<style scoped>

</style>
