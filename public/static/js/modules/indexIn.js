// JavaScript Document

define(function(require,exports,module){
	
	function init(){
		$("#bodyer").css({"height":760});
		$('html,body').animate({scrollTop: '0px'}, 400)
		require('./threeD.js').threeD();
		$("#index").animate({"opacity":1},700,"easeIn",function(){
			$("#news").css({"opacity":1,"bottom":30});
			require('./banner.js').banner();
			window.bChange = true;
			window.bBtn = true;
		});
	}
	
	exports.init = init;
	
});