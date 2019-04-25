<template>
<div>
  <city-header></city-header>
  <city-search></city-search>
  <city-list
    :hotCities="hotCities"
    :cities="cities"
    :letter="letter"></city-list>
  <city-alaphabet :cities="cities" @change="handleLetterChange"></city-alaphabet>
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
      letter:"",
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
    },
    handleLetterChange(letter){

      this.letter = letter;
    }
  },
  mounted(){
    this.getCityList();
  }
}
</script>

<style lang="stylus" scoped>



</style>
