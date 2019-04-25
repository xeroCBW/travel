<template>
  <ul class="list">
    <li class="item" v-for="(item,key) in cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
    export default {
      name: "CityAlaphabet",
      props:{
        cities:Object
      }
    }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0.1rem
    bottom: 0
    width: .4rem
    background yellow
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor

</style>
