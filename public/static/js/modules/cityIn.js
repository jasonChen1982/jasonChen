// JavaScript Document

define(function(require,exports,module){
	
	function cityIn(){
		setTimeout(function(){
		$("#conversationHead .conHead3").animate({right:-5,opacity:1},3500,"elasticOut",false);
		$("#conversationHead .conHead1").animate({top:-52,left:-58,opacity:1},800,"easeBoth",false);
		},900);
	}
	function cityOut(){
		$("#conversationHead .conHead3").css({right:200,opacity:0});
		$("#conversationHead .conHead1").css({top:-10,left:10,opacity:0});
	}
	exports.cityOut = cityOut;
	exports.cityIn = cityIn;
	
});