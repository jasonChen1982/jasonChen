// JavaScript Document

define(function(require,exports,module){
	
	function init(){
		$('html,body').animate({scrollTop: '110px'}, 400)
		$("#example").animate({"opacity":1},1000,"easeIn",function(){
			require("./bubble.js").createBubble();
			window.bChange = true;
			window.bBtn = true;
		});
	}
	
	require("./movie.js");
	require("./exampleGetData.js").getExamplesData();
	exports.init = init;
	
});