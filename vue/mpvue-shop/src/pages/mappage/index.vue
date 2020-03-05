<template>
  <div class="mappage">
      <div class="section">
          <input type="text" placeholder="搜素" focus="ture" />
      </div>
      <scroll-view :scroll-y="ture" class="addcont" style="height:500rpx;">
      <div class="ressult" v-for="(item,index) in tips" :key="index">
          {{item.name}}
      </div>
      </scroll-view>
      <div class="map_container">
          <div class="title">显示当前位置:</div>
          <map class="map" id="map" scale="16" :longitude="longitude" :latitude="latitude" :markers="markers"></map>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            tips: [],
            longitude: 0,
            latitude: 0,
            markers: []
        }
    },
    mounted() {
        this.getMapaddress()
    },
    methods:{
        getMapaddress () {
            let _this = this
            var myAmapFun =new amapFile.AMapW({key:'4e2273031ffdccfca4d7892f173580c3'})
            myAmapFun.getRegeo({
                icoonPath:"/static/images/marker.png",
                iconWidth:22,
                iconHeight:32,
                success(data){
                    console.log(data)
                },
                fail(info) {
                    console.log(info)
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import "./style.less";

</style>