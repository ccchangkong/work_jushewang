$(function() {
	$(".rMainUlLiInput").on('click', function() {
		$(this).closest('.rMainUlLi').addClass('lMainUlLiAct').siblings('.rMainUlLi').removeClass('rMainUlLiAct');
//		$(this).siblings('i').addClass($(this).siblings('i').data('class'));

//		alert($(this).siblings('i').addClass($(this).siblings('i').data('class')).closest('.rMainUlLi').siblings('.rMainUlLi').find('i').removeClass($(this).data('class'));

	})
});