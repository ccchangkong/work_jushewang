$(function() {
	$(".oNPic1").click(function() {
		$(this).toggleClass("oNPic1").toggleClass("oNPic2");
	});
	$(".rRR").click(function() {
		$(this).toggleClass("act");
		if($(this).hasClass("act")) {
			$(this).html("<i class='rRRpic2'></i><p class='rRRp'>收起</p>");
		} else {
			$(this).html("<p class='rRRp'>展开</p><i class='rRRpic'></i>");
		}
		$(".rRMs").slideToggle()
	});
	$(".oAli1").click(function() {
		$(this).find("i").toggleClass("oAPic1").toggleClass("oAPic2").closest(".oArli").siblings().find(".oAli1 i").removeClass("oAPic1").addClass("oAPic2");
		$(this).closest(".oArli").find('.ul').first().slideToggle().closest(".oArli").siblings().find('.ul').slideUp();
		$(this).closest(".oArli").toggleClass('nB').siblings().removeClass("nB");
	});
	$(".yhkli").click(function () {
		$(this).toggleClass("yhkAct").siblings().removeClass("yhkAct");
	})


})