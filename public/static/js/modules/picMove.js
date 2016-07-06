// JavaScript Document

define(function(require,exports,module){
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
	
	function picMove(obj,json,times,fx,fn){
		var iCur = {};
		for(var attr in json){
			iCur[attr] = 0;
			if( attr == 'transform' ){
				iCur[attr] = 0.3;
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
					obj.style.transform = "scale("+value+")";  //
					obj.style.webkitTransform = "scale("+value+")";  //
					obj.style.mozTransform = "scale("+value+")";  //
					obj.style.msTransform = "scale("+value+")";  //
					obj.style.oTransform = "scale("+value+")";  //
				}
			}
			if(scale == 1){
				clearInterval(obj.timer);
				if(fn){
					fn.call(obj);
				}
			}
		},14);
		function now(){
			return (new Date()).getTime();
		}
	}

	exports.picMove = picMove;
	
});