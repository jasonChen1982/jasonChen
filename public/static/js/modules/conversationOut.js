// JavaScript Document

define(function(require,exports,module){
	
	function init(hash){
		window.bBtn = false;
		window.bChange = false;
		$("#bodyer .sec").each(function(i) {
			if(this.dataset.hash == "#conversation" )
			{
				$("#conversation").animate({"opacity":0},1000,"easeIn",function(){
					$(this).css({"display" : "none"});
					$("#bodyer").css({"height":760});
					$("#bodyer").removeClass("bodyer");
					window.location.hash = hash;
					require('./cityIn.js').cityOut();
					require('./returnTop.js').returnOut();
					require('./show.js').show( hash );
				});
			};
		});
	
	
	}
	
	exports.init = init;
	
});