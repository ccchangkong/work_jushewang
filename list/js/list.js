$(function() {
	//搜索打开关闭
	$(".l-search-input").focus(function() {
		$(".l-search-full").slideDown();
		$(".l-search-text").text('取消');
	});
	$(".l-search-text").on('click', function() {
		$(".l-search-full").slideUp();
		$(".l-search-text").text('筛选');
	});
	//类型
	$(".l-type-li").on('click', function() {
		if($(this).hasClass('Act')) {
			$(this).remove();
		} else {
			$(this).addClass('Act').siblings().removeClass('Act');
		}
	});
	//排序
	$('.l-sort-li').on('click', function() {
		$(this).addClass('Act').siblings().removeClass('Act');
	});
})