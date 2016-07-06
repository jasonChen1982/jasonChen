// JavaScript Document

define(function(require,exports,module){
	
	function loadingWeb(){
			var loadingTimer = null;
			var iProgress = 0;
			var iProTol = 0;
			
			iProTol++;
			require.async('jq', function() {
				iProgressUp();
			  });
			iProTol++;
			require.async('modernizr', function() {
				iProgressUp();
			  });
			var aImgPre = ["./static/imgs/contect0.png","./static/imgs/contect1.png","./static/imgs/contect2.png","./static/imgs/contect3.png","./static/imgs/contect4.png","./static/imgs/contect5.png","./static/imgs/contect6.png","./static/imgs/contect7.png","./static/imgs/contect8.png","./static/imgs/contect9.png","./static/imgs/cloud11.png","./static/imgs/cloud12.png","./static/imgs/cloud13.png","./static/imgs/cloud14.png","./static/imgs/news0.png","./static/imgs/news1.png","./static/imgs/news2.png","./static/imgs/news3.png","./static/imgs/1.jpg","./static/imgs/2.jpg","./static/imgs/3.jpg"];
			iProTol+= aImgPre.length;
	
			var oLoading = document.getElementById("loadingMain");
			var aLoadingDiv = oLoading.getElementsByTagName("div");
			var oWaring = document.getElementById("waring");
			
			/* 头部居中 */
			var clientH = document.documentElement.clientHeight;
			document.getElementById("header").style.marginTop=clientH/2 - 120 +"px";
			/* 结束 头部居中 */
			
			/* 进度条计算 */
			function iProgressUp(){
				iProgress++;
				testPro()
			}
			function testPro(){
				if(iProgress>= iProTol){
					showUp()
				}
			}
			function showUp(){
				oWaring.style.display = "none";
				clearInterval(loadingTimer);
				for(var i=1;i<aLoadingDiv.length;i++){
					aLoadingDiv[i].style.cssText = "opacity:1;filter:alpha(opacity=100);";
				}
				with(oLoading.style){
					webkitTransform = "scale(1.6)";
					mozTransform = "scale(1.6)";
					msTransform = "scale(1.6)";
					oTransform = "scale(1.6)";
					transform = "scale(1.6)";
					opacity = 0;
					filter = "alpha(opacity=0)";
				}
				require("./main");
			}
			
			
			function loadMove(obj,json,times,fx,fn){
				var iCur = {};
				for(var attr in json){
					iCur[attr] = 0;
					if( attr == 'transform' ){
						iCur[attr] = 60;
					}
				}
				var startTime = now();
				clearInterval(obj.timer);
				obj.timer = setInterval(function(){
					var changeTime = now();
					var scale = 1 - Math.max(0,startTime - changeTime + times)/times;
					for(var attr in json){
						var value = Tween[fx](scale*times, iCur[attr] , json[attr] - iCur[attr] , times );
						if(attr == 'transform'){
							obj.style.webkitTransform = "rotate("+value+"deg)";  //
							obj.style.mozTransform = "rotate("+value+"deg)";  //
							obj.style.msTransform = "rotate("+value+"deg)";  //
							obj.style.oTransform = "rotate("+value+"deg)";  //
							obj.style.transform = "rotate("+value+"deg)";  //
						}
					}
					if(scale == 1){
						clearInterval(obj.timer);
						if(fn){
							fn.call(obj);
						}
					}
				},30);
				
				function now(){
					return (new Date()).getTime();
				}
			}
			var Tween = {
				elasticOut: function(t, b, c, d, a, p){    //正弦增强曲线（弹动渐出）
					if (t === 0) {
						return b;
					}
					if ( (t /= d) == 1 ) {
						return b+c;
					}
					if (!p) {
						p=d*0.3;
					}
					if (!a || a < Math.abs(c)) {
						a = c;
						var s = p / 4;
					} else {
						var s = p/(2*Math.PI) * Math.asin (c/a);
					}
					return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
				}
			}
		
				oLoading.style.cssText = "opacity:1;filter:alpha(opacity=100);";
				loadMove(aLoadingDiv[0],{"transform":0},2000,"elasticOut",false)
				setTimeout(function (){
					loading();
					aLoadingDiv[1].style.cssText = "opacity:1;filter:alpha(opacity=100);";
					},400)
				
			function loading(){
				var iNowLoad = 1;
				loadingTimer = setInterval(function (){
					iNowLoad++;
					if(iNowLoad>=aLoadingDiv.length){
							for(var i=1;i<aLoadingDiv.length;i++){
								aLoadingDiv[i].style.cssText = "opacity:0;filter:alpha(opacity=0);";
							}
							iNowLoad = 0;
							return false;
						}
					aLoadingDiv[iNowLoad].style.cssText = "opacity:1;filter:alpha(opacity=100);";
				},500)
			}
			/* 结束 进度条计算 */
			
			/*
				图片预加载，计算加载进度
			*/
			for(var i=0;i<aImgPre.length;i++){
				var oImg=new Image();
				oImg.onload=iProgressUp;
				oImg.onerror=iProgressUp;
				oImg.src=aImgPre[i];
			}
		/* 浏览器性能检测 */	
			var attr=[Modernizr.cssanimations,!(document.documentMode == 10||document.documentMode == 11),Modernizr.csstransforms3d,Modernizr.csstransitions,Modernizr.cssgradients];
			for(var i=0;i<attr.length;i++){
				var bTest=testCSS3(attr[i]);
				
				if(!bTest){
					iProgress--;
					oLoading.style.display = "none";
					oWaring.style.cssText = "display:block;opacity:1;filter:alpha(opacity=100);"
					loadMove(oWaring,{"transform":0},3500,"elasticOut",false);
					require("./fnTest.js").fnTest();
					break;
				}
			}
		/* 结束 浏览器性能检测 */	
		
	}
	exports.loadingWeb = loadingWeb;
	
});