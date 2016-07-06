// JavaScript Document
define(function(require,exports,module){
	
	function init(hash){
		$("#MNGbbs").show();
		$("#replyBlank").hide();
		$("#MessageList").removeClass("messageL").addClass("messageC");
		$('html,body').animate({scrollTop: '0px'}, 400)
		$("#MNGbbs").animate({"opacity":1},1000,"easeIn",function(){
			require("./bbsReply.js").getMessage(0);
		});
	}
	
	exports.init = init;
	
});