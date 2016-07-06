// JavaScript Document

define(function(require,exports,module){
	
	function returnTop(){
		$("#conversation .huojian").on({click:function (){
			$('html,body').animate({scrollTop: '0'}, 400,"easeOut",function (){
				$("#conversation .huojianL").animate({left:10,opacity:0},400,"backIn",function (){
					this.style.zIndex = -1;
				});
				$("#conversation .huojianR").animate({right:10,opacity:0},400,"backIn",function (){
					this.style.zIndex = -1;
				});
			})
		}});
	
	window.onresize=window.onscroll=testScroll;
	function testScroll()
	{
		var iTop=document.documentElement.scrollTop + document.body.scrollTop;
		if(iTop<=150)
		{
			returnTopEvent(true);
		}else if(iTop>150)
		{
			returnTopEvent(false);
		}
		
	};
	function returnTopEvent(bUp) {
		if(bUp)
		{
			$("#conversation .huojianL").animate({left:10,opacity:0},400,"backIn",function (){
				this.style.zIndex = -1;
			});
			$("#conversation .huojianR").animate({right:10,opacity:0},400,"backIn",function (){
				this.style.zIndex = -1;
			});
		}else
		{
			$("#conversation .huojianL").animate({left:-50,opacity:1},1400,"elasticOut",function (){
				this.style.zIndex = 1;
			});
			$("#conversation .huojianR").animate({right:-50,opacity:1},1400,"elasticOut",function (){
				this.style.zIndex = 1;
			});
		}
	}
	
	}
	
	function returnOut(){
		window.onresize=window.onscroll=null;
	}

	
	exports.returnOut = returnOut;
	exports.returnTop = returnTop;
	
});