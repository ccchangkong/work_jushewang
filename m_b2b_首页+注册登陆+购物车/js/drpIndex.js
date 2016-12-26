$(function() {

	$(".clsThree>li").click(function() {
		var $n = $(this);
		if ($n.attr('id') != "clsT2") {
			$n.toggleClass('pAct').siblings().removeClass('pAct');
			$n.children().toggle();
			$n.siblings().not("#clsT2").children().eq(0).show().next().hide();
			$("." + $n.attr('id') + "a").fadeToggle().siblings().hide();
		} else {
			$n.removeClass('pAct').siblings().removeClass('pAct');
			$n.siblings().children().eq(0).show().siblings().hide();
			$n.siblings().children().eq(2).show().siblings().hide();
			$(".clsThreeAll").hide();
			window.location.href = "selectBrands.html";
		}
	})

	$(".sequence>li").on("click", function() {
		var index = $(this).index(".sequence>li");
		if (index > 1) {
			$(this).children().toggle();
			$(this).removeClass('pAct').siblings().removeClass('pAct');
		} else {
			$(this).toggleClass('pAct').siblings().removeClass('pAct');
		}
	})
	$(".sm p").click(function() {
		$(this).css("color", "#fd2f2f").siblings().css("color", "#666666");
		$(this).parent().siblings().html('<p>' + $(this).text() + '<img src="img/navd.png"/></p>');
	})

	var i = 0;
	$(".clsT1a li").on("click", function() {
		if ($(".filter .clsT1").html() == '') {
			i++;
		}
		$(".filter .clsT1").html('');
		$(".filter .clsT1").html($(this).text() + '<img src="img/close.png" />');
		$(".filter").slideDown();
	})
	$(".clsT3a li").on("click", function() {
		var t1 = ($(".filter .clsT1").html() == '');
		var t2 = ($(".filter .clsT2").html() == '');
		var t3 = ($(".filter .clsT3").html() == '');
		$(".filter .clsT3").html('');
		if (i > 0 && t2 && t3) {
			$(".filter .clsT3").html('<span>+</span>' + $(this).text() + '<img src="img/close.png" />');
		} else {
			$(".filter .clsT3").html($(this).text() + '<img src="img/close.png" />');
		}
		if (t3) {
			i++;
		}
		$(".filter").slideDown();
	})
	$(".filterList").on("click", "img", function() {
		$(this).closest("li").html('');
		i--;
		if (i == 0) {
			$(".filter").slideUp().find("li").html("");
		}
	});
	$(".clear").on("click", function() {
		$(this).closest(".filter").slideUp().find("li").html("");
		i = 0;
	});
});