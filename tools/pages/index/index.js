// mainPage.js

Page({
  data: {
    tools: [
      { toolId: "jingziqi", name: "井字棋", logo: "https://mmbiz.qpic.cn/sz_mmbiz_png/DI9jrncbAeDMhzrQiaIY1ibdicsoaEwh0LuY8RXKRsHQ70N0hFlnX4OY44ECfEWNMZpTpJdPkZUJ8ItIcH41pknmQ/640?wx_fmt=png", showLogo: 'Y' },
      { toolId: "meiriyitu", name: "每日一图", logo: "https://mmbiz.qpic.cn/sz_mmbiz_png/DI9jrncbAeDXeem5o6Rw56micIhtic7L7SqOibnricAw7DpyZgnTZGo4sdeyYvM21k2ibMnzeEUk7rKsvJ9dZjGICgg/640?wx_fmt=png&amp;from=appmsg", showLogo: 'Y' },
      { toolId: "shuipingyi", name: "水平仪", logo: "https://mmbiz.qpic.cn/sz_mmbiz_png/DI9jrncbAeDlibEtxlmribiajA0VJNyfsPkdoeLS5zCnMGE2zTKng8ZmrrX1Y48b1kcArTXazGD39yic7KpNqiaZiaGg/640?wx_fmt=png&amp;from=appmsg", showLogo: 'Y' },
      { toolId: "beianquery", name: "深度合成备案查询", logo: "https://mmbiz.qpic.cn/sz_mmbiz_png/DI9jrncbAeATO0XyMcjPC6DptceymP2nnl2BEqd79kCr9sgKGGQcfhxb2svdiaiclGnW2EpCje7hGscHPNewACdQ/640?wx_fmt=png&amp;from=appmsg", showLogo: 'Y' },
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
