// JavaScript Document

define(function(require,exports,module){
	
	function cloudBack(hash){
		$("#cloud li").eq(0).animate({opacity:0},600,"easeIn",false);
		$("#faceCloud").animate({opacity:0},600,"easeIn",false);
		var aCloud = [5,6,4,7];
		var aCloudH = [50,110,60,90];
		var i=0;
		var cloudTime = setInterval(function (){
				var This = $("#cloud li").eq(aCloud[i]);
					$("#cloud li").eq(aCloud[i]).animate({opacity:0},1000,"easeIn",false);
					$(This).find(".tiancong").animate({height:aCloudH[i],opacity:0},1000,"backIn",false);
					$(This).find(".cloudBg").animate({opacity:0},2000,"easeIn",false);
					i++;
					if(i>aCloudH.length)
					{
						clearInterval(cloudTime);
						require("./roomIn.js").roomOut(hash);
					}
			},250);	
			
			
	}

	exports.cloudBack = cloudBack;
	
});