// JavaScript Document

define(function(require,exports,module){
	
	function init(hash){
		window.bBtn = false;
		window.bChange = false;
		$("#bodyer .sec").each(function(i) {
			if(this.dataset.hash == "#superioity" )
			{
				require("./cloudIn.js").clearOver();
				require('./cloudBack.js').cloudBack(hash);
			};
		});
	
	
	}
	
	exports.init = init;
	
});