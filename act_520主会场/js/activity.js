/*加载商品*/
$(document).ready(function() {
    //包
    $.LoadGoods("/goods/getGoodsByGoodsIds?goodsIds=7811236978,8487168919,020125100901,020045091908,7310693826,020435102201,5283634928,0696949340,7373252289,5762967651,8552441017,8978592501", $('.a1 ul'));
    //表
    $.LoadGoods("/goods/getGoodsByGoodsIds?goodsIds=1467578655,2356044065,2424631221,0240033530,4275769321,2391640039,1952130188,9271464124,2879557910,8128509882,5926131093,0244574290", $('.a2 ul'));
	//钻
	$.LoadGoods("/goods/getGoodsByGoodsIds?goodsIds=7244625268,2848851949,3075264780,8059733089,3383561781,7395623817,2222080871,30094113002,030075083101,030045091202,4063969991,030225091601", $('.a3 ul'));
	//饰品
	$.LoadGoods("/goods/getGoodsByGoodsIds?goodsIds=1301364336,3709531358,4047117846,2333438218,0260833909,8293117418,7949753046,6077108530,9919662713,4901684137,2072219031,0859862304", $('.a4 ul'));
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
                    var li = '<li class="pr"><a target="_blank" href="/goods/detail/' + item.goodsId + '-100.html" title="' + item.goodsTitle + '"><img src="' + item.goodsImage + '" alt="' + item.goodsTitle + '" height="230" width="230" class="br"/><h3>' + item.goodsTitle + '</h3><span class="oh"><p><span class="yuan">RMB:&nbsp;</span>' + item.preSalePrice + '<span class="yuan">.00</span></p></span></a><div class="box" style="display:none"><span><p>已售</p><br />SOLD OUT</span></div></li>';
                } else {
                    var li = '<li class="pr"><a target="_blank" href="/goods/detail/' + item.goodsId + '-100.html" title="' + item.goodsTitle + '"><img src="' + item.goodsImage + '" alt="' + item.goodsTitle + '" height="230" width="230" class="br"/><h3>' + item.goodsTitle + '</h3><span class="oh"><p><span class="yuan">RMB:&nbsp;</span>' + item.preSalePrice + '<span class="yuan">.00</span></p></span></a><div class="box" style="display:block"><span><p>已售</p><br />SOLD OUT</span></div></li>';
                }
                $ul.append(li);
            }

        }
    });
}
