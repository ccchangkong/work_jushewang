﻿
/*加载商品*/
$(document).ready(function() {
    //轻奢精品献礼520 
    $.LoadGoods("/goods/getGoodsByGoodsIds?goodsIds=1256940602,6456270908,020205120903,6569565876,4943987134,9185033138,2749759886,5895076622,020205070703,5979955829,020305091303,6792595907", $('.a1 ul'));
    //520  大胆表白我爱你
    $.LoadGoods("/goods/getGoodsByGoodsIds?goodsIds=7886127114,4256170363,020153112501,5020090983,9729207532,9374449095,020035100302,2322080017,6146480469,0359510204,0964810723,020153082301", $('.a2 ul'));
	//520  嫁给我吧亲爱的
	$.LoadGoods("/goods/getGoodsByGoodsIds?goodsIds=2358626571,0817635071,8594079132,020153090402,7794057078,8817006319,020205060502,3646101937,020225091903,9510623408,020095100505,7102025327", $('.a3 ul'));
	//520  你还记得今天是结婚几周年吗？
	$.LoadGoods("/goods/getGoodsByGoodsIds?goodsIds=6238619688,4649887835,3310052762,9222429465,9109489677,2534758929,4780857792,7844467446,1180346625,5549360105,020153121001,8315605741", $('.a4 ul'));
});


jQuery.LoadGoods = function(url, $ul) {
    $.ajax({
        type: "post",
        url: url,
        dataType: "json",
        success: function(data) {
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                if (item.goodsState == 1) {
                    var li = '<li class="pr"><a target="_blank" href="/goods/detail/' + item.goodsId + '-100.html" title="' + item.goodsTitle + '"><img src="' + item.goodsImage + '" alt="' + item.goodsTitle + '" height="230" width="230" class="br"/><h3>' + item.goodsTitle + '</h3><span class="oh"><p><span class="yuan">￥</span>' + item.preSalePrice + '</p></span></a><div class="box" style="display:none"><span>已售<br />SOLD OUT</span></div></li>';
                } else {
                    var li = '<li class="pr"><a target="_blank" href="/goods/detail/' + item.goodsId + '-100.html" title="' + item.goodsTitle + '"><img src="' + item.goodsImage + '" alt="' + item.goodsTitle + '" height="230" width="230" class="br"/><h3>' + item.goodsTitle + '</h3><span class="oh"><p><span class="yuan">￥</span>' + item.preSalePrice + '</p></span></a><div class="box" style="display:block"><span>已售<br />SOLD OUT</span></div></li>';
                }
                $ul.append(li);
            }

        }
    });
}