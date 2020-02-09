//  console.log([val])
//  console.log(1 == 2)
//  console.log('AA' === NaN)

//  isNaN([val])
// console.log(isNaN(10));     //false
// console.log(isNaN('10'));    //false

// console.log(Array.sort([20,30,10]))

// var a = 10 + null + true + undefined;
// console.log(a);

// console.log('' === 0) //false
// console.log(!!undefined)

/* let person = {
        name: "2-4个汉字",  //正则/^[\u4E00-\u9FA5]{2,4}$/
        age: '20-30',  //正则/^[val]$/
        height: '155-165',  //正则/^[val]$/
        weight: '50-65',  //正则/^[val]$/

        1: 100,

    };
    console.log(person.name);
    console.log(person['age']);
    console.log(person.sex);  //undefined
    console.log(person[1]); // console.log(person.1);语法错误

    //设置属性值
    person.GF = '远远';
    console.log(person['GF']);
    //删除属性
    //=>真删除：把属性彻底删掉
    delete person[1];
    //=>假删除：属性还在，值为空
    person.weight = null; */

/* 
    let arr = [12, 23, 34, "哈哈", true, '12'];
    // console.log(arr[-1]); undifined
    arr[arr.length] = 100;
    console.log(arr); */

/* let a = 3;
    let b = a;
    b = 13;
    console.log(a);
    //基本数据类型，存放在栈内，（正常思维）结果：12

    let n = {
        name: "珠峰"
    }
    let m = n;
    m.name = "培训";
    console.log(n.name);
    //引用数据类型，存放在堆内，复制一份结果：培训 */

/* let n = [10,20];
    let m = n;
    let x = m;
    m[0] = 100;
    x = [30,40];
    x[0] = 200;
    m = x;
    m[1] = 300;
    n[2] = 400;
    console.log(n,m,x)
    //结果：n = [100,20,400],m = [200,300],x = [200,300] */

/* let a = {
        n: 1,
    };
    let b = a;
    a.x = a = {
        n: 2,
    };
    console.log(a.x);
    console.log(b);
    //结果：a.x = undefined  b = {n: 1,x:{n: 2}} */

    // console.log(typeof 1);
    // a = NaN;
    // console.log(typeof a);
    // console.log(typeof null);//结果object

/* let a = 10;
    a>0? (a<10? a++ : a--) : (a>-10? a += 2 : null);
    console.log(a);
    switch (a){
        case 10 :
            console.log("haha");
            break;
        default: 
            console.log("hehe");
    }    */

/*  for (var i = 0; i < 10; i++) {
        //默认循环10次
        if (i >= 2) {
            //3(1)，6(2)
            i += 2;
            continue;
        }
        if (i >= 6) {
            //5
            i--;
            break;
        }
        i++; //1(0)，4(1)
        console.log(i); //1(0)，4(1)
    } //最终循环3次
    console.log(i); //结果：5 */

    /* 求两个数的和，算完和后乘以10，然后再除以2 */
    /* 创建函数时我们设置了形参变量，但是如果执行的时候没有给传递对应的实参值，那么形参变量默认为：undefined */
    // function sum(n, m) {
    // /* 参数初始化 */
    //     if (n === undefined) {
    //         n = 0;
    //     }
    //     if (typeof m === undefined) {
    //         m = 0;
    //     }
    //     let res = n + m; //无参时是NaN
    //     res *= 10;
    //     res /= 2;
    //     console.log(res);
    // }
    // //执行函数
    // sum();//NaN
    // sum(10,20,30);//30

    /* function sum (n, m) {
        if (n === undefined || m === undefined){
            //函数体中遇到return,后面代码则不再执行了
            return ;
        }
        let result = n + m;
        
    }
    //接受返回值
    let AA = sum(10,20);
    console.log(AA);//如果函数中没写return,默认返回值为undefined */

    //============匿名函数
    //匿名函数之函数表达式：把一个匿名函数本身作为值赋值给其他东西，这种函数一般不是手动触发执行，而且靠其他程序驱动触发执行（例如：触发某个事件的时候把它执行等）
    // document.body.onclick = function () {}
    // setTimeout(function(){},1000);//设置定时器

    // (function(n){
    //     //匿名函数之自执行函数：创建完一个匿名函数，紧接着就把当前匿名函数加小括号执行。 n => 100
    // })(100);
    

    






















