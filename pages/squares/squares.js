// pages/squares/squares.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstColor:"#000",
    secondColor:"#979797",
    dataList:[
      {
        id:'123123123',
        username:"帅哥唐",
        avatar:"/images/like.png",
        time:"2021-10-11 21:41:52",
        content:"树洞内树洞内树洞内树洞内树洞内树洞内树洞内树洞内容",
        total_likes:23,
      },
      {
        id:'123123sdfsdf123',
        username:"帅哥王",
        avatar:"/images/likeplus.png",
        time:"2021-10-11 21:41:52",
        content:"树洞内树洞内树洞内树洞内树洞内树洞内树洞内树洞内容",
        total_likes:223,
      },
      {
        id:'12312sdfsdfs3123',
        username:"帅哥张",
        avatar:"/images/like.png",
        time:"2021-10-11 21:41:52",
        content:"树洞内树洞内树洞内树洞内树洞内树洞内树洞内树洞内容",
        total_likes:123,
      },
      {
        id:'123123123',
        username:"帅哥唐",
        avatar:"/images/like.png",
        time:"2021-10-11 21:41:52",
        content:"树洞内树洞内树洞内树洞内树洞内树洞内树洞内树洞内容",
        total_likes:23,
      },
      {
        id:'123123sdfsdf123',
        username:"帅哥王",
        avatar:"/images/likeplus.png",
        time:"2021-10-11 21:41:52",
        content:"树洞内树洞内树洞内树洞内树洞内树洞内树洞内树洞内容",
        total_likes:223,
      },
      {
        id:'12312sdfsdfs3123',
        username:"帅哥张",
        avatar:"/images/like.png",
        time:"2021-10-11 21:41:52",
        content:"树洞内树洞内树洞内树洞内树洞内树洞内树洞内树洞内容",
        total_likes:123,
      },
      {
        id:'123123123',
        username:"帅哥唐",
        avatar:"/images/like.png",
        time:"2021-10-11 21:41:52",
        content:"树洞内树洞内树洞内树洞内树洞内树洞内树洞内树洞内容",
        total_likes:23,
      },
      {
        id:'123123sdfsdf123',
        username:"帅哥王",
        avatar:"/images/likeplus.png",
        time:"2021-10-11 21:41:52",
        content:"树洞内树洞内树洞内树洞内树洞内树洞内树洞内树洞内容",
        total_likes:223,
      },
      {
        id:'12312sdfsdfs3123',
        username:"帅哥张",
        avatar:"/images/like.png",
        time:"2021-10-11 21:41:52",
        content:"树洞内树洞内树洞内树洞内树洞内树洞内树洞内树洞内容",
        total_likes:123,
      }
    ]
  },
  firstSelect() {
    // wx.navigateTo({
    //   url: '../squares/squares',
    // })
  },
  secondSelect() {
    wx.navigateTo({
      url: '../commits/commits',
    })
  },
  thirdSelect() {
    wx.redirectTo({
      url: '/pages/mine/mine',
    })
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

  }
})