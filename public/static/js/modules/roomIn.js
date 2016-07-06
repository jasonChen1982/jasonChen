// JavaScript Document

define(function(require,exports,module){
	
	function roomIn(){
		var aRoom = $("#weizhi li");
		var sunxu = [5,4,6,3,2,1,0];
		var iNow = 0;
		var roomTimer = setInterval(function(){
			if(iNow<aRoom.length-1){
				require("./picMove.js").picMove(aRoom[sunxu[iNow]],{"transform":1},1000,"elasticOut",false);
				aRoom.eq(sunxu[iNow]).css("opacity","1");
			}
			iNow++;
			if(iNow>=aRoom.length-1){
				clearInterval(roomTimer)
			}
		},200);
		setTimeout(function(){
			$(aRoom.eq(aRoom.length-1)).animate({left:690,bottom:200,opacity:1},1000,"easeBoth",false);
			},800);
			

	}
	
	function roomOut(hash){
		$("#cityBgWrap").animate({bottom:-100,opacity:0},800,"easeIn",function(){
			$.setCss($("#weizhi li"),{$Transform:"scale(0.3)",opacity:0});
			$.setCss($("#weizhi .miaoyuqiqiu"),{$Transform:"scale(1)",opacity:0,left:650,bottom:100});
			
			$("#superioity").animate({opacity:0},800,"easeIn",function(){
				$("#superioity").css({"display" : "none"});
				require('./show.js').show( hash );
				window.location.hash = hash;
			});
		});
	}
	
	exports.roomIn = roomIn;
	exports.roomOut = roomOut;
	
});