<template>
<div>
  <city-header></city-header>
  <city-search></city-search>
  <city-list></city-list>
  <city-alaphabet></city-alaphabet>
</div>

</template>

<script>
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlaphabet from './components/Alaphabet'
export default {
  name: 'City',
  components:{
    CityHeader,
    CitySearch,
    CityList,
    CityAlaphabet
  }

}
</script>

<style lang="stylus" scoped>



</style>
