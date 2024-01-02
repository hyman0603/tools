// index.js
Page({
  data: {
    imageUrl: '',
    copyright: '',
    endDate: '',
    imageIndex: 0  // 新增图片索引参数
  },
  onLoad: function () {
    this.getBingImage();
  },
  getBingImage: function () {
    // 在请求开始时显示 loading
    wx.showLoading({
      title: '加载中...',
    });

    // 确保 imageIndex 在范围 0 到 7 之间
    this.data.imageIndex = (this.data.imageIndex + 8) % 8;

    wx.request({
      url: 'https://api.xxxxx.com/api/bing_wallpaper',
      method: 'GET',
      data: {
        imageIndex: this.data.imageIndex  // 将图片索引参数传递给后端
      },
      header: {
        'Authorization': 'xxxxxxxx'
        // 替换上面的令牌为您的实际令牌
      },
      success: res => {
        console.log('接口返回的数据:', res.data);
        console.log('接口返回的数据URL:', res.data.imageUrl);
        if (res.statusCode === 200) {
          this.setData({
            imageUrl: res.data.imageUrl,
            endDate: res.data.enddate,
            copyright: res.data.copyright
          });
        } else {
          console.error('请求失败', res.statusCode, res.data);
          // 请求失败时弹出提示框
          wx.showToast({
            title: '加载失败，请重试',
            icon: 'none',
            duration: 2000
          });
        }
      },
      fail: err => {
        console.error('请求失败', err);
        // 请求失败时弹出提示框
        wx.showToast({
          title: '加载失败，请重试',
          icon: 'none',
          duration: 5000
        });
      },
      complete: () => {
        // 在请求结束时隐藏 loading
        wx.hideLoading();
      }
    });
  },
  getPreviousImage: function () {
    this.setData({
      imageIndex: this.data.imageIndex - 1
    });
    this.getBingImage();
  },
  getNextImage: function () {
    this.setData({
      imageIndex: this.data.imageIndex + 1
    });
    this.getBingImage();
  },
  previewImage: function () {
    const currentImageUrl = this.data.imageUrl;
    wx.previewImage({
      current: currentImageUrl,
      urls: [currentImageUrl]
    });
  }
});
