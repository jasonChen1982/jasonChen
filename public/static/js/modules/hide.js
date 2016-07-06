// JavaScript Document
define(function(require,exports,module){
	
	function hide(curHash,nextHash){
		curHash = curHash||"#index";
		//alert(curHash+"  和  "+nextHash)
		if( curHash != nextHash ){
				//window.location.hash = hash;
				
				switch( curHash ){
					
					case '#index':
						require.async('./indexOut.js', function (ex){
            			ex.init(nextHash);});
					break;
					case '#example':
						require.async('./exampleOut.js', function (ex){
            			ex.init(nextHash);});
					break;
					case '#superioity':
						require.async('./superioityOut.js', function (ex){
            			ex.init(nextHash);});
					break;
					case '#conversation':
						require.async('./conversationOut.js', function (ex){
            			ex.init(nextHash);});
					break;
					case '#about':
						require.async('./aboutOut.js', function (ex){
            			ex.init(nextHash);});
					break;
					case '#bbs':
						require.async('./bbsOut.js', function (ex){
            			ex.init(nextHash);});
					break;
				}
		}
		
	}
	
	exports.hide = hide;
	
});