//index.js

var utils = require('../../utils/util.js')
Page({
  data: {
    loginImg: utils.URL +"/static/images/logo.png",
    loginImg1: utils.URL +"/static/images/1.jpg",
    loginImg2: utils.URL +"/static/images/2.jpg",
    loginImg3: utils.URL +"/static/images/3.jpg",
    loginImg4: utils.URL +"/static/images/4.jpg",
    movies:[],
    headimg:[],
    articlelist:[],
    count:0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  tijiao:function(e){
     var id =e.currentTarget.dataset.id
    wx.reLaunch({
      url: '../tijiao/tijiao?id='+id
    })
  },

  detail:function(e){
      var id = e.currentTarget.dataset.id
      wx.reLaunch({
        url: '../detail/detail?id='+id
      })
  },
  onLoad: function () {
    var _this = this
    wx.request({
      url: utils.URL + '/api/headimgselect',
      data: {
      },
      method: 'GET',
      success: function (rst) {
        _this.setData({
          headimg:rst.data.data,
          count:rst.data.count
        })
      }
    })

    wx.request({
      url: utils.URL + '/api/bannerselect',
      data: {
      },
      method: 'GET',
      success: function (rst) {
        _this.setData({
          movies:rst.data.data
        })
      }
    })


    wx.request({
      url: utils.URL + '/api/articlelist',
      data: {
      },
      method: 'GET',
      success: function (rst) {
        _this.setData({
          articlelist:rst.data.data
        })
      }
    })


    wx.setNavigationBarTitle({
      title: '粮事通大米专区'
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
