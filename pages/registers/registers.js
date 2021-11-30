// pages/registers/registers.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    phonenumber:"",
    password:"",
    passwordack:""
  },
  usernameInput(e){
    this.data.username = e.detail.value
  },
  phonenumInput(e){
    this.data.phonenumber = e.detail.value
  },
  pwdackInput(e) {
    this.data.password = e.detail.value
  },
  pwdackInput(e){
    this.data.passwordack = e.detail.value
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  bindViewTap() {
    wx.navigateTo({
      url: '../logins/logins',
    })
  },
  handleRegister(e) {
    const self = this;
    const url = getApp().globalData.server;
    console.log(getApp().userInfo)
    // wx.request({
    //   url,
    //   data:{
    //     username:self.data.username,
    //     phone:self.data.phonenumber,
    //     password:self.data.password,
    //     password_again:self.data.passwordack,
    //     face_url:getApp().globalData.userInfo.avatarUrl,
    //   },
    //   header:{

    //   }
    // })
  }
})