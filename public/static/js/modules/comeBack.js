// JavaScript Document

define(function(require,exports,module){
	
	function comeBack(hash){
		
		//$("#aboutUs li").css({"left":-800,"opacity":0});
		
		var iNow = 0;
		var oTimer = null;
		oTimer = setInterval(function (){
			if( $("#aboutUs li").eq(iNow) )$("#aboutUs li").eq(iNow).index = iNow;
			$("#aboutUs li").eq(iNow).animate({"bottom":-500,"opacity":0},700,"backIn",function(){
				$(this).css({"left":-800,"bottom":0});
				if(this.index >= $("#aboutUs li").length-1)clearTime();
			});
			iNow++;
		},200)
		
		function clearTime(){
			clearInterval(oTimer);
				
			require('./hoverFold.js').hoverFoldOut();
				
			$("#about").animate({"opacity":0},1000,"easeIn",function(){
				$(this).css({"display" : "none"});
				window.location.hash = hash;
				require('./show.js').show( hash );
			});
		}
		
	}

	exports.comeBack = comeBack;
	
});