function getGoodsStr(goodsType){
	var goodsStr="";
	switch(parseInt(goodsType)){
		case 1:
			goodsStr="腕表";
			break;
		case 2:
			goodsStr="包包";
			break;
		case 3:
			goodsStr="服饰";
			break;
		case 4:
			goodsStr="首饰";
			break;
		case 5:
			goodsStr="钻石";
			break;
		case 6:
			goodsStr="数码";
			break;
		case 7:
			goodsStr="贵金属";
			break;
		default:
			break;
		
	}
	return goodsStr;
	
}

// 处理top 的登陆和未登陆 
function login(){
	window.location.href=proj_path+"/login.html";
}
function register(){
	window.location.href=proj_path+"/register.html";
}
function myOrder(){
	window.location.href=proj_path+"/order/myOrder";
}
/*function myCart(){
	window.location.href=proj_path+"/cart/myCart";
}*/
function userInfo(){
	window.location.href=proj_path+"/userCenter";
}
function loginOut(){
	$.ajax({
		type: "POST",
		url: "/logout",
		dataType:"json",
		success: function(data) {
			if(data.success){
				 $.ajax({
						type: "post",
						url: proj_path+"/checkLogin",
						dataType:"json",
						success: function(json) {
							if(json.success){
								$("#beforeLogin").hide();
								$("#afterLogin").show();
								if(json.data.username==null || json.data.username==""){
									$("#loginUserName").text(json.data.nickName);
								}else{
									$("#loginUserName").text(json.data.username);
								}
								$.ajax({
									type: "post",
									url: proj_path+"/cart/myCart4Home",
									dataType:"json",
									success: shoppingCart
								});
							}else{
								$("#beforeLogin").show();
								$("#afterLogin").hide();
								//$(".prompt").empty();
								//var div =  '<div class="nogoods">购物车中还没有商品，赶紧选购吧！</div>';
								//$(".prompt").append(div);
								$("#cartNum").text("[" + 0 + "]");
							}
						}
					});
			}else{
				$("#beforeLogin").hide();
				$("#afterLogin").show();
			}
		}
	});
}

