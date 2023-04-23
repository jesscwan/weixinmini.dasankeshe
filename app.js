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
      }
    }),
    wx.getLocation({
      type: 'wgs84',//wgs84为GPS全球定位,可用gcj02(中国国家测绘局)，精度高些
      success (res) {
      const latitude = res.latitude
      const longitude = res.longitude
      const speed = res.speed
      const accuracy = res.accuracy
      }
      })
  },
  globalData: {
    userInfo: null
  }
})
