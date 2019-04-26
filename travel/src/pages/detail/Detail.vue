<template>


  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :categoryList="categoryList"></detail-list>
    </div>

  </div>

</template>

<script>
  import DetailBanner from './components/banner'
  import DetailHeader from './components/Header'
  import DetailList from  './components/List'
  import axios from 'axios'
export default {
  name: 'Detail',
  components:{
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data(){
    return{
      categoryList: [
        {
          "title": "成人票",
          "children": [
            {
              "title": "成人一馆联票",
              "children": [
                {
                  "title": "成人二馆联票 - 某一连锁店销售",
                  "children": [
                    {
                      "title": "成人三馆联票 - 某一连锁店销售"
                    }]
                }
              ]
            },
            {
              "title": "成人一馆联票"
            }
          ]
        },
        {
          "title": "学生票"
        },
        {
          "title": "儿童票"
        },
        {
          "title": "特惠票"
        }
      ]
    }
  },
  methods:{
    getDetailInfo(){
      //获取请求
      //axios.get('api/detail.json?id=' + this.$route.params.id)
      axios.get('api/detail.json',{
        params:{
          id:this.$route.params.id
        }
      }).then(this.handleGetDataSucc)

    },
    handleGetDataSucc(res){
      res = res.data
      if(res.ret&&res.data){
        const data = res.data;

      }
    }
  },
  mounted(){
    //重写该方法
    this.getDetailInfo();

  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem


</style>
