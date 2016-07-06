// JavaScript Document

define(function(require,exports,module){
	
	function banner(){
		var iNow=1;
		var oldiNow = 0;
		window.aTimer[2] = setInterval(picShow,7000);
		function picShow(){
			$("#pic li").eq(oldiNow).removeClass(["active"]).animate({"opacity":0},800,"easeOut",false);
			$("#pic li").eq(iNow).addClass("active").animate({"opacity":1},500,"easeOut",false);
			oldiNow = iNow;
			iNow++;
			if(iNow>=$("#pic li").length){iNow=0;};
		}
		
		$("#pic").on("mouseover",function (){clearInterval(window.aTimer[2]);});
		$("#pic").on("mouseout",function (){window.aTimer[2] = setInterval(picShow,7000);});
		
		$("#sunLogo").css({"opacity":1})
		
	}
	function bannerOut(){
		clearInterval(window.aTimer[2]);
	}

	exports.banner = banner;
	exports.bannerOut = bannerOut;
	
});