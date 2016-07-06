// JavaScript Document

define(function(require,exports,module){
	
	function init(){
		$('html,body').animate({scrollTop: '0px'}, 400)
		$("#about").animate({"opacity":1},1000,"easeIn",function(){
			require("./aboutPhoto.js").onOver();
			require("./hoverFold.js").hoverFold();
			
			window.bChange = true;
			window.bBtn = true;
		});
	}
	exports.init = init;
	
});