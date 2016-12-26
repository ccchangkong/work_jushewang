$(function() {
	$(".chose img").hide();

	$(".sort>li").on("click", function() {
		$(".chose img").hide();
		var index = $(this).index(".sort>li");
		var $li = $(".g>li");
		$(this).addClass("act").siblings().removeClass("act");
		$li.hide();
		if (index == 0) {
			$li.fadeIn();
		} else if (index == 1) {
			$li.filter(".gStateA").fadeIn();
		} else {
			$li.filter(".gStateB").fadeIn();
		}
	});

	$(".g>li>img").on("click", function() {
		$(this).parent().slideUp(function() {		
				$(this).remove();		
		});
	});

	var i = true;
	$(".chose").on("click", function() {
		$(this).children("img").fadeToggle();
		if ($(this).hasClass("allChose")) {
			if (i) {
				$(".g li:visible .chose img").fadeIn();
			} else {
				$(".g li:visible .chose img").fadeOut();
			}
			i = !i;
		}
	});

	$(".selectB").click(function() {
		$(".g li:visible  .chose img:visible").closest("li").slideUp(function() {		
				$(this).remove();		
		});
	});

})