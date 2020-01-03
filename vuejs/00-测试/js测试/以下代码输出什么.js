var y = 1;
if (function f() { }){
    y += typeof f;
}
console.log(y);

//运行原理eval（）函数
