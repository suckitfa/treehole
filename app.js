// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log('shit')
        console.log(res.code)
      }
    })
  },
  globalData: {
    userInfo: null,
    user:{}, // 后台返回的全部用户信息
    userInfo:{}, // 微信获取的用户信息
    server:"https://treehole2.applinzi.com"
  }
})
