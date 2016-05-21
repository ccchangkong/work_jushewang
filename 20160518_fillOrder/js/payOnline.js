/*在线支付方式切换*/
$(document).ready(function() {
	$("#paytype").val("5");
    $(".bankWap dt a").click(function(){
		var index = $(this).index();
		$(this).addClass("violet_b white").siblings().removeClass("violet_b white");
		$(".bankWap dd").eq(index).show().siblings("dd").hide();
		if($(this).html()=='网银支付'){
				$("#paytype").val("5");
			}else if($(this).html()=='银联支付'){
				$("#paytype").val("6");
			}else if($(this).html()=='支付宝'){
				$("#paytype").val("3");
			}else if ($(this).html()=='微信支付'){
				$("#paytype").val("7");				
			}
	});
});
/*银行选择*/
$("document").ready(function(){
  $(".ui-list-icons>li").live("click",function(){
    $(this).addClass("current").append("<i class='choice pa'></i>").siblings().removeClass("current").children("i").remove();
  });
});
//search.js在IE7下会干扰运行
//
///*支付银行加载*/
//$(function() {
//  //网银支付
//  $.ajax({
//      type: "get",
//      url: "/bankCardManagement/queryBankListByType?bankType=1",
//      dataType: "json",
//      success: function(data) {
//          for (var i = 0; i < data.length; i++) {
//              var item = data[i];
//              var lis = '<li class="pr fl" bank="' + item.bankId + '"><img src="../img/banklogo/' + item.id + '.png" alt="' + item.bankName + '" /></li>';
//              $(".bankOnline ul").append(lis);
//          }
//      }
//  });
//  //银联支付
//  $.ajax({
//      type: "get",
//      url: "/bankCardManagement/queryBankListByType?bankType=2",
//      dataType: "json",
//      success: function(data) {
//          for (var i = 0; i < data.length; i++) {
//              var item = data[i];
//              var lis = '<li class="pr fl" bank="' + item.bankId + '"><img src="../img/banklogo/' + item.id + '.png" alt="' + item.bankName + '" /></li>';
//              $(".cup ul").append(lis);
//          }
//      }
//  });
//});