// JavaScript Document
define(function(require,exports,module){
	
	function init(hash){
		window.bBtn = false;
		window.bChange = false;
		$("#bodyer .sec").each(function(i) {
			if(this.dataset.hash == "#about" )
			{
				require('./comeBack.js').comeBack(hash);
				/*
				$("#about").animate({"opacity":0},1000,"easeIn",function(){
					$(this).css({"display" : "none"});
					window.location.hash = hash;
				require('comeBack.js').comeBack();
					require('show.js').show( hash );
					
				});
				*/
			};
		});
	
	
	}
	
	exports.init = init;
	
});