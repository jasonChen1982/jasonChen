// JavaScript Document

define(function(require,exports,module){
	
	function init(){
		$('html,body').animate({scrollTop: '0px'}, 400);
		$("#superioity").animate({"opacity":1},500,"easeIn",function(){
			require("./cloudIn.js").cloudIn();
			require("./cloudIn.js").cloudOver();
			require("./roomIn.js").roomIn();
			window.bChange = true;
			window.bBtn = true;
		});
	}
	exports.init = init;
	
});