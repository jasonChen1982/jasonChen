function startMove(obj,json,times,fx,fn){
	
	if( typeof times == 'undefined' ){
		times = 400;
		fx = 'linear';
	}
	if( typeof times == 'string' ){
		if(typeof fx == 'function'){
			fn = fx;
		}
		fx = times;
		times = 400;
	}
	else if(typeof times == 'function'){
		fn = times;
		times = 400;
		fx = 'linear';
	}
	else if(typeof times == 'number'){
		if(typeof fx == 'function'){
			fn = fx;
			fx = 'linear';
		}
		else if(typeof fx == 'undefined'){
			fx = 'linear';
		}
	}
	
	var iCur = {};
	
	for(var attr in json){
		iCur[attr] = 0;
		if( attr == 'opacity' ){
			if(Math.round(getStyle(obj,attr)*100) == 0){
				iCur[attr] = 0;
			}
			else{
				iCur[attr] = Math.round(getStyle(obj,attr)*100) || 100;
			}
		}
		if( attr == 'transform' ){
			iCur[attr] = 180;
		}
		else{
			iCur[attr] = parseInt(getStyle(obj,attr)) || 0;
		}
	}
	
	var startTime = now();
	
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var changeTime = now();
		var scale = 1 - Math.max(0,startTime - changeTime + times)/times;
		for(var attr in json){
			var value = Tween[fx](scale*times, iCur[attr] , json[attr] - iCur[attr] , times );
			if(attr == 'opacity'){
				obj.style.filter = 'alpha(opacity='+ value +')';
				obj.style.opacity = value/100;
			}
			else if(attr == 'transform'){
				obj.style.transform = "rotate("+value+"deg)";  //
				obj.style.webkitTransform = "rotate("+value+"deg)";  //
				obj.style.mozTransform = "rotate("+value+"deg)";  //
				obj.style.msTransform = "rotate("+value+"deg)";  //
				obj.style.oTransform = "rotate("+value+"deg)";  //
			}
			else{
				obj.style[attr] = value + 'px';
			}
		}
		if(scale == 1){
			clearInterval(obj.timer);
			if(fn){
				fn.call(obj);
			}
		}
	},13);
	
	function now(){
		return (new Date()).getTime();
	}
}

/* function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,250)[attr];
}
function getStyle(obj, attr)
{
	if(attr=="rotate")
	{
		return obj.rotate;
	}
	var i=parseFloat(obj.currentStyle?obj.currentStyle[attr]:document.defaultView.getComputedStyle(obj, false)[attr]);
	var val=i?i:0;
	if(attr=="opacity")
	{
		val*=100;
	}
	return val;
} */

var Tween = {
	linear: function (t, b, c, d){  //匀速
		return c*t/d + b;
	},
	easeIn: function(t, b, c, d){  //加速曲线
		return c*(t/=d)*t + b;
	},
	easeOut: function(t, b, c, d){  //减速曲线
		return -c *(t/=d)*(t-2) + b;
	},
	easeBoth: function(t, b, c, d){  //加速减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t + b;
		}
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInStrong: function(t, b, c, d){  //加加速曲线
		return c*(t/=d)*t*t*t + b;
	},
	easeOutStrong: function(t, b, c, d){  //减减速曲线
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t*t*t + b;
		}
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
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
			var s = p/4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
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
	},    
	elasticBoth: function(t, b, c, d, a, p){
		if (t === 0) {
			return b;
		}
		if ( (t /= d/2) == 2 ) {
			return b+c;
		}
		if (!p) {
			p = d*(0.3*1.5);
		}
		if ( !a || a < Math.abs(c) ) {
			a = c; 
			var s = p/4;
		}
		else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		if (t < 1) {
			return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
					Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		}
		return a*Math.pow(2,-10*(t-=1)) * 
				Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
	},
	backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
		if (typeof s == 'undefined') {
		   s = 1.70158;
		}
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	backOut: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 3.70158;  //回缩的距离
		}
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	}, 
	backBoth: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 1.70158; 
		}
		if ((t /= d/2 ) < 1) {
			return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		}
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
		return c - Tween['bounceOut'](d-t, 0, c, d) + b;
	},       
	bounceOut: function(t, b, c, d){
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
		}
		return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
	},      
	bounceBoth: function(t, b, c, d){
		if (t < d/2) {
			return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
		}
		return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
	}
}
function setCss(obj,oAttr)
{
	var sAttr="";
	var arr=["Webkit","Moz","O","ms",""];
	for(sAttr in oAttr)
	{
		
		if(sAttr.charAt(0)=="$")
		{
			for(var i=0;i<arr.length;i++)
			{
				obj.style[arr[i]+sAttr.substring(1)]=oAttr[sAttr];
			}
		}
		else if(sAttr=="rotate")
		{
			obj.rotate=oAttr[sAttr];
			var a=Math.cos(obj.rotate/180*Math.PI); 
			var b=Math.sin(obj.rotate/180*Math.PI);
			var c=-Math.sin(obj.rotate/180*Math.PI);
			var d=Math.cos(obj.rotate/180*Math.PI);
			for(var i=0;i<arr.length;i++)
			{
				obj.style[arr[i]+"Transform"]="matrix("+a+","+b+","+c+","+d+","+0+","+0+")";
			}
			obj.style.filter="progid:DXImageTransform.Microsoft.Matrix( M11="+a+", M12="+c+", M21="+b+", M22="+d+",SizingMethod='auto expand')";
		}
		else
		{
			var value=oAttr[sAttr];
			switch(sAttr)
			{
				case 'width':
				case 'height':
				case 'paddingLeft':
				case 'paddingTop':
				case 'paddingRight':
				case 'paddingBottom':
					value=Math.max(value,0);
				case 'left':
				case 'top':
				case 'marginLeft':
				case 'marginTop':
				case 'marginRight':
				case 'marginBottom':
					obj.style[sAttr]=value+'px';
					break;
				case 'opacity':
					if(value<0)
					{
						value=0;
					}
					obj.style.filter="alpha(opacity:"+value+")";
					
					obj.style.opacity=value/100;
					break;
				default:
					obj.style[sAttr]=value;
			}
		}
	}
}
