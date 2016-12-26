// JavaScript Document
/*登录弹窗*/
function portalAlert(content) {
    $("body").append('<div id="swapT" class="swap"><div class="popup"><div class="product_recommend_title grey_bbs"><em class="grey">' + content + '</em> <div class="switch"></div></div></div></div></div><div id="maskT" class="mask"></div>');
    $("#maskT .mask").height($(document).height()).width($(document).width());
    $("#swapT .popup").show();
}
/*微信分享弹窗*/
function portalAlertForImage(content) {
    $("body").append('<div id="mas" class="mask pa"></div><div id="swa" class="swap"><div class="popup pa white_b"><div class="product_recommend_title grey_bbs wechat pl20"><em class="grey dib">分享到微信</em><div class="switch pa"></div></div><div class="share tac ptb10"><p>打开微信"扫一扫",打开网页后点击屏幕右上角分享按钮</p><img src=' + content + ' width="200px" height="200px" /></div></div></div></div>');
    $("#mas").height($(document).height()).width($(document).width());
    $("#swa").show();
    /*$("#swa .popup").show();*/
}
/*弹窗关闭*/
$(document).ready(function() {
    $("#swapT .switch").live('click',
    function() {
        $("#maskT").remove();
        $("#swapT .popup").remove();
    });
    $("#swa .switch").live('click',
    function() {
        $("#mas").remove();
        /* $("#swa .popup").remove();*/
        $("#swa").remove();
    });
}); 
   
/*列表页筛选折叠*/
$(document).ready(function(){
  $("#evenmore").click(function(){
    $("span.even").removeClass("even");
  });
});

