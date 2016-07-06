// JavaScript Document

define(function(require,exports,module){
	
	function init(hash){
		window.bBtn = false;
		window.bChange = false;
		$("#bodyer .sec").each(function(i) {
			if(this.dataset.hash == "#bbs" )
			{
				require("./bbsReply.js").offWindow();
				$("#bbs").animate({"opacity":0},1000,"easeIn",function(){
					$(this).css({"display" : "none"});
					$("#bodyer").css({"height":760});
					window.location.hash = hash;
					require('./show.js').show( hash );
				});
			};
		});
	
	
	}
	require('./bubble.js').clearTimer();
	exports.init = init;
	
});