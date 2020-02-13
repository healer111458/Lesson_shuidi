<template>
  <div class="index">
    <!-- 头部的搜索 -->
    <div class="search">
      <div>{{cityName}}</div>
      <div>
        <input type="text" placeholder="搜索商品" />
        <span class="icon"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cityName: '南昌'
    }
  }
}
</script>

<style lang="less" scoped>
  @import "./style.less";
</style>