/*输入框焦点事件*/
$(document).ready(function() {
    $("#goodsTital").focus(function() {
        $(".hotwords").css("display", "none");
    });
    $("#goodsTital").blur(function() {
        $(".hotwords").css("display", "block");
    });
});
/*我的预约页面查看地址*/
$(document).ready(function() {
    $(".dropdown_title a").mouseover(function() {
        $(this).next(".dropdown_content").slideDown(200);
    });
    $(".dropdown_title").mouseleave(function() {
        $(this).children(".dropdown_content").slideUp(200);
    });
});
/*切换*/
$(document).ready(function() {
    $(".tab_title a").mouseover(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
        $(".tab_content").children("div").eq($(".tab_title a").index(this)).show().siblings().hide();
    });
});
/*导航切换*/
/*$(document).ready(function() {
    $(".navitems>li:gt(0)").hover(function() {
        $(this).children("a").addClass("selected grey");
    },function(){
		$(this).children("a").removeClass("selected grey");
	});
});*/
/*实体店分布*/
$(document).ready(function() {
    $(".store_location").hover(function() {
        $(".store_location .city").stop().show().animate({
            height: '310px'
        },
        'slow');
        $(".store_location").children("div").addClass("white_bbs").removeClass("grey");
		$(".areaList .area:eq(0)").children("a").addClass("violet_b white");
		$(".storeList ul:gt(0)").hide();
    },
    function() {
        $(".store_location .city").stop().animate({
            height: '0px'
        },
        'slow',
        function() {
            $(this).hide();
            $(".store_location").children("div").removeClass("white_bbs").addClass("grey");
        });
		$(".areaList .area").children("a").removeClass("violet_b white");
		$(".storeList ul:eq(0)").show();

    });
});
//实体店地区切换
$(document).ready(function() {
	$(".areaList .area").live("mouseenter",function() {
        $(this).children("a").addClass("violet_b white");
		$(this).siblings().children("a").removeClass("violet_b white");
		$(".storeList ul").eq($("dd.areaList .area").index(this)).show().siblings().hide();
    });
});
/*商品列表*/
$(document).ready(function() {
    $(".navitems a.goods").mouseenter(function() {
        $(".navitems li ul.list").stop().show().animate({
            width: "392px"
        },
        500);
    });
    $(".navitems a.goods").parent().mouseleave(function() {
        $(".navitems li ul.list").stop().animate({
            width: "0px"
        },
        500,
        function() {
            $(".navitems li ul.list").hide()
        });
    });
});
//$(document).ready(function() {
//    $(".store_location").hover(function() {
//        $(".store_location .city").stop(false,true).slideDown("slow");
//    },
//    function() {
//        $(".store_location .city").stop(false,true).slideUp("slow");
//    });
//});
/*首页banner*/
/*$(function(){
	var numpic = $('#slides li').size()-1;
	var nownow = 0;
	var inout = 0;
	var TT = 0;
	var SPEED = 5000;
	$('#slides li').eq(0).siblings('li').css({'display':'none'});
	var ulstart = '<ul id="pagination">',
		ulcontent = '',
		ulend = '</ul>';
	ADDLI();
	var pagination = $('#pagination li');
	var paginationwidth = $('#pagination').width();
	$('#pagination').css('margin-left',(222))	
	pagination.eq(0).addClass('current')		
	function ADDLI(){
		var lilicount = numpic + 1;
		for(var i = 0; i <= numpic; i++){
			ulcontent += '<li>' + '<a>' + (i+1) + '</a>' + '</li>';
		}
		$('#slides').after(ulstart + ulcontent + ulend);	
	}
	pagination.on('mouseover',DOTCHANGE)
	function DOTCHANGE(){		
		var changenow = $(this).index();		
		$('#slides li').eq(nownow).css('z-index','900');
		$('#slides li').eq(changenow).css({'z-index':'800'}).show();
		pagination.eq(changenow).addClass('current').siblings('li').removeClass('current');
		$('#slides li').eq(nownow).fadeOut(400,function(){$('#slides li').eq(changenow).fadeIn(500);});
		nownow = changenow;
	}
	pagination.mouseenter(function(){
		inout = 1;
	})
	pagination.mouseleave(function(){
		inout = 0;
	})
	function GOGO(){	
		var NN = nownow+1;
		if( inout == 1 ){
			} else {
			if(nownow < numpic){
			$('#slides li').eq(nownow).css('z-index','900');
			$('#slides li').eq(NN).css({'z-index':'800'}).show();
			pagination.eq(NN).addClass('current').siblings('li').removeClass('current');
			$('#slides li').eq(nownow).fadeOut(400,function(){$('#slides li').eq(NN).fadeIn(500);});
			nownow += 1;
		}else{
			NN = 0;
			$('#slides li').eq(nownow).css('z-index','900');
			$('#slides li').eq(NN).stop(true,true).css({'z-index':'800'}).show();
			$('#slides li').eq(nownow).fadeOut(400,function(){$('#slides li').eq(0).fadeIn(500);});
			pagination.eq(NN).addClass('current').siblings('li').removeClass('current');
			nownow=0;
			}
		}
		TT = setTimeout(GOGO, SPEED);
	}
	TT = setTimeout(GOGO, SPEED); 
})*/
/*首页宫格banner*/
/*$(function ($) {
    if ($(".slide-pic").length > 0) {
        var defaultOpts = { interval: 5000, fadeInTime: 300, fadeOutTime: 200 };
        var _titles = $("ul.slide-txt li");
        var _titles_bg = $("ul.op li");
        var _bodies = $("ul.slide-pic li");
        var _count = _titles.length;
        var _current = 0;
        var _intervalID = null;
        var stop = function () { window.clearInterval(_intervalID); };
        var slide = function (opts) {
            if (opts) {
                _current = opts.current || 0;
            } else {
                _current = (_current >= (_count - 1)) ? 0 : (++_current);
            };
            _bodies.filter(":visible").fadeOut(defaultOpts.fadeOutTime, function () {
                _bodies.eq(_current).fadeIn(defaultOpts.fadeInTime);
                _bodies.removeClass("cur").eq(_current).addClass("cur");
            });
            _titles.removeClass("cur").eq(_current).addClass("cur");
            _titles_bg.removeClass("cur").eq(_current).addClass("cur");
        };
        var go = function () {
            stop();
            _intervalID = window.setInterval(function () { slide(); }, defaultOpts.interval);
        };
        var itemMouseOver = function (target, items) {
            stop();
            var i = $.inArray(target, items);
            slide({ current: i });
        };
        _titles.hover(function () { if ($(this).attr('class') != 'cur') { itemMouseOver(this, _titles); } else { stop(); } }, go);
        _bodies.hover(stop, go);
        go();
    }
});*/

