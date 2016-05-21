// JavaScript Document
var proj_path = "";
var isNeedCheckCode = false;
$(document).ready(function() {
	$("label[name='checkProduct']").live("click",
		function() {
			$(this).toggleClass('isUse');
		});
	$("label[name='chooseOne']").live("click",
		function() {
			if ($(this).hasClass('isUse')) {
				$(this).toggleClass('isUse');
			} else {
				$("label[name='chooseOne']").removeClass('isUse');
				$(this).toggleClass('isUse');
			}

		});

	$("#modify").click(function() {
		var deliverProvince = $("#deliverProvince").val();
		var deliverCity = $("#deliverCity").val();
		var deliverCounty = $("#deliverCounty").val();
		var deliverStreet = $("#deliverStreet").val();
		var deliverDetail = $("#deliverDetail").val();
		$("select[name='sel_prov']").val(deliverProvince);
		$("select[name='sel_prov']").change();
		$("select[name='sel_city']").val(deliverCity);
		$("select[name='sel_city']").change();
		$("select[name='sel_county']").val(deliverCounty);
		$("select[name='sel_county']").change();
		$("select[name='sel_town']").val(deliverStreet);
		$("input[name='address_detail']").val(deliverDetail);
		$("input[name='zipCode']").val($("#zipCode").val());
		$("input[name='phone']").val($("#deliverPhone").val());
		$("input[name='realName']").val($("#deliverPeople").val());
		$("#deliver_ul").hide();
		$("#address").show();
	});

	$("#takeOrder").click(function() {
		/*$("#takeOrder").unbind("click");*/
		var a = $("#changeAddress").val();
		if (a == "address") {
			alert("收货地址未保存，请先保存收货地址");
		} else {
			var deliverId = $("input[name='bDeliverAddressId']").val();
			var bQaName = $("input[name='bQaName']").val();
			var bQaPhone = $("input[name='bQaPhone']").val();
			if (bQaName == "") {
				alert("请填写质保人");
				$(this).removeAttr("disabled");
				return;
			} else if (bQaPhone == "") {
				alert("请填写质保手机号");
				$(this).removeAttr("disabled");
				return;
			} else if (deliverId == "") {
				alert("请填写收货信息");
				$(this).removeAttr("disabled");
				return;
			} else {
				$("#takeOrder").unbind("click");
				if ($("input[name=isauction]").val() == 1) {
					var goodsId = $("#goodId").val();
					var price = $("#auctionPrice").val();
					$.ajax({

					});
				} else {
					var goodsId = $("input[name='goodsId']").val();
					var isCart = $("input[name='isCart']").val();
					var couponId = $("input[name='couponId']").val();
					var bookOrderId = $("input[name='bookOrderId']").val();
					$.ajax({

					});
				}
			}
		}

	});

	$(document).ready(function() {
		if ($("#deliverlength").val() == 0) {
			$("#address").show("");
		}

		$('.divselect').click(function(event) {
			$('.divselect cite').removeClass('special-cite');
			$(this).children('cite').addClass('special-cite');
		});

		/*添加地址*/
		$(".addAddress").click(function() {
			$("#address").show("");
			$("#changeAddress").val("address");
			$("#deliverId").val("");
			$("#zipCode").val("");
			$("#realName").val("");
			$("#phone").val("");
			$("#address_detail").val("");
			$("#province,#city,#township,#street").find("cite").html("请选择");
			$("#sel_prov,#sel_city,#sel_town,#sel_street").val("");
			$("#street").show();
			$("#province ul").empty();
			$("#city ul").empty();
			$("#township ul").empty();
			$("#street ul").empty();

		});
		$(".close").click(function() {
			$("#address").hide();
			$("#changeAddress").val("close");
		});
		/*更多地址*/
		$(".deliveryInfo").children("ul:gt(0)").hide();
		$(".deliveryInfo a.moreAddress").click(function() {
			if ($(this).text() == "更多地址") {
				$(this).text("收起").siblings("ul:gt(0)").show();
			} else {
				$(this).text("更多地址").siblings("ul:gt(0)").hide();
			}
		});
		/*模拟select*/
		$(".divselect").click(function() {
			$(this).find("ul").slideToggle();
		});
		//鼠标离开后隐藏下拉框
		$(".divselect").mouseleave(function() {
			$(this).find("ul").hide();
		});
	});
});