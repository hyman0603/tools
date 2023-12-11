// mainPage.js

Page({
  data: {
    tools: [
      { toolId: "jingziqi", name: "井字棋", logo: "https://mmbiz.qpic.cn/sz_mmbiz_png/DI9jrncbAeDMhzrQiaIY1ibdicsoaEwh0LuY8RXKRsHQ70N0hFlnX4OY44ECfEWNMZpTpJdPkZUJ8ItIcH41pknmQ/640?wx_fmt=png", showLogo: 'Y' },
      { toolId: "tool2", name: "工具2", logo: "https://mmbiz.qpic.cn/sz_mmbiz_png/DI9jrncbAeDMhzrQiaIY1ibdicsoaEwh0LuY8RXKRsHQ70N0hFlnX4OY44ECfEWNMZpTpJdPkZUJ8ItIcH41pknmQ/640?wx_fmt=png", showLogo: 'Y' },
      { toolId: "tool3", name: "工具3", logo: "https://mmbiz.qpic.cn/sz_mmbiz_png/DI9jrncbAeDMhzrQiaIY1ibdicsoaEwh0LuY8RXKRsHQ70N0hFlnX4OY44ECfEWNMZpTpJdPkZUJ8ItIcH41pknmQ/640?wx_fmt=png", showLogo: 'N' },
      { toolId: "tool4", name: "工具4", logo: "https://mmbiz.qpic.cn/sz_mmbiz_png/DI9jrncbAeDMhzrQiaIY1ibdicsoaEwh0LuY8RXKRsHQ70N0hFlnX4OY44ECfEWNMZpTpJdPkZUJ8ItIcH41pknmQ/640?wx_fmt=png", showLogo: 'N' },
      { toolId: "tool5", name: "工具5", logo: "https://mmbiz.qpic.cn/sz_mmbiz_png/DI9jrncbAeDMhzrQiaIY1ibdicsoaEwh0LuY8RXKRsHQ70N0hFlnX4OY44ECfEWNMZpTpJdPkZUJ8ItIcH41pknmQ/640?wx_fmt=png", showLogo: 'N' }
      // 添加更多工具
    ],
  },

  navigateToTool: function (event) {
    const toolId = event.currentTarget.dataset.toolid;
    wx.navigateTo({
      url: `/pages/${toolId}/${toolId}`,
    });
  },
});
