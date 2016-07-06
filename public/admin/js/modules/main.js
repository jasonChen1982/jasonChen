// JavaScript Document
define(function(require,exports,module){
	require('./show.js').show(window.location.hash);
	/*nav*/
	window.bChange = true;
	$('.menu_unit').click(function(){
		if( this.dataset.hash!=undefined && bChange )
		{
			window.bBtn = false;
			require('./hide.js').hide(window.location.hash,this.dataset.hash);
		}
		
	});
	/*nav*/


	switchClick();

	/*history*/
	window.bBtn = true;
	window.onhashchange = function(){
		switchClick();
		if(window.bBtn){
			window.location.reload();
		}
	};
	/*history*/

	function switchClick(){
		$('.menu_unit').each(function(index, element) {
			if( this.dataset.hash == ( window.location.hash || "#index" )){
				$(this).addClass("active");
			}else{
            	$(this).removeClass("active");
			}
        });
	}
});
