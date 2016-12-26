$(document).ready(function() {
    var a1s = $('.a1 li a>img');
    var a2s = $('.a2 li a>img');
    var a3s = $('.a3 li a>img');
    a1s.hide();
    a2s.hide();
    a3s.hide();
    $(window).scroll(function(event) {
        //不断的获取被浏览器卷去的高
        var callWindowHeight = $(window).scrollTop();
        var myLiHeight0 = $('.a1').offset().top;
        var myLiHeight1 = $('.a2').offset().top + 50;
        var myLiHeight2 = $('.a3').offset().top;
        if (callWindowHeight >= myLiHeight2) {
            a3s.show();
            a3s.eq(0).addClass('rotl');
            a3s.eq(1).addClass('rotr');
            a3s.eq(2).addClass('rotl');
        } else if (callWindowHeight >= myLiHeight1) {
            a2s.show();
            a2s.eq(0).addClass('rotr');
            a2s.eq(1).addClass('rotl');
            a2s.eq(2).addClass('rotr');
        } else if (callWindowHeight >= myLiHeight0) {
            a1s.show();
            a1s.eq(0).addClass('rotl');
            a1s.eq(1).addClass('rotr');
            a1s.eq(2).addClass('rotl');
        };

    });

    $('.a4UlPic li').fadeOut();
    $('.a4UlPic li:first').fadeIn();

    $('.a4Q li').eq(0).addClass('actQ');

    var len = $(".a4Q li").length;
    var index = 0; //图片序号
    var adTimer;

    $(".a4Q li").mouseover(function() {
        index = $(".a4Q li").index(this); //获取鼠标悬浮 li 的index
        showImg(index);
    }).eq(0).mouseover();

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
