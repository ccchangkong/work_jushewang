$(function() {
	$(".MainUlLiInput").on('click', function() {
		$(this).closest('.MainUlLi').addClass('Act').siblings('.MainUlLi').removeClass('Act');
	});
	$(".rgAgreePA").on('click',function () {
		$(".rgAgreement").show();
	});
	$(".rgAClose").on('click',function () {
		$(".rgAgreement").hide();
	})
});