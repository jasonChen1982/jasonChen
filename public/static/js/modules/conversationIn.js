// JavaScript Document

define(function(require,exports,module){
	
	function init(){
		$('html,body').animate({scrollTop: '0px'}, 400)
		$("#conversation").animate({"opacity":1},1000,"easeIn",function(){
			$("#bodyer").addClass("bodyer");
			$("#conversationHead .conHead2").addClass("conHead2Act");
			require("./cityIn.js").cityIn();
			require("./returnTop.js").returnTop();
			window.bChange = true;
			window.bBtn = true;
		});
	}
	
	exports.init = init;
	
});