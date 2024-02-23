Page({
  data: {
    resultData: null
  },

  onLoad: function (options) {
    // console.log("传递的数据:", options.data); // 添加日志以检查传递的数据
    try {
      let result = decodeURIComponent(options.data);
      // console.log("解码后的数据:", result); // 添加日志以检查解码后的数据
      this.setData({
        resultData: JSON.parse(result)
      });
    } catch (error) {
      // console.error("解析数据时出错:", error); // 添加日志以捕获解析错误
      // 在出错时给出提示或者进行其他适当的处理
      // 例如：
      // wx.showToast({
      //   title: '数据格式错误',
      //   icon: 'none',
      //   duration: 2000
      // });
    }
  }
  
});
