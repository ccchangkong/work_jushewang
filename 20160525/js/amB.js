$(function() {

    //a3翻页
    $('.a3main li').css("display", "none");
    $('.a3main li:first').css("display", "block");
    var a3len = $(".a3main li").length;
    var a3index = 0;

    $(".a3aU").click(function() {
        a3index--;
        $(".a3num").html(a3index + 1);
        $(".a3main li").eq(a3index).css("display", "block").siblings().css("display", "none");
    });
    $(".a3aD").click(function() {
        a3index++;
        $(".a3num").html(a3index + 1);
        $(".a3main li").eq(a3index).css("display", "block").siblings().css("display", "none");
    });

    //a4扩展
    $(".a4main li:gt(17)").css("display", "none");


    $('.a4BtnA').live("click", function() {
        $(".a4main li:gt(17)").css("display", "block");
        $(this).removeClass('a4BtnA').addClass('a4BtnB').html('收起');
    });
    $('.a4BtnB').live("click", function() {
        $(".a4main li:gt(17)").css("display", "none");
        $(this).removeClass('a4BtnB').addClass('a4BtnA').html('查看更多');
    });


    //a5图片轮播
    $('.a5UlPic li').fadeOut();
    $('.a5UlPic li:first').fadeIn();

    $('.a5Q li').eq(0).addClass('actQ');

    var len = $(".a5Q li").length;
    var index = 0; //图片序号
    var adTimer;

    $(".a5Q li").mouseover(function() {
        index = $(".a5Q li").index(this); //获取鼠标悬浮 li 的index
        showImg(index);
    }).eq(0).mouseover();

    //滑入停止动画，滑出开始动画.
    $('.a5UlPic').hover(function() {
    	$(".a5UlPic li").stop('false','true');
//      clearInterval(adTimer);
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
        var adHeight = $(".a5UlPic>li:first").height();
        $(".a5UlPic li").eq(index).fadeIn().siblings().stop(true, true).fadeOut();
        $(".a5Q li").removeClass("actQ")
            .eq(index).addClass("actQ");
    }


});
