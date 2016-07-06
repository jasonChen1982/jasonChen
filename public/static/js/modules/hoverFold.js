// JavaScript Document

define(function(require,exports,module){
	var cachImg = [];
	var bFirst = true;
	( function( $ ) {
		
		$.fn.hoverfold = function( args ) {
	
			this.each( function(index) {
			
				$( this ).children( '.view' ).each( function() {
				
					var $item 	= $( this ),
						struct	= '<div class="slice s1">';
							struct	+='<div class="slice s2">';
								struct	+='<div class="slice s3">';
									struct	+='<div class="slice s4">';
										struct	+='<div class="slice s5">';
										struct	+='</div>';
									struct	+='</div>';
								struct	+='</div>';
							struct	+='</div>';
						struct	+='</div>';
						cachImg.push( $item.children( 'img' ).attr( 'src' ) );
					var $struct = $( struct );
					
					$item.find( 'img' ).remove().end().append( $struct ).find( 'div.slice' ).css( 'background-image', 'url(' + cachImg[index] + ')' ).prepend( $( '<span class="overlay" ></span>' ) );
					
				} );
				
			});
	
		};
	
	} )( jQuery );
	
	function hoverFold(){
		
		var aFlower = $("#flower li");
		var aSunxu = [0,1,2,3,4];
		aSunxu.sort(function (a,b){
			a=0.5;
			b=Math.random();
			return a-b;
			});
		
		var iNow = 0;
		var flowerTimer = setInterval(function(){
			if(iNow<aFlower.length){
				require("./picMove.js").picMove(aFlower[aSunxu[iNow]],{"transform":1},1000,"elasticOut",false);
				aFlower.eq(aSunxu[iNow]).css("opacity","1");
			}
			iNow++;
			if(iNow>=aFlower.length){
				clearInterval(flowerTimer)
			}

		},200);
		
		if(bFirst)$( '#grid .gridShadow' ).hoverfold( cachImg );
		bFirst = false;
		

	}
	function hoverFoldOut(){
			$.setCss($("#flower li"),{$Transform:"scale(0.3)",opacity:0});
	}

	exports.hoverFoldOut = hoverFoldOut;
	exports.hoverFold = hoverFold;
	
});