$(function() {
	$(".lMainUlLiInput").on('click', function() {
		$(this).closest('.lMainUlLi').addClass('lMainUlLiAct').siblings('.lMainUlLi').removeClass('lMainUlLiAct');
		$(this).siblings('i').addClass($(this).siblings('i').data('class'));

//		alert($(this).siblings('i').addClass($(this).siblings('i').data('class')).closest('.lMainUlLi').siblings('.lMainUlLi').find('i').removeClass($(this).data('class'));

	})
});