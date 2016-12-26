/*加载商品*/
$(document).ready(function() {
    //墨镜
    $.LoadGoods("/goods/getGoodsByGoodsIds?goodsIds=4751996599,1123432203,9886088165,1711407164", $('.a1 ul'));
    //丝巾
    $.LoadGoods("/goods/getGoodsByGoodsIds?goodsIds=6321994815,1301364336,7187179895,8716717392", $('.a2 ul'));
    //首饰
    $.LoadGoods("/goods/getGoodsByGoodsIds?goodsIds=1545893146,8153864710,0304991770,3717397915", $('.a3 ul'));
    //鞋子
    $.LoadGoods("/goods/getGoodsByGoodsIds?goodsIds=0058397078,9140894864,4583222949,1744033064", $('.a4 ul'));
    //	钢笔
    $.LoadGoods("/goods/getGoodsByGoodsIds?goodsIds=5286220850,2072219031,9850600231,0171451400", $('.a5 ul'));
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
                    var li = '<li class="pr col-3"><div class="w"><a target="_blank" href="/goods/detail/' + item.goodsId + '-100.html" title="' + item.goodsTitle + '"><img src="' + item.goodsImage + '" alt="' + item.goodsTitle + '" height="220" width="220" class="br"/><h3>' + item.goodsTitle + '</h3><span class="oh"><p><span class="yuan">RMB:&nbsp;</span>' + item.preSalePrice + '<span class="yuan">&nbsp;元</span></p></span></a><div class="box" style="display:none"><span><p>已售</p><br />SOLD OUT</span></div></div></li>';
                } else {
                    var li = '<li class="pr col-3"><div class="w"><a target="_blank" href="/goods/detail/' + item.goodsId + '-100.html" title="' + item.goodsTitle + '"><img src="' + item.goodsImage + '" alt="' + item.goodsTitle + '" height="220" width="220" class="br"/><h3>' + item.goodsTitle + '</h3><span class="oh"><p><span class="yuan">RMB:&nbsp;</span>' + item.preSalePrice + '<span class="yuan">&nbsp;元</span></p></span></a><div class="box" style="display:block"><span><p>已售</p><br />SOLD OUT</span></div></div></li>';
                }
                $ul.append(li);
            }

        }
    });
}


