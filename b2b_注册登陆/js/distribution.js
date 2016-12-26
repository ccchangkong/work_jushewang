
$(document).ready(function() {
	
	
var h = $(".brandsbox").height();
var mh = Math.ceil(h/238);
$(".brandsdetail").hide();
$(".brandup").css("display","none");
$(".brands").mouseenter(function(){
	$(this).css("border-left","1px solid #cdcdcd").css("border-right","1px solid #cdcdcd").removeClass("brandshide").addClass("brandsshow");
	$(".brandsdetail").show();
	if(mh>1){
	$(".branddown").css("display","block");
	}else{
		$(".branddown").css("display","none");
		}
	})
$(".brands").mouseleave(function(){
	$(this).css("border-left","1px solid #fff").css("border-right","1px solid #fff").removeClass("brandsshow").addClass(" brandshide");
	$(".brandsdetail").hide();
	})
$(".branddown").mouseenter(function(){
	$(".brandsbox").animate({marginTop:(mh-1)*-238},1000);
	$(".brandup").css("display","block");
	})
$(".brandup").mouseenter(function(){
	$(".brandsbox").animate({marginTop:(mh-2)*-238},1000);
	if($(".brandsbox").css("margin-top")=="0px"){$(".brandup").hide(); }
	})


	
$(".leftfilter a").click(function(){
	$(this).css("border-bottom-color","#fff").siblings().css("border-bottom-color","#414C5C");
	})	

$(".leftfilter a").click(function() {
        for( var i=0 ; i<$(".brandsbox li").length ; i++ )
	{
		if($(".brandsbox li").eq(i).text().substring(0,1)!=$(this).text() ){
			$(".brandsbox li").eq(i).hide()
			}else {$(".brandsbox li").eq(i).show()}
	}
    });
$(".leftfilter a.all").click(function(){
	$(".brandsbox li").show();
	})
$(".leftfilter a.digital").click(function(){
	for( var i=0 ; i<$(".brandsbox li").length ; i++ )
		{
			if(isNaN($(".brandsbox li").eq(i).text().substring(0,1))){
				$(".brandsbox li").eq(i).hide();
				}else {$(".brandsbox li").eq(i).show()}
		}
	})
	

$(".filter ul li:last").children("em").remove();
$(".filter ul li i").click(function(){
	$(this).parents("li").remove();
	$(".filter ul li:last").children("em").remove();
	})

$(".filter .delete").click(function(){
	$(".filter ul li").remove();
	})
	
$(".sequence>ul>li").click(function(){
	$(this).addClass("liclick").siblings().removeClass("liclick");
	})


$(".goodscontent .shares").hide();
$(".goodscontent .share").click(function(e1){
	e1.stopPropagation();
	if($(this).parent(".topbutton").siblings(".shares").is(":hidden")){
		$(this).parent(".topbutton").siblings(".shares").slideDown(200);
		}else{
			$(this).parent(".topbutton").siblings(".shares").slideUp(200);
			}})
$(document).click(function(){
	$(".goodscontent .shares").slideUp(200)
	})
$(".goodscontent .shares").click(function(e2){e2.stopPropagation()})


$(".sequence_fineness, .sequence_price").hide();
	$(".sequence>ul>li").eq(2).mouseenter(function(){
		$(".sequence_fineness").show();
		})
	$(".sequence_fineness").mouseleave(function(){
		$(this).hide();
		})
	$(".sequence>ul>li").eq(3).mouseenter(function(){
		$(".sequence_price").show();
		})
	$(".sequence_price").mouseleave(function(){
		$(this).hide();
	})
$(".sequence_fineness li").click(function(){
	$(".sequence>ul>li").eq(2).text($(this).text()).addClass("liclick").siblings().removeClass("liclick");
	})
$(".sequence_price li").click(function(){
	$(".sequence>ul>li").eq(3).text($(this).text()).addClass("liclick").siblings().removeClass("liclick");
	})


    // 图片左右滚动
    var count = $(".picturesview li").length - 4;
    // 显示 4 个 li标签内容 
    var interval = 210;
    var curIndex = 0;

	$('.scrollbutton').click(function() {
		if ($(this).hasClass('disabled')) {
			return false;
		}
	
		if ($(this).hasClass('smallImgUp')) {
			--curIndex;
		} else {
			++curIndex;
		}
	console.log(curIndex);
		$('.scrollbutton').removeClass('disabled');
		if (curIndex == 0) {
			$('.smallImgUp').addClass('disabled');
		}
		if (curIndex == count) {
			$('.smallImgDown').addClass('disabled');
		}
		$(".picturesview ul").stop(false, true).animate({
			"marginLeft": -curIndex * interval + "px"
		},
		600);
	});


$(".goodspics").hide();
	$(".veiwdetail").mouseenter(function(){
		$(this).parents().siblings(".goodspics").show();
		$(".shares").hide();
		})
	$(".goodspics").mouseleave(function(){
		$(this).hide();
	})
		

	

});
