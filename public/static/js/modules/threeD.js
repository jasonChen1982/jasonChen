// JavaScript Document

define(function(require,exports,module){
	var iNow=0;
	function threeD(){
		
		var oWearWrap = document.getElementById("wearWrap");
		var aWearli = oWearWrap.getElementsByTagName("li");
		var allCol = oWearWrap.offsetWidth/14;
		var allRow = oWearWrap.offsetHeight/14;
		
		var jason = init();
		
		function init(){
			var cach = "";
			var jason = [];
			for(var i=0;i<allCol;i++){
				for(var j=0;j<allRow;j++){
					cach+="<li class='room'><div class='faceFont' style='background-position: "+ -j*14 +"px "+ -i*14 +"px;'></div><span class='faceUp'></span><span class='faceLeft'></span><span class='faceBottom'></span><span class='faceRight'></span></li>";
				}
			}
			oWearWrap.innerHTML = cach;
			
			for(var i=0;i<allCol;i++){
				var aCach = [];
				for(var j=0;j<allRow;j++){
					aWearli[j+i*allCol].indexX=j;
					aWearli[j+i*allCol].indexY=i;
					aWearli[j+i*allCol].oDiv=aWearli[j+i*allCol].getElementsByTagName("div")[0];
					
					aCach.push(aWearli[j+i*allCol]);
				}
				jason.push(aCach);
			}
			
			return jason;
		}
		
		oWearWrap.onclick = radius;
		
		function radius(ev){
			var ev = ev||event;
			var target = ev.target||ev.srcElement;
			
			var This = target.parentNode;
			
			for(var i=0;i<allCol;i++){
				for(var j=0;j<allRow;j++){
					aWearli[j+i*allCol].bBtn=true;
				}
			}
			var x = This.indexX;
			var y = This.indexY;
			var r = 0;
			var Timer=null;
			
			Timer = setInterval(function (){
				var s=2*r-1>0?0:2*r-1;
				
				for(var i = x-r>0?x-r:0;i< (x+r+1<allCol?x+r+1:allCol);i++){
					for(var j = y-r>0?y-r:0;j< (y+r+1<allRow?y+r+1:allRow);j++){
						if(jason[j][i].bBtn){
							jason[j][i].bBtn=false;
							bigShow(jason[j][i]);
						}
					}
				}
				r++;
				if(r>allCol)clearInterval(Timer);
			},50);
		
			iNow++;
			if(iNow>10){
				iNow=0;
			}
				//alert("X:"+ this.indexX +"Y:"+ this.indexY);
		}
		
		function bigShow(obj){
			
			obj.oDiv.style.backgroundImage="url(./static/imgs/contect"+ iNow +".png)";
			obj.className = "room roomHover";
		
			obj.addEventListener("webkitTransitionEnd", function(){ //动画结束时事件
				this.className = "room";
			}, false);
			obj.addEventListener("transitionend", function(){ //动画结束时事件
				this.className = "room";
			}, false);
			obj.addEventListener("msTransitionEnd", function(){ //动画结束时事件
				this.className = "room";
			}, false);
			obj.addEventListener("oTransitionEnd", function(){ //动画结束时事件
				this.className = "room";
			}, false);
			
		}
	}

	exports.threeD = threeD;
	
});