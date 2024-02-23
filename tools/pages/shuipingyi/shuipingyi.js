// index.js
Page({
  data: {
    horizontalDegree: 0, // 新增水平仪水平角度
    verticalDegree: 0, // 新增水平仪垂直角度
    top: -159,
    left: 129,
    backgroundColor: '#000000',
    regionBG: "#f04f4f",
    isOnAccelerometerChange: true,
    x: 0,
    y: 0,
    z: 0,
  },
  onLoad: function (options) {
    var that = this
    wx.startGyroscope({
      interval: "normal",
      success: function () {
        wx.onAccelerometerChange(function (res) {
          if (!that.data.isOnAccelerometerChange) {
            return
          }
          var x = (res.x * 180).toFixed(2)
          var y = -(res.y * 180).toFixed(2)
          var z = (res.z * 180).toFixed(2)
          var top = -159 + Number(y)
          var left = 129 + Number(x)

          // 计算水平和垂直角度
          var horizontalDegree = Math.atan2(x, y) * (180 / Math.PI);
          var verticalDegree = Math.atan2(x, z) * (180 / Math.PI);

          var leftDot1 = 150 + Number(x); // dot 在水平方向的移动
          var topDot2 = 150 + Number(y); // dot2 在垂直方向的移动

          console.log("top1" + top)
          console.log("left1" + left)

          // if (top < 0) {
          //   top = 0
          // }
          // if (top > 250) {
          //   top = 250
          // }
          // if (left < 0) {
          //   left = 0
          // }
          // if (left > 250) {
          //   left = 250
          // }
          that.setData({
            x: x,
            y: y,
            z: z,
            top: top,
            left: left,
            leftDot1: leftDot1,
            topDot2: topDot2,
            horizontalDegree: horizontalDegree.toFixed(2),
            verticalDegree: verticalDegree.toFixed(2),
          })

          if (top > -160 && top < -150 && left > 127 && left < 130) {
            that.setData({
              regionBG: "#82ec82",
            })
          } else {
            that.setData({
              regionBG: "#f04f4f",
            })
          }
        })
      }
    })

  },
  onUnload: function () {
    this.setData({
      isOnAccelerometerChange: false
    })
    wx.stopAccelerometer({})
    wx.stopGyroscope({})
  },

});