// JavaScript Document
define(function(require,exports,module){
	
	function show(curHash){
		
		var firstHash = curHash || "#index";//window.location.hash.substring(1)
				
			 switch( firstHash ){
				
				case '#index':
					require.async('./indexIn.js',function(ex){
						ex.init();
					})
				break;
				case '#example':
					require.async('./exampleIn.js',function(ex){
						ex.init();
					})
				break;
				case '#superioity':
					// require.async('./superioityIn.js',function(ex){
					// 	ex.init();
					// })
				break;
				case '#conversation':
					// require.async('./conversationIn.js',function(ex){
					// 	ex.init();
					// })
				break;
				case '#about':
					require.async('./aboutIn.js',function(ex){
						ex.init();
					})
				break;
				case '#bbs':
					require.async('./bbsIn.js',function(ex){
						ex.init();
					})
				break;
				case '#register':
					require.async('./registerIn.js',function(ex){
						ex.init();
					})
				break;
			}
		window.location.hash = firstHash;
		setTimeout(function(){
			window.bBtn = true;
		},200)
		
	}
	
	exports.show = show;
	
});