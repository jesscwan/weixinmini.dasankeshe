// pages/takeaway/takeaway.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../image/111.png',
      '../image/222.png',
      '../image/333.png'
    ],
    shopInfo:[],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,

    //侧边选项内容
    categories:[
      {"name":"优惠"},
      {"name":"套餐"},
      {"name":"主食"},
      {"name":"小食"},
      {"name":"饮品"}
    ],
    
    goods:[
      {
        id:1,
        link: '/pages/card/card1/card1',
        title: "套餐1",
        desc:"4件套",
        price: 47.9,
        tag:"推荐",
        image: "/pages/image/pic111.png"
      },
      {
        id:2,
        link: '/pages/card/card2/card2',
        title: "套餐2",
        desc:"4件套",
        price: 39.9,
        tag:"推荐",
        image: "/pages/image/pic222.png"
      },
      {
        id:3,
        link: '/pages/card/card3/card3',
        title: "套餐3",
        desc:"4件套",
        price: 64.5,
        tag:"推荐",
        image: "/pages/image/pic333.png"
      },
      {
        id:4,
        link: '/pages/card/card4/card4',
        title: "套餐4",
        desc:"4件套",
        price: 75,
        tag:"推荐",
        image: "/pages/image/pic333.png"
      },
      {
        id:5,
        link: '/pages/card/card5/card5',
        title: "套餐5",
        desc:"4件套",
        price: 25,
        tag:"推荐",
        image: "/pages/image/pic333.png"
      },
      {
        id:6,
        link: '/pages/card/card6/card6',
        title: "套餐6",
        desc:"4件套",
        price: 103.5,
        tag:"推荐",
        image: "/pages/image/pic333.png"
      },
      {
        id:7,
        link: '/pages/card/card7/card7',
        title: "套餐7",
        desc:"4件套",
        price: 48.9,
        tag:"推荐",
        image: "/pages/image/pic333.png"
      },
      {
        id:8,
        link: '/pages/card/card8/card8',
        title: "套餐8",
        desc:"4件套",
        price: 64,
        tag:"推荐",
        image: "/pages/image/pic333.png"
      },
      {
        id:9,
        link: '/pages/card/card9/card9',
        title: "套餐9",
        desc:"4件套",
        price: 53,
        tag:"推荐",
        image: "/pages/image/pic333.png"
      },
      {
        id:10,
        link: '/pages/card/card10/card10',
        title: "套餐10",
        desc:"4件套",
        price: 39,
        tag:"推荐",
        image: "/pages/image/pic333.png"
      }
    ],
    sumprice:0,
    shoppingcartnum:0,
    showCart: false,
    array1:[],//第几个套餐
    array2:[], //套餐几的数量
  },
  // 加入购物车按钮，导入数据库的购物车
  countprice(e){
    console.log(e);
    var id = e.currentTarget.dataset.idx;
    var name = e.currentTarget.dataset.title;
    var price = e.currentTarget.dataset.price;
    wx.request({
      method: "POST",
      url: 'http://localhost:8090/addcart',
      data:{
        "id": id,
        "name": name,
        "number": 1,
        "price": price
      },
      success:(res)=>{
        
      },
    }),
    setTimeout(()=>{
      this.onShow();
    },500)
  },
  //清空购物车
  clearcart(){
    wx.request({
      url: 'http://localhost:8090/deletecart',
      method:"POST",
      success:(res)=>{
        console.log(res);
      },
    })
  },
  //支付点击
  onClickButton(e){
    wx.redirectTo({
      url: '../payment/payment',
    })
    this.clearcart();
    setTimeout(()=>{
      this.onShow();
    },500)
  },
  showCartPopup(){
    this.setData({
      showCart: !this.data.showCart // 切换 showCart 的值
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.onShow();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    wx.request({
      method: "POST",
      url: 'http://localhost:8090/showcart',
      success:(res)=>{
        this.setData({
          array1: res.data.data
        })
        var sumprice = 0;
        var shoppingcartnum = 0;
        var arr = res.data.data;
        for(var i = 0; i < arr.length; i++) {
          sumprice += arr[i].price;
        }
        shoppingcartnum = arr.length;
        this.setData({
          sumprice:sumprice,
          shoppingcartnum:shoppingcartnum,
        })
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})