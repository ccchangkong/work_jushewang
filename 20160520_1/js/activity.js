//距离顶部一定距离才显示
$(document).ready(function() {

	// 固定定位
	var callbackHeight = 1165;
	$(window).scroll(function(event) {
		//不断的获取被浏览器卷去的高
		var callWindowHeight = $(window).scrollTop();
		//然后拿卷去的高和一屏的高做判断
		if (callWindowHeight > callbackHeight) {
			$('#lift').addClass('fixed');
		} else { //如果大于一屏显示按钮；小于一屏隐藏按钮 
			$('#lift').removeClass('fixed');
		}

		var myLiHeight0 = $('.a1').offset().top;
		var myLiHeight1 = $('.a2').offset().top - 79;
		var myLiHeight2 = $('.a3').offset().top - 79;
		var myLiHeight3 = $('.a4').offset().top - 79;
		var myLiHeight4 = $('.a5').offset().top - 79;
		if (callWindowHeight >= myLiHeight4) {
			$('#lift li:eq(4)').addClass('opa').siblings().removeClass('opa')
		} else if (callWindowHeight >= myLiHeight3) {
			$('#lift li:eq(3)').addClass('opa').siblings().removeClass('opa')
		} else if (callWindowHeight >= myLiHeight2) {
			$('#lift li:eq(2)').addClass('opa').siblings().removeClass('opa')
		} else if (callWindowHeight >= myLiHeight1) {
			$('#lift li:eq(1)').addClass('opa').siblings().removeClass('opa')
		} else {
			$('#lift li:eq(0)').addClass('opa').siblings().removeClass('opa')
		};

	});

	// 点击业务介绍的每个Li时 该Li具备这个类
	$('#lift li').click(function(event) {
		$(this).addClass('opa').siblings().removeClass('opa');
	});

	$(".lift li.navigate").click(function() {
		var index = $(this).index();
		var tops = $(".anchor").eq(index).offset().top;
		if (index !== 0) {
			tops -= 79;
		}
		$('html, body').stop().animate({
				scrollTop: tops
			},
			300);
	});

});