/*实体店加载*/
$(document).ready(function() {
	// 查询所有的分公司城市列表 -- 分公司
    $.ajax({
        type: "post",
        url: "/filiale/getAreaList",
        dataType: "json",
        success: function(data) {
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                var list = data[i].provList;
                var lis = "";
                for (var x = 0; x < list.length; x++) {
                    var prov = list[x];
                    var filiale = prov.filiales;
                    var divs = "";
                    for (var y = 0; y < filiale.length; y++) {  //<c:choose><c:when test="${filiale.locationProvince == '11' or filiale.locationProvince == '12' or filiale.locationProvince == '31' or filiale.locationProvince == '50'}">${filiale.locationProvince }</c:when><c:otherwise>${filiale.locationCity }</c:otherwise></c:choose>
                        var fili = filiale[y];
                        var locationCity =  fili.locationCity;
                        if(fili.locationProvince == '11' || fili.locationProvince == '12' || fili.locationProvince == '31' || fili.locationProvince == '50'){
                        	locationCity = fili.locationProvince;
                        }
                        divs += '<a href="/goods/listallgoods?url=/goods/list/0-0-0-0-0-0-0-0-0-' + locationCity + '-0-0-0.html" class="tac dib">' + fili.name.replace("北京分公司（一店）", "崇文门").replace("北京分公司（二店）", "阜成门").replace("上海分公司（一店）", "闸北").replace("上海分公司（二店）", "徐汇").replace("加盟店", "").replace("分公司", "") + '</a>';
                    }
                    lis += '<li class="oh tal"><div class="province dib"><a href="/filiale/getProv?pcode=' + prov.code + '" class="violet_b white db tac">' + prov.name.replace("维吾尔自治区", "").replace("自治区", "") + '</a></div><div class="store dib">' + divs + '</div></li>';
                }
				var uls = '<ul class="plr15 cursor">' + lis + '</ul>';
				$("dl.city dd.storeList").append(uls);
                var dds = '<div class="area fl tac cursor"><a class="grey db" href="/filiale/getProvList?dcode=' + item.code + '">' + item.name + '</a></div>';
                $("dl.city dd.areaList").append(dds);
            }
        }
    });
});

/*服务承诺*/
(function($){
$.fn.extend({
        Scroll:function(opt,callback){
                //参数初始化
                if(!opt) var opt={};
                var _btnUp = $("#"+ opt.up);//Shawphy:向上按钮
                var _btnDown = $("#"+ opt.down);//Shawphy:向下按钮
                var timerID;
                var _this=this.eq(0).find("ul:first");
                var     lineH=_this.find("li:first").height(), //获取行高
                        line=opt.line?parseInt(opt.line,10):parseInt(this.height()/lineH,10), //每次滚动的行数，默认为一屏，即父容器高度
                        speed=opt.speed?parseInt(opt.speed,10):500; //卷动速度，数值越大，速度越慢（毫秒）
                        timer=opt.timer //?parseInt(opt.timer,10):3000; //滚动的时间间隔（毫秒）
                if(line==0) line=1;
                var upHeight=0-line*lineH;
                //滚动函数
                var scrollUp=function(){
                        _btnUp.unbind("click",scrollUp); //Shawphy:取消向上按钮的函数绑定
                        _this.animate({
                                marginTop:upHeight
                        },speed,function(){
                                for(i=1;i<=line;i++){
                                        _this.find("li:first").appendTo(_this);
                                }
                                _this.css({marginTop:0});
                                _btnUp.bind("click",scrollUp); //Shawphy:绑定向上按钮的点击事件
                        });

                }
                //Shawphy:向下翻页函数
                var scrollDown=function(){
                        _btnDown.unbind("click",scrollDown);
                        for(i=1;i<=line;i++){
                                _this.find("li:last").show().prependTo(_this);
                        }
                        _this.css({marginTop:upHeight});
                        _this.animate({
                                marginTop:0
                        },speed,function(){
                                _btnDown.bind("click",scrollDown);
                        });
                }
               //Shawphy:自动播放
                var autoPlay = function(){
                        if(timer)timerID = window.setInterval(scrollUp,timer);
                };
                var autoStop = function(){
                        if(timer)window.clearInterval(timerID);
                };
                 //鼠标事件绑定
                _this.hover(autoStop,autoPlay).mouseout();
                _btnUp.css("cursor","pointer").click( scrollUp ).hover(autoStop,autoPlay);//Shawphy:向上向下鼠标事件绑定
                _btnDown.css("cursor","pointer").click( scrollDown ).hover(autoStop,autoPlay);

        }       
})
})(jQuery);
$(document).ready(function(){
        $(".promise .promiseSwap").Scroll({line:1,speed:500,timer:2000,up:".promise a.next",down:".promise a.prev"});
});
/*流量统计代码*/
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?f28b42a2da5528708257ed0e5f8d23ae";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

/*function listGoods(url) {
	$.ajax({
		type: "post",
		url: proj_path+"/goods/listallgoods?url="+url, 
		dataType:"json",
		success: function(json) {
		}
	});
}*/