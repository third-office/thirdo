/* 获取对象 */
var tabBox = document.getElementById("tabBox");
var tabList = tabBox.getElementsByTagName("div");
var navBox = document.getElementById("navBox");
var navList = navBox.getElementsByTagName("li");

/* 这个方法不行：索引问题，i的值为3
  for (var i = 0; i < navList.length; i++) {
    //循环计数i和navBox索引对应
    navList[i].onclick = function() {
      changeTab(i);
      // console.log(i);输出测试：闭包问题
    };
  } */


/* 解决办法一：自定义属性解决方法 */
//循环3个li，给每个li绑定点击事件
/* for (var i = 0; i < navList.length; i++) {
  //循环计数i和navBox索引对应
  //在循环给每个li绑定点击事件的时候，我们给每一个li（元素对象）设置一个自定义属性myIndex，属性值存储的时当前li的索引
  navList[i].myIndex = i;
  navList[i].onclick = function() {
    changeTab(this.myIndex);//使用当前点击这个元素的索引
    // console.log(this.myIndex);输出测试
    // console.log(i);输出测试：闭包问题
  };
} */
/* 第二个方式：闭包解决方案 */
  /* for (var i = 0; i < navList.length; i++) {
    //循环计数i和navBox索引对应
    navList[i].onclick = (function(i) {
      return function () {
        changeTab(i);//闭包解决问题
        // console.log(i);输出测试
      }
    })(i);
  }
 */

 /* 第三种方案：es6 中的let解决方案*/
  for (let i = 0; i < navList.length; i++) {
    //循环计数i和navBox索引对应
    navList[i].onclick = function() {
      changeTab(i);
      // console.log(i);输出测试：闭包问题
    };
  }

//封装函数实现选项卡切换
//创建函数时不知道点击的是谁，所以定义一个入口clickIndex（存储点击这一项的索引），执行方法的时候把点击这一项的索引传递进来即可
function changeTab(clickIndex) {
  //1.清空所有li和div都没有选中样式
  for (var i = 0; i < navList.length; i++) {
    navList[i].className = "";
    tabList[i].className = "";
  }
  //2.点击的是谁就给谁加
  navList[clickIndex].className = "active";
  tabList[clickIndex].className = "active";
}
