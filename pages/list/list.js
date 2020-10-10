// pages/list/list.js
var utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: '', //当前选择项
    active1:'',
    active2:'',
    active3:'',
    active4:'',
    area: '', //小区id
    style: '', //风格id
    step: '', //阶段id
    sort: '', //排序id
    list:[],
    // menu: [
    //   {
    //     tit: "大米产地",
    //     list: []
    //   },
    //   {
    //     tit: "工厂名称",
    //     list: [
    //       { name:'全部', id: '', status: false },
    //       { name:'现代', id: '1', status: false },
    //       { name:'中式', id: '2', status: false },
    //       { name:'欧式', id: '3', status: false },
    //       { name:'美式', id: '4', status: false },
    //       { name:'简约', id: '5', status: false },
    //       { name:'北欧', id: '6', status: false },
    //       { name:'简美', id: '7', status: false },
    //       { name:'简欧', id: '8', status: false },
    //       { name:'新中式', id: '9', status: false },
    //       { name:'工业风', id: '10', status: false },
    //       { name:'轻奢', id: '11', status: false }
    //     ]
    //   },
    //   {
    //     tit: "大米品种",
    //     list: [
    //       { name:'全部', id: '', status: false },
    //       { name:'前期', id: '1', status: false },
    //       { name:'拆改', id: '2', status: false },
    //       { name:'泥工', id: '3', status: false },
    //       { name:'木工', id: '4', status: false },
    //       { name:'油漆', id: '5', status: false },
    //       { name:'安装', id: '6', status: false },
    //       { name:'软装', id: '7', status: false },
    //       { name:'入住', id: '8', status: false },
    //       { name:'完工', id: '9', status: false },
    //       { name:'案例', id: '10', status: false },
    //       { name:'图片', id: '11', status: false }
    //     ]
    //   },
    //   {
    //     tit: "智能排序",
    //     list: [
    //       { name:'智能排序', id: '', status: false },
    //       { name:'离我最近', id: '1', status: false },
    //       { name:'人气最高', id: '2', status: false }
    //     ]
    //   }
    // ]
  },
  findopen1:function(e){
    let _this = this
    _this.setData({
       active1:'active',
       active2:'',
       active3:'',
       active4:'',
    })
  },
  findopen2:function(e){
    let _this = this
    _this.setData({
       active1:'',
       active2:'active',
       active3:'',
       active4:'',
    })
  },

  findopen3:function(e){
    let _this = this
    _this.setData({
       active1:'',
       active2:'',
       active3:'active',
       active4:'',
    })
  },
  findopen4:function(e){
    let _this = this
    _this.setData({
       active1:'',
       active2:'',
       active3:'',
       active4:'active',
    })
  },
  // 菜单点击切换
  menuHandle(e){
    let _this = this
    _this.setData({
      current: e.currentTarget.dataset.index + 1
    })
  },

  subMenuHandle(e){
    console.log(e.currentTarget.dataset.index)
    let _this = this
    let { menu, area, style, step, sort } = _this.data;
    (menu[e.currentTarget.dataset.index]['list']).map((v, k)=>{
      v.status = false
    })
    menu[e.currentTarget.dataset.index]['list'][e.currentTarget.dataset.index2]['status'] = true
    if (e.currentTarget.dataset.index == 0) { area = menu[e.currentTarget.dataset.index]['list'][e.currentTarget.dataset.index2]['id'] }
    if (e.currentTarget.dataset.index == 1) { style = menu[e.currentTarget.dataset.index]['list'][e.currentTarget.dataset.index2]['id'] }
    if (e.currentTarget.dataset.index == 2) { step = menu[e.currentTarget.dataset.index]['list'][e.currentTarget.dataset.index2]['id'] }
    if (e.currentTarget.dataset.index == 3) { sort = menu[e.currentTarget.dataset.index]['list'][e.currentTarget.dataset.index2]['id'] }
    // _this.setData({
    //   menu,
    //   area, 
    //   style, 
    //   step, 
    //   sort
    // })
  },

  maskHandle(){
    let _this = this
    _this.setData({
      current: ''
    })
  },
  prode:function(e){
      var id = e.currentTarget.dataset.id
      wx.reLaunch({
        url: '../prodetail/prodetail?id='+id,
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    wx.request({
      url: utils.URL + '/api/typelist',
      data: { 
        typeid:'大米产地'
      },  
      method: 'GET',
      success: function (rst) {
        _this.setData({
          area:rst.data.data
          //movies:rst.data.data
        })
      }
    })

    wx.request({
      url: utils.URL + '/api/productlist',
      data: { 
        page:1
      },  
      method: 'GET',
      success: function (rst) {
        _this.setData({
          list:rst.data.data
        })
      }
    })
    wx.setNavigationBarTitle({
      title: '粮事通大米专区'
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