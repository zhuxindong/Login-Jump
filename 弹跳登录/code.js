/*
     1. 背景渐变 (定时器 + 透明度改变)

     改变定位元素的 top值 1
     达到指定位置之后进行弹跳一次 1

     多个元素依次运动

     动画序列
     /* for(var i=len-1;i>=0;i--){
     (function(x){
     setTimeout(function(){
     clearInterval(timer);
     var end=150+(x*60);
     timer=setInterval(function(){
     speed+=3;
     var T=oMove[x].offsetTop+speed;
     if(T>end){
     T=end;
     speed*=-1; // 让动量变为负数
     speed*=0.4; // 摩擦系数 每一次都慢一点
     }
     console.log(speed)
     oMove[x].style.top=T+'px';
     },20);
     },900*(len-1-x))
     })(i)
     } */
//oMove[len-1];


//function(){}   /*匿名函数*/
//()()           /*IIFE 匿名函数立刻执行 函数自执行体*/
(function() {
    var timer = null;
    /*声明定时器*/
    /*最新的元素获取写法 兼容ie8*/
    /*一组元素*/
    var oImg = document.querySelectorAll('#bg_wrap div');
    var len = oImg.length; //3
    var index = 0;
    timer = setInterval(function() {
        oImg[index].style.opacity = 0;
        index++; //1 index=index+1;
        index %= len; // 求模取余 index=index%len;
        /*
         0%3= 0 1%3=1   2%3=2 3%3=0整除了
         */
        oImg[index].style.opacity = 1;
    }, 3000);
})();
// 表单重力模拟弹跳系统
// (function () {

//     var oMove = document.querySelectorAll('.move');
//     var len = oMove.length;
//     var timer = null;
//     var timeout = null; //setTimeout
//     var speed = 3;

//     move(len - 1);
//     function move(index) {
//         //根据下标来计算end值
//         if (index < 0) {//如果下标<0 我们清除所有定时器
//             clearInterval(timer);     //清除循环定时器
//             clearTimeout(timeout);      //清除延时定时器
//             return;                   //终止函数
//         }
//         var end = 150 + (index * 60);
//         timer = setInterval(function () {
//             //动量每回合自增3 模拟重力加速度
//             speed += 3; // 4 7 11   -30 -27 -24 ... 30 -30
//             //设置每一次的top值 他本身距离顶端的距离+ 动量
//             var T = oMove[index].offsetTop + speed;

//             //当元素的top大于设定值的时候
//             if (T > end) {
//                 T = end;
//                 speed *= -1; // 让动量变为负数
//                 speed *= 0.4; // 摩擦系数 每一次都慢一点;
//             }
//             console.log(speed)
//             oMove[index].style.top = T + 'px';
//         }, 20);
//         //过多少时间之后执行函数
//         timeout = setTimeout(function () {
//             clearInterval(timer);
//             index--;     // 3=>2
//             move(index); // 递归自己调用自己
//         }, 900);
//     }


// })();


$(function() {
    $("#logpage").hide();
});


$(function() {

    $("#trylog").click(
        function() {

            $("#logpage").show();
            $("#indexpage").hide();



            (function() {

                var oMove = document.querySelectorAll('.move');
                var len = oMove.length;
                var timer = null;
                var timeout = null; //setTimeout
                var speed = 3;

                move(len - 1);

                function move(index) {
                    //根据下标来计算end值
                    if (index < 0) { //如果下标<0 我们清除所有定时器
                        clearInterval(timer); //清除循环定时器
                        clearTimeout(timeout); //清除延时定时器
                        return; //终止函数
                    }
                    var end = 150 + (index * 60);
                    timer = setInterval(function() {
                        //动量每回合自增3 模拟重力加速度
                        speed += 3; // 4 7 11   -30 -27 -24 ... 30 -30
                        //设置每一次的top值 他本身距离顶端的距离+ 动量
                        var T = oMove[index].offsetTop + speed;

                        //当元素的top大于设定值的时候
                        if (T > end) {
                            T = end;
                            speed *= -1; // 让动量变为负数
                            speed *= 0.4; // 摩擦系数 每一次都慢一点;
                        }
                        console.log(speed)
                        oMove[index].style.top = T + 'px';
                    }, 20);
                    //过多少时间之后执行函数
                    timeout = setTimeout(function() {
                        clearInterval(timer);
                        index--; // 3=>2
                        move(index); // 递归自己调用自己
                    }, 900);
                }


            })();








        }



    )


});
