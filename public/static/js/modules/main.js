// JavaScript Document
define(function(require,exports,module){
	
	$(function(){
		$("#header").animate({opacity:1},600,"easeOut",function (){
			$(this).animate({marginTop:0},1000,"easeOut");
			$("#loadingMain").css({"display":"none"});
		})
		$("#footer").animate({opacity:1},600,"easeOut",function (){
			$("#bodyer").animate({height:760},1400,"easeOut",function (){
				$("#bodyer").css({overflow:"visible"});
				$("#copyright").css({opacity:1});
				$("#footer").css({marginTop:0});
				require('./show.js').show(window.location.hash);
			});
		})
		
		/*nav*/
		window.bChange = true;
		$('#webNav a').click(function(){
			if( this.dataset.hash!=undefined && bChange )
			{
				require('./hide.js').hide(window.location.hash,this.dataset.hash);
			}
			
		});
		 
		window.aTimer = [];//网页定时器的管理
		 
		/*nav*/
		$('#webNav a').each(function(index, element) {
			if( this.dataset.hash == ( window.location.hash || "#index" )){
				$(this).addClass("active");
			}else{
				this.className = "";
			}
		});

		/*history*/
		window.bBtn = true;
		window.onhashchange = function(){
			$('#webNav a').each(function(index, element) {
				if( this.dataset.hash == ( window.location.hash || "#index" )){
					$(this).addClass("active");
				}else{
                	this.className = "";
				}
            });
			if(window.bBtn){
				window.location.reload();
			}
		};
		/*history*/
		
	});
	
});
