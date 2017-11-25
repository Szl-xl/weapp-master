//map.js
//获取应用实例
var app = getApp()
Page({
  data: {
    longitude: '122.961602',
    latitude: '39.672181',

    //地图处理函数
    markers: [{
      iconPath: "../images/marker_red.png",
      id: 0,
      latitude: 39.672276,
      longitude: 122.960921,
      title: '大连盛世丽景文化传媒有限公司',
      height: 32,
      width: 32,
    }],
  },
  getLocation: function (e) {
    console.log(e)
    var that = this
    wx.getLocation({
      success: function (res) {
        console.log(res)
        that.setData({
          hasLocation: true,
          location: {
            longitude: res.longitude,
            latitude: res.latitude
          }
        })
      }
    })
  },
  //根据经纬度在地图上显示
  openLocation: function (e) {
    var value = e.detail.value
    wx.openLocation({
      longitude: Number(value.longitude),
      latitude: Number(value.latitude)
    })
  },
})

