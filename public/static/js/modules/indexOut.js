// JavaScript Document

define(function(require,exports,module){
	
	function init(hash){
		window.bBtn = false;
		window.bChange = false;
		require('./banner.js').bannerOut();
		$("#bodyer .sec").each(function(i) {
			if(this.dataset.hash == "#index" )
			{
				$("#index").animate({"opacity":0},1000,"easeIn",function(){
					$(this).css({"display" : "none"});
					window.location.hash = hash;
					require('./show.js').show( hash );
				});
			};
		});
	
	
	}
	
	exports.init = init;
	
});