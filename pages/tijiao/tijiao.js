// pages/tijiao/tijiao.js

var utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logoimg:'',
    show:'none',
    type:''
  },
  formSubmit: function (e) {  
    
    let { mobile, username, content } = e.detail.value;  
    
    if (!mobile || !username) { 
       wx.showLoading({
         title: '信息不全',
       })
       setInterval(function(){
          wx.hideLoading({
            success: (res) => {

            },
          })
       },3000)
       return false;
    }else{
      wx.request({
        url: utils.URL + '/api/addinfo',
        data: {
          mobile:mobile,
          username:username,
          content:content,
          type:this.data.type
        },
        method: 'GET',
        success: function (rst) {
          console.log(rst)
          if(rst.data.code==200){
            wx.showToast({
              title: rst.data.msg,
              icon: 'success',
              duration: 2000,
              success:function(){
                 this.onLoad()
              }
            })
          }else{
            wx.showLoading({
              title: rst.data.msg,
            })
            setInterval(function(){
               wx.hideLoading({
                 success: (res) => {
     
                 },
               })
            },3000)
          }
          // _this.setData({
          //   movies:rst.data.data
          // })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var id = options.id
     var _this = this
     if(id==1){
        var title = '我是米厂'
        var logoimgurl = utils.URL+'/static/images/s1.jpg'
        var show='none'
     }else if(id==2){
        var title = '我是批发商'
        var logoimgurl = utils.URL+'/static/images/s2.jpg'
        var show='none'
     }else if(id==3){
        var title = '我是品牌商'
        var logoimgurl = utils.URL+'/static/images/s3.jpg'
        var show='none'
     }else if(id==4){
        var title = '投诉与建议'
        var logoimgurl = utils.URL+'/static/images/s4.jpg'
        var show='block'
     }

     _this.setData({
      logoimg:logoimgurl,
      show:show,
      type:id
     })

     wx.setNavigationBarTitle({
      title: title
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