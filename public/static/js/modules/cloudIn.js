// JavaScript Document

define(function(require,exports,module){
	
	function cloudIn(){
		$("#cityBgWrap").animate({bottom:0,opacity:1},600,"easeIn",false);
		$("#cloud li").eq(0).animate({opacity:1},600,"easeIn",false);
		$("#faceCloud").animate({opacity:1},600,"easeIn",false);
		var aCloud = [5,6,4,7];
		var aCloudH = [150,280,200,340];
		var i=0;
		var cloudTime = setInterval(function (){
				$("#cloud li").eq(aCloud[i]).css({opacity:1})
				var This = $("#cloud li").eq(aCloud[i]);
					$(This).find(".tiancong").css({opacity:1});
					$(This).find(".tiancong").animate({height:aCloudH[i]},3000,"elasticOut",false);
					$(This).find(".cloudBg").animate({opacity:1},400,"easeIn",false);
					i++;
					if(i>aCloudH.length)
					{
						clearInterval(cloudTime);
					}
			},250);		
		/*
		var aCloudPos = [{left:106,top:366},{left:600,top:420},{left:900,top:520}]
		for(var h=1;h<4;h++){
		$("#cloud li").eq(h).animate(aCloudPos[h-1],1000,"easeIn",false);
		}
		*/
		window.onresize=window.onscroll=testScrollCloud;
	}
	
	function testScrollCloud()
	{
		var iTop=document.documentElement.scrollTop + document.body.scrollTop;
		if(iTop<=80)
		{
			mousewheelEvent(true);
		}else if(iTop>100)
		{
			mousewheelEvent(false);
		}
	};
	function mousewheelEvent(bUp) {
		var aCloudPos = [{left:104,top:410},{left:650,top:420},{left:950,top:480}]
		var aCloudPosOld = [{left:170,top:570},{left:630,top:530},{left:910,top:600}]
		if(bUp)
		{
			for(var h=1;h<4;h++){
				$("#cloud li").eq(h).css(aCloudPosOld[h-1]);
			}
		}else
		{
			for(var h=1;h<4;h++){
				$("#cloud li").eq(h).css(aCloudPos[h-1]);
			}
		}
	}
	
	function cloudOver(){
		var oSuperioity = document.getElementById("superioity");
		var oBodyer = document.getElementById("bodyer");
		var oCloud = document.getElementById("cloud");
		var oFaceCloud = document.getElementById("faceCloud");
		
		oBodyer.onmouseover = function (){
			var disX = oSuperioity.offsetLeft+oSuperioity.offsetWidth/2;
			var disY = oSuperioity.offsetTop+oSuperioity.offsetHeight/2;
			var disXCloud = parseInt(oSuperioity.offsetLeft+oSuperioity.offsetWidth*3/5);
			var disYCloud = parseInt(oSuperioity.offsetTop+oSuperioity.offsetHeight*2/7);
			
				oFaceCloud.style.transition= "0";
				oFaceCloud.style.webkitTransition= "0";
				oFaceCloud.style.mozTransition= "0";
				oFaceCloud.style.msTransition= "0";
				oFaceCloud.style.oTransition= "0";
				oCloud.style.transition= "0";
				oCloud.style.webkitTransition= "0";
				oCloud.style.mozTransition= "0";
				oCloud.style.msTransition= "0";
				oCloud.style.oTransition= "0";
				oSuperioity.style.transition= "0";
				oSuperioity.style.webkitTransition= "0";
				oSuperioity.style.mozTransition= "0";
				oSuperioity.style.msTransition= "0";
				oSuperioity.style.oTransition= "0";
			oBodyer.onmousemove = function (ev){
				var ev=ev||event;
				var angleX = (ev.clientX - disX)/2400;
				var angleY = (ev.clientY - disY)/800;
				var angleXC = (ev.clientX - disXCloud)/2400;
				var angleYC = (ev.clientY - disYCloud)/800;
				
				oFaceCloud.style.marginTop = angleYC*110+"px";
				oFaceCloud.style.right = 106 - angleXC*250+"px";
				oCloud.style.backgroundPosition = 
				parseInt((0.5+angleX)*100)+"% "+parseInt((0+angleY)*80)+"%";
				oSuperioity.style.backgroundPosition = 
				parseInt((0.5-angleX)*50)+"% "+parseInt((0.5-angleY)*50)+"%";
			}
		}
		oBodyer.onmouseout = function (){
			oCloud.style.transition= "0.4s";
			oCloud.style.webkitTransition= "0.4s";
			oCloud.style.mozTransition= "0.4s";
			oCloud.style.msTransition= "0.4s";
			oCloud.style.oTransition= "0.4s";
			oSuperioity.style.transition= "0.4s";
			oSuperioity.style.webkitTransition= "0.4s";
			oSuperioity.style.mozTransition= "0.4s";
			oSuperioity.style.msTransition= "0.4s";
			oSuperioity.style.oTransition= "0.4s";
			oFaceCloud.style.transition= "0.4s";
			oFaceCloud.style.webkitTransition= "0.4s";
			oFaceCloud.style.mozTransition= "0.4s";
			oFaceCloud.style.msTransition= "0.4s";
			oFaceCloud.style.oTransition= "0.4s";
			
			oFaceCloud.style.marginTop = "0px";
			oFaceCloud.style.right = "106px";
			oCloud.style.backgroundPosition = "50% 0%";
			oSuperioity.style.backgroundPosition = "50% 0%";
		}
	}
	function clearOver(){
		var oBodyer = document.getElementById("bodyer");
		oBodyer.onmouseout = null;
		oBodyer.onmouseover = null;
		oBodyer.onmousemove = null;
		window.onresize=window.onscroll=null;
	}
	
	exports.clearOver = clearOver;
	exports.cloudOver = cloudOver;
	exports.cloudIn = cloudIn;
	
});