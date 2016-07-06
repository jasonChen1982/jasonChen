// JavaScript Document

define(function(require,exports,module){
	function createBubble(){
		clearTimer();
		var oMoreBubble = document.getElementById("more_bubble");
		oMoreBubble.height = parseInt(getStyle(oMoreBubble,"height"));
		window.aTimer[0] = setInterval(create(oMoreBubble,"li"),900);
		window.aTimer[1] = setInterval(create(oMoreBubble,"li"),3500);
	
		window.onfocus = function (){
			window.aTimer[0] = setInterval(create(oMoreBubble,"li"),900);
			window.aTimer[1] = setInterval(create(oMoreBubble,"li"),3500);
		};
		window.onblur = function (){
			clearInterval(window.aTimer[0]);
			clearInterval(window.aTimer[1]);
		};
		
		function create(oParent,mark){
			return function (){
				var oMark=document.createElement(mark);
				var iRan=Math.random();
				var howBig = 5+parseInt( iRan*10 );
					iRan = 1-iRan;
				oMark.style.width = howBig+"px";
				oMark.style.height = howBig+"px";
				var iRan2=Math.random();
				oParent.appendChild(oMark);
				move(oMark,{opacity:100},false)
				bubble(oMark,iRan2,iRan);
			}
		}
		function bubble(obj,w,p){
			clearInterval(obj.bubbleTimer);
			var sp=0.01+p/30;
			var sw=15+w*30;
			var swing=sw;
			obj.speed=1.7;
			obj.speedX=w*Math.PI;
			obj.bubbleTimer=setInterval(function (){
				obj.speed+=sp;
				obj.speedX+=4*Math.PI/180;
				obj.iCurT = parseInt(getStyle(obj,"bottom"));
				obj.style.bottom=obj.iCurT+obj.speed+"px";
				obj.style.left=90+mySin(obj.speedX)*swing+"px";
				if(obj.iCurT>=oMoreBubble.height){
					oMoreBubble.removeChild(obj);
					clearInterval(obj.bubbleTimer);
					};
			},30);
		}
	}
	
function mySin(x){
	return Math.sin(x);
}
function move(obj,json,fn){
	clearInterval(obj.timer2);
	obj.timer2 = setInterval(function(){
		var bBtn = true;
		for(var attr in json){
			var iCur = 0;
			if(attr == 'opacity'){
				iCur = Math.round(getStyle(obj,attr)*100);
			}
			else if(attr=='zIndex'){obj.style[attr] = json[attr];}
			else{
				iCur = parseInt(getStyle(obj,attr));
			}
			var iSpeed = (json[attr] - iCur)/3;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
		
			if(iCur != json[attr]){
				bBtn = false;
			}
			if(attr == 'opacity'){
				obj.style.filter = 'alpha(opacity='+(iCur+iSpeed)+')';
				obj.style.opacity = (iCur + iSpeed)/100;
			}
			else{
				obj.style[attr] = iCur + iSpeed + 'px';
			}
		}
		if(bBtn){
			clearInterval(obj.timer2);
			fn && fn.call(obj);
		}
	},30);
}
function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
}
	function clearTimer(){
		clearInterval(window.aTimer[0]);
		clearInterval(window.aTimer[1]);
	};
	
	exports.clearTimer = clearTimer;
	exports.createBubble = createBubble;
});