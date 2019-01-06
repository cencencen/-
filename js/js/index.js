/**
 * Created by jf on 2016/7/28.
 */
window.onload = function () {
    var flag = true;//将flag初始值设置为true，表示节流阀是打开的
    //config是配置单，规定了每张图片的大小位置层级透明度
    var config = [
        {
            "width": 400,
            "top": 20,
            "left": -50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 200,
            "opacity": 0.4,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 450,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 600,
            top: 70,
            left: 700,
            opacity: 0.4,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 900,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];

    //找人
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arrow = document.getElementById("arrow");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");

    function assign() {
        arrow.addEventListener('click',function(){},true);
        //让所有的li按照config配置单渐渐地各就各位
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], config[i], function () {
                flag = true;//当动画执行完成后，将flag设置为true，打开节流阀
            });
        }
    }

    assign();

    //点击右箭头，将配置单中最前面的元素放到最后面
    arrRight.onclick = function () {
        if (flag) {//当flag为true即节流阀是打开的状态时，才能执行动画
            flag = false;//当动画执行时，将flag设置为false，关闭节流阀
            config.push(config.shift());//把最前面的元素放到最后面
            //config.unshift(config.pop());//把最后面的元素放到最前面
            //让所有的li按照新生成的config配置单渐渐地各就各位
            assign();
        }

    };
    //点击左箭头，将配置单中最后面的元素放到最前面
    arrLeft.onclick = function () {
        if (flag) {
            flag = false;
            config.unshift(config.pop());//把最后面的元素放到最前面

            //config.push(config.shift());//把最前面的元素放到最后面
            assign();
        }
    };
};