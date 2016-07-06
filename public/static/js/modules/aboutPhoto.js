// JavaScript Document

define(function(require,exports,module){
	var bEvent = false;
	var oldNow = 0;
	
	function onOver(){
		var oAboutUs = document.getElementById("aboutUs");
		var aAboutLi = oAboutUs.getElementsByTagName("li");
		var iNow = aAboutLi.length-1;
		var oTimer = null;
		oTimer = setInterval(function (){
			if(aAboutLi[iNow])aAboutLi[iNow].index = iNow;
			$(aAboutLi[iNow]).animate({"left":0,"opacity":1},3000,"elasticOut",function(){
				if(this.index <= 0)clearTime();
			});
			iNow--;
		},200)
		
		function clearTime(){
			clearInterval(oTimer);
		}

		if(bEvent == false){
			bEvent = !bEvent;
			for(var i=0;i<aAboutLi.length;i++){
				
				aAboutLi[i].index = i;
				
				aAboutLi[i].onmouseover = function (){
					$(this).addClass("onmouseover");
				}
				aAboutLi[i].addEventListener("webkitAnimationEnd", function(){ //动画结束时事件
					$(this).removeClass("onmouseover");
				}, false);
				aAboutLi[i].addEventListener("mozAnimationEnd", function(){ //动画结束时事件
					$(this).removeClass("onmouseover");
				}, false);
				aAboutLi[i].addEventListener("msAnimationEnd", function(){ //动画结束时事件
					$(this).removeClass("onmouseover");
				}, false);
				aAboutLi[i].addEventListener("animationEnd", function(){ //动画结束时事件
					$(this).removeClass("onmouseover");
				}, false);
				
				
				aAboutLi[i].onclick = function (){
					if(oldNow != this.index){
					
					$( aAboutLi[oldNow] ).removeClass("active");
					$( aAboutLi[this.index] ).addClass("active");
					
					$( '#grid .gridShadow' ).eq(oldNow).removeClass("gridShow")
					$( '#grid .gridShadow' ).eq(this.index).addClass("gridShow");
					
					oldNow = this.index;
					}
				}

			}
		}
	}
	
	exports.onOver = onOver;
});