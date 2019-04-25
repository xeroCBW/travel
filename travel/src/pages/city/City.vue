<template>
<div>
  <city-header></city-header>
  <city-search></city-search>
  <city-list :hotCities="hotCities" :cities="cities"></city-list>
  <city-alaphabet :cities="cities"></city-alaphabet>
</div>

</template>

<script>
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlaphabet from './components/Alaphabet'
  import axios from 'axios'
export default {
  name: 'City',
  components:{
    CityHeader,
    CitySearch,
    CityList,
    CityAlaphabet
  },
  data(){
    return{
      hotCities:[],
      cities:{}
    }
  },
  methods:{
    getCityList(){

      axios.get('/api/city.json')
        .then(this.getCityInfoSuccess)
    },
    getCityInfoSuccess(res){
      res = res.data;
      if(res.ret && res.data){
        const  data = res.data;
        this.hotCities=data.hotCities;
        this.cities=data.cities;
      }
    }
  },
  mounted(){
    this.getCityList();
  }
}
</script>

<style lang="stylus" scoped>



</style>
