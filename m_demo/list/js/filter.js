$(function() {

	//类型
	$(".f-type-li").on('click', function() {
		if($(this).hasClass('Act')) {
			$(this).remove();
		} else {
			$(this).addClass('Act').siblings().removeClass('Act');
		}
	});

	function filterScroll(trigger, target, scrolltarget, toplength) {
		$(trigger).on("click", function() {
			var index = $(this).index(trigger);
			var toplength = toplength || 200;
			var tops = $(target).eq(index).offset().top - toplength;
			var scrolltops = $(scrolltarget).scrollTop();
			$(scrolltarget).animate({
				scrollTop: tops + scrolltops
			}, 300);
		});
	};
	//品牌滚动
	filterScroll(".f-pp-right-li", ".f-pp-left-dl", ".f-detail-pp");
	//类别滚动
	filterScroll(".f-lb-left-li", ".f-lb-right-dt", ".f-detail-lb");

	$(".f-nav-li").on('click', function() {
		$(this).addClass('Act').siblings().removeClass('Act');
		var index = $(this).index('.f-nav-li');
		$(".f-detail>li").eq(index).removeClass('hide').siblings().addClass('hide');
	});
});