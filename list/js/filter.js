$(function() {
	//类型
	$(".f-type-li").on('click', function() {
		if($(this).hasClass('Act')) {
			$(this).remove();
		} else {
			$(this).addClass('Act').siblings().removeClass('Act');
		}
	});
})