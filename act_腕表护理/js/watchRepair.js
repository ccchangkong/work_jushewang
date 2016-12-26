$(function() {

	$('.a3Li').hide();
	$('.a3Li:first').fadeIn();
	var len = $(".a3Li").length - 1;
	var index = 0; //图片序号
	var adTimer;

	//滑入停止动画，滑出开始动画.
	$('.a3UlPic').hover(function() {
		$(".a3Li").stop('false', 'true');
		clearInterval(adTimer);
	}, function() {
		adTimer = setInterval(function() {
			showImg(index++);
			if(index == (len+1)) { //最后一张图片之后，转到第一张
				index = 0;
			}
		}, 3000);
	}).trigger("mouseleave");

	function showImg(index) {
		$(".a3Li").eq(index).fadeIn().siblings().stop(true, true).fadeOut();
	}

	$(".a3next").click(function() {
		index == len ? index = 0 : index++;
		showImg(index);
		clearInterval(adTimer);
		adTimer = setInterval(function() {
			showImg(index++);
			if(index == (len+1)) { //最后一张图片之后，转到第一张
				index = 0;
			}
		}, 3000);
	});
	$(".a3prev").click(function() {
		index == 0 ? index = len : index--;
		showImg(index);
		clearInterval(adTimer);
		adTimer = setInterval(function() {
			showImg(index++);
			if(index == (len+1)) { //最后一张图片之后，转到第一张
				index = 0;
			}
		}, 3000);
	});
});