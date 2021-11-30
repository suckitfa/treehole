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
    wx.redirectTo({
      url: '../logins/logins',
    })
  },
  handleRegister(e) {
    const self = this;
    const {server:url,userInfo} = getApp().globalData;
    wx.request({
      url:url + "/index.php/Home/User/sign",
      method:"POST",
      data:{
        username:self.data.username,
        phone:self.data.phonenumber,
        password:self.data.password,
        password_again:self.data.passwordack,
        face_url:userInfo.avatarUrl,
      },
      header:{
        "content-type":"application/x-www-urlencoded" 
      },
      success(res) {
        const res_code = res.data.error_code;
        if(res_code == 0) {
          wx.showModal({
            title:"提示",
            content:"注册成功",
            showCancel:false,
            complete() {
              // 跳转到广场
              wx.reLaunch({
                url: '/pages/squares/squares',
              })
            }
          })
        } else  {
          // 异常处理
          let msg = '参数不足:'
          switch (res_code) {
            case 1:
              msg += 'username'
              break;
            case 2:
              msg = '两次密码不一致'
              break;
            case 3:
              msg = '手机号已被注册'
              break
            default:
              break;
          }
          wx.showModal({
            showCancel:false,
            content:msg,
          })
        }
      },
      fail(e) {
        wx.showModal({
          title:"提示",
          showCancel:false,
          content:"网络错误"
        })
      }
    })
  }
})