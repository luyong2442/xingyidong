// pages/detail/detail.js
var WxParse = require('../../wxParse/wxParse.js');
var utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var id = options.id
      var _this = this
      wx.request({
        url: utils.URL + '/api/articleFind',
        data: {
          id:id
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        method: 'POST',
        success: function (rst) {
       
          var artical = rst.data.data.content;//获取文章内容
          WxParse.wxParse('article', 'html', artical , _this, 5);//解析
          wx.setNavigationBarTitle({
            title: rst.data.data.title
          })
          // _this.setData({
            
          // })
        }
      })
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})