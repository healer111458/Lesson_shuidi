//index.js
const app = getApp()

Page({
  data: {
    infotype: ["转让", "求购", "出租", "求租", "求职", "公益"],
    nearytype: ["1千米", "3千米", "5千米", "10千米", "全城", "地图点选"],
    ordertype: ["智能排序","好评优先","离我最近","佣金最高",]
  },
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      tihuoWay: name,
      select: false
    })
  },
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  }
})
