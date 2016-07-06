// JavaScript Document
define(function(require,exports,module){
	
	function show(curHash){
		
		var firstHash = curHash || "#index";//window.location.hash.substring(1)
				
			 switch( firstHash ){
				
				case '#index':
					require.async('./indexIn.js',function(ex){
						$("#index").css("display","block");
						ex.init();
						})
				break;
				case '#example':
					require.async("../../css/example.css",function(){
						require.async('./exampleIn.js',function(ex){
							ex.init();})
						$("#bodyer").css({height:770});
						$("#example").css("display","block");
						});
				break;
				case '#superioity':
					require.async("../../css/superioity.css",function(){
						require.async('./superioityIn.js', function (ex){
            				ex.init();});
						$("#superioity").css("display","block");
						$("#bodyer").css({height:760});
						});
				break;
				case '#conversation':
					require.async("../../css/conversation.css",function(){
						require.async('./conversationIn.js', function (ex){
							ex.init();});
						$("#bodyer").css({"height":"auto"});
						$("#conversation").css("display","block");
						});
				break;
				case '#about':
					require.async("../../css/about.css",function(){
						require.async('./aboutIn.js', function (ex){
							ex.init();});
						$("#bodyer").css({"height":650});
						$("#about").css("display","block");
						});
				break;
				case '#bbs':
					require.async("../../css/bbs.css",function(){
						require.async('./bbsIn.js', function (ex){
							ex.init();});
						$("#bodyer").css({"height":"auto"});
						$("#bbs").css("display","block");
						});
				break;
			}
				
		
	}
	
	exports.show = show;
	
});