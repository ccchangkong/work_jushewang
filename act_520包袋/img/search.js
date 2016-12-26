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

jQuery(function() {
    $.ajax({
        type: "post",
        url: proj_path + "/checkLogin",
        dataType: "json",
        success: function(json) {
            if (json.success) {
                $("#beforeLogin").hide();
                $("#afterLogin").show();
                if (json.data.username == null || json.data.username == "") {
                    $("#loginUserName").text(json.data.nickName);
                } else {
                    $("#loginUserName").text(json.data.username);
                }

                $.ajax({
                    type: "post",
                    url: proj_path + "/cart/myCart4Home",
                    dataType: "json",
                    success: shoppingCart
                });
            } else {
                $("#beforeLogin").show();
                $("#afterLogin").hide();
                //$(".prompt").empty();
                //var div = '<div class="nogoods">购物车中还没有商品，赶紧选购吧！</div>';
                //$(".prompt").append(div);
                $("#cartNum").text("[" + 0 + "]");
            }
        }
    });

/*    $.extend($.ui.autocomplete.prototype, {
        _renderItem: function(ul, item) {
            var table = '<table><tr><td align="left">' + item.label + '</td><td align="right"><font style="color: #8D8D8D; font-family: 黑体;">约' + item.value + '个宝贝</font>  </td></tr></table>';
            if (item.brandName != null) {
                table = '<table><tr><td align="left">' + getGoodsStr(item.goodsType) + '/' + item.brandName + '</td><td align="right"><font style="color: #009933; font-family: 黑体; font-style: italic">约' + item.value + '个宝贝</font>  </td></tr></table>';
            }
            if (item.categoryName != null) {
                table = '<table><tr><td align="left">' + getGoodsStr(item.goodsType) + '/' + item.categoryName + '</td><td align="right"><font style="color: #009933; font-family: 黑体; font-style: italic">约' + item.value + '个宝贝</font>  </td></tr></table>';
            }
            return $("<li></li>").data("item.autocomplete", item).append($('<a></a>').html(table)).appendTo(ul);
        }
    });

    $('#goodsTital').autocomplete({
        source: function(request, response) {
            $.getJSON(proj_path + "/goods/getSearch", {
                queryName: request.term,
                goodsType: 0
            },
            function(data) {
                response($.map(data,
                function(item) {
                    return {
                        label: item.sug,
                        value: item.resultCount,
                        goodsType: item.goodsType,
                        brandName: item.brandName,
                        categoryName: item.categoryName,
                        categoryId: item.categoryId,
                        brandId: item.brandId
                    }
                }));
            });
        },
        search: function() {
            var term = this.value;
            if (term.length < 1) {
                return false;
            }
        },
        focus: function() {
            return false;
        },
        select: function(event, ui) {
            var goodsType = ui.item.goodsType == null ? 0 : ui.item.goodsType;
            var categoryId = ui.item.categoryId == null ? 0 : ui.item.categoryId;
            var brandId = ui.item.brandId == null ? 0 : ui.item.brandId;
            $("#goodsType").val(goodsType);
            $("#mainCategoryId").val(categoryId);
            $("#mainBrandId").val(brandId);
            $(this).val(ui.item.label);
            window.open(proj_path + "/goods/list?goodsTitle=" + ui.item.label + "&goodsType=" + goodsType + "&mainCategoryId=" + categoryId + "&mainBrandId=" + brandId);
            return false;
        },
        open: function() {
            $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
        },
        close: function() {
            $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
        },
        change: function(event, ui) {
            if (!ui.item) {
                var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex($(this).val()) + "$", "i"),
                valid = false;
                $("ul.ui-autocomplete").children("option").each(function() {
                    if ($(this).text().match(matcher)) {
                        this.selected = valid = true;
                        return false;
                    }
                });
                if (!valid) {
                    return false;
                }
            }
        }
    });*/

    $('#search').click(function() {
        var goodsTitle = $('#goodsTital').val();
        var goodsType = $("#goodsType").val();
        var mainCategoryId = $("#mainCategoryId").val();
        var mainBrandId = $("#mainBrandId").val();
        if (goodsTitle == '') {
            goodsTitle = 0;
        }
        if (goodsType == '') {
            goodsType = 0;
        }
        if (mainCategoryId == '') {
            mainCategoryId = 0;
        }
        if (mainBrandId == '') {
            mainBrandId = 0;
        }
        window.open(proj_path + "/goods/list?goodsTitle=" + goodsTitle + "&goodsType=" + goodsType + "&mainCategoryId=" + mainCategoryId + "&mainBrandId=" + mainBrandId);
    });
	/*回车快捷键*/
	$("#goodsTital").keyup(function(e) {
		e = window.event || e; //兼容IE和非IE
		if (e.keyCode && e.keyCode == 13) {
			   $('#search').click();
		   }
	});
	
	
});

function myCart() {
    window.location.href = proj_path + "/cart/myCart";
}

function getGoods(goodsId) {
    window.open(proj_path + "/goods/detail/" + goodsId + "-100.html");
}

function deleteGoods(goodsId) {
    $.ajax({
        type: "post",
        url: proj_path + "/cart/removeCartGoods",
        data: {
            goodsId: goodsId
        },
        dataType: "json",
        success: function(data) {
            if (data.success) {
                $.ajax({
                    type: "post",
                    url: proj_path + "/cart/myCart4Home",
                    dataType: "json",
                    success: shoppingCart
                });
            } else {
                alert(data.errorMsg);
            }
        }
    });
}

function shoppingCart(data) {
    //$(".prompt").empty();
    /*var maxNum = 0;
    for (var i in data) {
        maxNum = parseInt(i) + 1;
        var item = data[i];
        var ul = '<ul class="order_list_detail"><li class="product"><div class="order_product tal"><a href="/goods/detail/' + item.goodsId + '-100.html" class="fl grey_bs mr15"><img src=' + item.imgUrl + ' height="80" width="80"></a><div class="fl"><a href="/goods/detail/' + item.goodsId + '-100.html"><p>' + item.goodsTitle + '</p></a><p><i>￥' + item.newPrePrice + '</i></p></div></div></li><li class="operating"><p class="grey_bs br"><a onclick="deleteGoods(\'' + item.goodsId + '\')">删除</a></p></li></ul>';
        $(".prompt").append(ul);
    }*/
	var maxNum = data.length;
    $("#cartNum").text("[" + maxNum + "]");
    /*if (maxNum == 0) {
        var div = '<div class="nogoods">购物车中还没有商品，赶紧选购吧！</div>';
        $(".prompt").append(div);
    }*/
}
//实体店
/*$(document).ready(function(){
        $("#scrollDiv").Scroll({line:1,speed:1000,timer:3000,up:"but_up",down:"but_down"});
});
*/
