// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:''
  },

// 访问云函数
  // handleClick(){
  //   wx.cloud.init();
  //   wx.cloud.callFunction({
  //     // 云函数名称
  //     name: 'add',
  //     data: {
  //       a:1 ,
  //       b:2
  //     },
  //     success: function(res){
  //         console.log(res)
  //     }
  //   })
  // },

  //访问本地文件夹
  handleClick(){
    wx.chooseImage({
      success: (res) => {
        console.log(res)
        const path = res.tempFilePaths[0]
        this.setData({
            imagePath:path
        })
      },
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