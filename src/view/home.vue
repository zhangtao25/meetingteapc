<template>
  <div id="home">
    <header-component></header-component>
    <logo-and-search-component></logo-and-search-component>
    <category-list></category-list>
    <banner-component></banner-component>
    <classified-display-cabinet
      :tea-details="testTeaDetails"
      :largeclass="'绿茶'"
      :nav-smallclasses="navSmallclasses"
      :comment="comment"
      :commodityDisplayCabinetPoster="[
      '/images/commodityDisplayCabinetPoster/GreenTea/0.jpg',
      '/images/commodityDisplayCabinetPoster/GreenTea/1.jpg'
      ]"
    >
    </classified-display-cabinet>
  </div>
</template>
<script>
  import HeaderComponent from "./../components/header-component"
  import LogoAndSearchComponent from "./../components/logo-and-search-component"
  import CategoryList from "./../components/category-list"
  import BannerComponent from "./../components/banner-component"
  import ClassifiedDisplayCabinet from "./../components/classified-display-cabinet"
  import AllTeaDetails from "../service/all-tea-details"

  import axios from 'axios'

  export default {
    components: {
      'header-component': HeaderComponent,
      'logo-and-search-component': LogoAndSearchComponent,
      'category-list': CategoryList,
      'banner-component': BannerComponent,
      'classified-display-cabinet': ClassifiedDisplayCabinet
    },
    data(){
      return {
        testTeaDetails:Array(8).fill({
          "zh_largeclass": "",
          "zh_smallclass":"",
          "zh_title":"",
          "zh_desc":"",
          "zh_saleoff":"",
          "en_largeclass": "",
          "en_smallclass":"",
          "en_title":"",
          "en_desc":"",
          "en_saleoff":"",
          "price":"",
          "nodiscountprice":"",
          "comprehensive":""
        }),
        navSmallclasses:["热门","龙井","碧螺春","康师傅"],
        comment:Array(8).fill({
          review:"很好",
          author:"张涛"
        })
      }
    },
    mounted(){
      let _this = this;
      AllTeaDetails.getAllTeaDetails(this)
        .then(res=>{
          _this.testTeaDetails=res
        })
    }
  }
</script>
