$(function() {
	$(".MainUlLiInput").on('click', function() {
		$(this).closest('.MainUlLi').addClass('Act').siblings('.MainUlLi').removeClass('Act');
	});
	
});