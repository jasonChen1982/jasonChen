// JavaScript Document

define(function(require,exports,module){
	
	function init(){
		$('html,body').animate({scrollTop: '0px'}, 400)
		$("#bbs").animate({"opacity":1},1000,"easeIn",function(){
			require("./bbsReply.js").getMessage(0);
			window.bChange = true;
			window.bBtn = true;
		});
	}
	
	exports.init = init;
	
});