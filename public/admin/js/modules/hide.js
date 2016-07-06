// JavaScript Document
define(function(require,exports,module){
	
	function hide(curHash,nextHash){
		curHash = curHash||"#index";
		if( curHash != nextHash ){
			switch( curHash ){
				
				case '#index':
					require.async('./indexOut.js',function(ex){
						ex.init();
					})
				break;
				case '#example':
					require.async('./exampleOut.js',function(ex){
						ex.init();
					})
				break;
				case '#superioity':
					// require.async('./superioityOut.js', function (ex){
	    //      		ex.init(nextHash);
	    //     		})
				break;
				case '#conversation':
					// require.async('./conversationOut.js', function (ex){
	    //     			ex.init(nextHash);
	    //     		})
				break;
				case '#about':
					require.async('./aboutOut.js',function(ex){
						ex.init();
					})
				break;
				case '#bbs':
					require.async('./bbsOut.js',function(ex){
						ex.init();
					})
				break;
				case '#register':
					require.async('./registerOut.js',function(ex){
						ex.init();
					})
				break;
			}
		require('./show.js').show( nextHash );
		}
	}
	
	exports.hide = hide;
	
});