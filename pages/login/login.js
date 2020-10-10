// pages/login/login.js
var utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginImg: utils.URL +"/images/logo.png"
  },
  //登录
  onGotUserInfo: function (e) {
    // wx.reLaunch({
    //   url: '../index/index'
    // })

    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey
        var code = res.code;
        if (code) {
          wx.getUserInfo({
            success: function (rs) {
              var encryptedData = rs.encryptedData
              var iv = rs.iv
              var rawData = rs.rawData
              var signature = rs.signature
              wx.showLoading({
                title: '正在加载',
              })
              wx.request({
                url: utils.URL+'/api/getwxUserInfo',
                data: {
                  'encryptedData': rs.encryptedData,
                  'iv': rs.iv,
                  'rawData': rs.rawData,
                  'signature': rs.signature,
                  'code': code
                },
                method: 'POST',
                header: {
                  'content-type': 'application/x-www-form-urlencoded'
                },
                success: function (rt) {
                  wx.setStorageSync("openid", rt.data.openId);
                  wx.setStorageSync("nickName", rt.data.nickName);
                  wx.setStorageSync("headimgurl", rt.data.avatarUrl);
                 
                  if (rt.data) {
                    wx.request({
                      url: utils.URL + '/api/addshuju',
                      data: {
                        'nickname': rt.data.nickName,
                        'headimgurl': rt.data.avatarUrl,
                        'openId': rt.data.openId,
                        'city': rt.data.city,
                      },
                      method: 'GET',
                      success: function (rst) {
                        if(rst.data.code == 1){
                           setTimeout(function () {
                             wx.reLaunch({
                               url: '../index/index'
                             })
                          }, 1500) //延迟时间
                        }else{
                          setTimeout(function () {
                            wx.reLaunch({
                              url: '../index/index'
                            })
                          }, 1500) //延迟时间
                        }
                        console.log(rst)
                      }
                    })
                  } else {
                    console.log('未知错误')
                  }
                }
              })
            }
          })
        }

      }
    })
  },
  //取消
  gotoBack:function(){
    wx.reLaunch({
      url: '../index/index?login_id=2018'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var openid = wx.getStorageSync('openid')
    if (openid){
      wx.navigateTo({
        url: '../index/index',
      })
    }
    wx.setNavigationBarTitle({
      title: '粮事通'
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