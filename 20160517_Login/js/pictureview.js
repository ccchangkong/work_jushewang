

/*--产品展示图--*/
$(document).ready(function() {
	
    // 图片左右滚动
    var count = $(".picturesview li").length - 1;
    /* 显示 4 个 li标签内容 */
    var interval = $(".picturesview li:first").width();
    var curIndex = 0;

	$('.scrollbutton').click(function() {
		if ($(this).hasClass('disabled')) {
			return false;
		}
	
		if ($(this).hasClass('smallImgUp')) {
			--curIndex;
		} else {
			++curIndex;
		}
	console.log(curIndex);
		$('.scrollbutton').removeClass('disabled');
		if (curIndex == 0) {
			$('.smallImgUp').addClass('disabled');
		}
		if (curIndex == count) {
			$('.smallImgDown').addClass('disabled');
		}
		$(".picturesview ul").stop(false, true).animate({
			"marginLeft": -curIndex * interval + "px"
		},
		600);
	});

});

$(".scrollbutton").css("opacity",0);
$(".scrollbutton").mouseleave(function(){
	$(".scrollbutton").stop().animate({opacity:0.1},500);
	})
$(".scrollbutton").mouseenter(function(){
	$(".scrollbutton").stop().animate({opacity:1},500);
	})

