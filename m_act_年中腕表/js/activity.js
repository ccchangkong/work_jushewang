/*加载商品*/
$(document).ready(function() {
	//百达翡丽
	$.LoadGoods("/goods/getGoodsByGoodsIds?goodsIds=4723451863,2827939890,10094102201,2898644416", $('.a1 ul'));
	//卡地亚
	$.LoadGoods("/goods/getGoodsByGoodsIds?goodsIds=7180828384,9949651924,010085090505,010075090201", $('.a2 ul'));
	//劳力士
	$.LoadGoods("/goods/getGoodsByGoodsIds?goodsIds=3124676465,2140741079,5331822188,0926360629", $('.a3 ul'));
	//欧米茄
	$.LoadGoods("/goods/getGoodsByGoodsIds?goodsIds=7393315360,1775175106,8463087070,8973883685", $('.a4 ul'));
	//	帝陀
	$.LoadGoods("/goods/getGoodsByGoodsIds?goodsIds=010045091201,8385524904,1422345231,7476244663", $('.a5 ul'));
	//	雷达
	$.LoadGoods("/goods/getGoodsByGoodsIds?goodsIds=6493272077,6861486376,2393139555,6711895782", $('.a6 ul'));

	//	浪琴
	$.LoadGoods("/goods/getGoodsByGoodsIds?goodsIds=5611173782,9091620356,5919274373,010445100501", $('.a7 ul'));

	//	美度
	$.LoadGoods("/goods/getGoodsByGoodsIds?goodsIds=5971848665,3832278294,010154010402,010285090607", $('.a8 ul'));

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
					var li = '<li class="pr col-3"><div class="w"><a href="/goods/detail/' + item.goodsId + '-100.html" title="' + item.goodsTitle + '"><img src="' + item.goodsImage + '" alt="' + item.goodsTitle + '" height="230" width="230" class="br"/><h3>' + item.goodsTitle + '</h3><span class="oh"><p><span class="yuan">RMB:&nbsp;</span>' + item.preSalePrice + '<span class="yuan">&nbsp;元</span></p></a><div class="box" style="display:none"><span><p>已售</p><br />SOLD OUT</span></div></div></li>';
				} else {
					var li = '<li class="pr col-3"><div class="w"><a href="/goods/detail/' + item.goodsId + '-100.html" title="' + item.goodsTitle + '"><img src="' + item.goodsImage + '" alt="' + item.goodsTitle + '" height="230" width="230" class="br"/><h3>' + item.goodsTitle + '</h3><span class="oh"><p><span class="yuan">RMB:&nbsp;</span>' + item.preSalePrice + '<span class="yuan">&nbsp;元</span></p></a><div class="box" style="display:block"><span><p>已售</p><br />SOLD OUT</span></div></div></li>';
				}
				$ul.append(li);
			}

		}
	});
}