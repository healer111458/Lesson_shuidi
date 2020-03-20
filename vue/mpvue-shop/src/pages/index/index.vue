<template>
  <div class="index">
    <!-- 头部的搜索 -->
    <div class="search">
      <div @click="toMappage">{{cityName}}</div>
      <div>
        <input type="text" placeholder="搜索商品" />
        <span class="icon"></span>
      </div>
    </div>
    <div class="swiper">
      <!-- 轮播图 -->
      <swiper class="swiper-container" iindicator-dots="true" autolay="true"
      interval="3000" circular="true" duration="500">
        <block v-for="(item,index) in banner" :key="index">
          <swiper-item class="swiper-item">
            <image class="slide-image" :src="item.image_url" />
          </swiper-item>
        </block>
      </swiper>
    </div>
  </div>
</template>

<script>
import amapFile from '../../utils/amap-wx.js'
import { mapState, mapMutations } from 'vuex'
import { get } from '../../utils'
export default {
  data () {
    return{
      banner:[]
    }
  },
  computed: {
    ...mapState(['cityName'])
  },
  mounted () { //生命周期
    this.getData()
    //  console.log('-------')
  },
methods: {
  ...mapMutations(['update']),
  toMappage() {
    //通过 wx.getSetting 查询是否授权 "scoped.record"
    let _this =this
    wx.getSetting({
      success: (res) => {
        //如果没有授权 请求获得授权
        // console.log(res)
        if(!res.authSetting['scope.userLocation']) {
          wx.openSetting({
            success:res => {
              //请求获得授权
              _this.getCityNmae()
            }
          })
        }else {
          wx.navigateTo({
            url:'/pages/mappage/main',
          });
          // _this.getCityNmae()
        }
      },
      fail: (err) => {
        console.log(err)
      },
      complete: () => {}
    });
  },
  getCityNmae () {
    let _this = this
    var myAmapFun = new amapFile.AMapWX({key:'4e2273031ffdccfca4d7892f173580c3'});
    myAmapFun.getRegeo({
      success: function (data) {
        //成功回调
        console.log(data)
        //获取地理位置
      },
      fail:function(info) {
        //失败回调
        console.log(info)
        // _this.cityName = '北京'
        _this.update({ cityName:'北京'})
      }
    })  
  },
  async getData() {
    console.log('-----')
    const data =  get('/index/index')  //http://localhost:5757/lm/index/index
    console.log(data)
    console('-----')
    this.banner = data.banner
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style.less";
</style>