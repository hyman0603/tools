const jsonData = require('./data.js');

Page({
  data: {
    inputvalue: '',
    lastDate: '2024年02月18日',
    algorithms: [], // 存储算法备案信息的数组
    searchResults: [], // 存储搜索结果的数组
    isLoading: false, // 标记是否正在加载数据
    isLoadingMore: false, // 标记是否正在加载更多数据
    page: 1, // 当前加载的页数
    pageSize: 10, // 每页加载的数据条数
  },

  onLoad: function () {
    this.loadAlgorithms();
  },

  loadAlgorithms: function () {
    const {
      page,
      pageSize,
      algorithms
    } = this.data;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const newData = jsonData.slice(start, end);

    // console.log('新加载的数据：', newData); // 打印新加载的数据

    if (newData.length === 0) {
      // 数据已经加载完毕
      // console.log('所有数据已加载完毕');
      this.setData({
        isLoading: false
      });
      return;
    }

    // console.log('将新数据添加到算法数组中：', algorithms.concat(newData)); // 打印将要设置的算法数据

    this.setData({
      algorithms: algorithms.concat(newData),
      page: page + 1,
      isLoading: false,
    });
  },

  onReachBottom: function () {
    if (this.data.isLoadingMore) {
      return;
    }
    this.setData({
      isLoadingMore: true
    });
    this.loadMoreAlgorithms();
  },

  loadMoreAlgorithms: function () {
    const {
      page,
      pageSize,
      algorithms
    } = this.data;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const newData = jsonData.slice(start, end);

    if (newData.length === 0) {
      this.setData({
        isLoadingMore: false
      });
      wx.showToast({
        title: '已加载全部数据',
        icon: 'none'
      });
      return;
    }

    this.setData({
      algorithms: algorithms.concat(newData),
      page: page + 1,
      isLoadingMore: false
    });
  },

  formSubmit: function (e) {
    const keyword = e.detail.value.trim(); // 从事件对象中直接获取输入框的值并调用 trim 方法

    const results = this.data.algorithms.filter(algorithm => {
      return algorithm.name.includes(keyword) ||
        algorithm.subject.includes(keyword) ||
        algorithm.product.includes(keyword) ||
        algorithm.purpose.includes(keyword) ||
        algorithm.recordNumber.includes(keyword);
    });

    this.setData({
      searchResults: results
    });
  },

  Input: function (e) {
    this.setData({
      inputvalue: e.detail.value
    });
  },

  more: function (event) {
    const index = event.currentTarget.id;
    let eventData;

    if (this.data.searchResults.length === 0) {
      eventData = this.data.algorithms[index];
    } else {
      eventData = this.data.searchResults[index];
    }

    if (!eventData) {
      console.error('未找到相应的数据');
      return;
    }

    const encodedData = encodeURIComponent(JSON.stringify(eventData));

    wx.navigateTo({
      url: './resultmore?data=' + encodedData,
    });
  },
});