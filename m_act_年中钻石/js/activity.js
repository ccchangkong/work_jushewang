$(document).ready(function() {
    $('.a4UlPic li').fadeOut();
    $('.a4UlPic li:first').fadeIn();

    $('.a4Q li').eq(0).addClass('actQ');

    var len = $(".a4Q li").length;
    var index = 0; //图片序号
    var adTimer;

//  $(".a4Q li").mouseover(function() {
//      index = $(".a4Q li").index(this); //获取鼠标悬浮 li 的index
//      showImg(index);
//  }).eq(0).mouseover();

    //滑入停止动画，滑出开始动画.
    $('.a4UlPic').hover(function() {
        $(".a4UlPic li").stop('false', 'true');
        clearInterval(adTimer);
    }, function() {
        adTimer = setInterval(function() {
            showImg(index);
            index++;
            if (index == len) { //最后一张图片之后，转到第一张
                index = 0;
            }
        }, 3000);
    }).trigger("mouseleave");

    function showImg(index) {
        var adHeight = $(".a4UlPic>li:first").height();
        $(".a4UlPic li").eq(index).fadeIn().siblings().stop(true, true).fadeOut();
        $(".a4Q li").removeClass("actQ")
            .eq(index).addClass("actQ");
    }
});
