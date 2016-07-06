// JavaScript Document

define(function(require,exports,module){
	
	function fnTest(){
		var attr=[Modernizr.cssanimations,!(document.documentMode == 10||document.documentMode == 11),Modernizr.csstransforms3d,Modernizr.csstransitions,Modernizr.cssgradients];
		var oTryBtn = document.getElementById("tryBtn");
		
		oTryBtn.onclick=tianxie;
		function tianxie(){
			var fen=0;
			for(var i=0;i<attr.length;i++){
				var bTest=testCSS3(attr[i]);
				if(bTest){
					$("#testSpace .space").eq(i).html("支持");
					fen++;
				}else{
					$("#testSpace .space").eq(i).html("不支持")
				}
			}
			$("#warTitle").css("opacity",1);
			$("#how").html(fen*100/8+"分");
			$("#welcome").css("display","block");
			$("#welcome").click(function (){
				$("#waring").css({"display":"none"})
				require("./main");
			});
		}
	}
	exports.fnTest = fnTest;
	
});