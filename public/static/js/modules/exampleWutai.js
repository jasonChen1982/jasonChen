// JavaScript Document

define(function(require,exports,module){
	var iNow = 1;	// 显示第几屏
	var oldiNow = 1;	// 显示第几屏
	var oDiv = $('#video_list');
	var aLi = oDiv.find('.li');
	var oPrev = oDiv.find('.prev');
	var oNext = oDiv.find('.next');
	var arrPos;
	function onClick(){
		(function() {
				arrPos = [{
				left: -400,
				opacity: 0,
				transform: 'rotateY(-70deg) translateX(-96px)',
				transformOrigin: 'right'
			}, {
				left: 0,
				opacity: 0.7,
				transform: 'rotateY(-35deg) translateX(-48px)',
				transformOrigin: 'right'
			}, {
				left: 460,
				opacity: 1,
				cursor:'pointer',
				transform: 'rotateY(0) translateX(0)',
				transformOrigin: ''
			}, {
				left: 920,
				opacity: 0.7,
				transform: 'rotateY(35deg) translateX(48px)',
				transformOrigin: 'left'
			}, {
				left: 1320,
				opacity: 0,
				transform: 'rotateY(70deg) translateX(96px)',
				transformOrigin: 'left'
			}];
			bindClick(iNow);  //绑定事件
			aLi.each(function(i) {
				$(this).css(arrPos[i < 3 ? (i + 1) : (arrPos.length - 1)]);
				
			});
		})();
	}
	oPrev.click(function() {
		if (iNow > 0) {
			oldiNow = iNow;
			iNow--;
			setPos();
			bindClick(iNow);
		}
	});
	oNext.click(function() {
		if (iNow < aLi.size() - 1) {
			oldiNow = iNow;
			iNow++;
			setPos();
			bindClick(iNow);
		}
	});
	function setPos() {
		for (var i = 0; i < iNow - 2; i++) {
			aLi.eq(i).css(arrPos[0])
		}
		for (var i = iNow + 3; i < aLi.size(); i++) {
			aLi.eq(i).css(arrPos[arrPos.length - 1])
		}
		for (var i = 0; i < arrPos.length; i++) {
			if (i < 3) {
				if (iNow - (2 - i) > -1) {
					aLi.eq(iNow - (2 - i)).css(arrPos[i])
				}
			} else {
				if (iNow + (i - 2) < aLi.size()) {
					aLi.eq(iNow + (i - 2)).css(arrPos[i])
				}
			}
		}
	}
	function bindClick(iNow){
		aLi.eq(oldiNow).unbind("click");
		aLi.eq(iNow).click(function(){
			require("./bubble.js").clearTimer();
			$("#video_list span").css("display","none");
			$(this).css({
					left: 460,
					opacity: 0,
					transform: 'rotateY(0) translateZ(-200px) translateY(30px)',
					transformOrigin: ''
				});
			$(this).next("li").css({
				left: 1320,
				opacity: 0,
				transform: 'rotateY(70deg) translateX(96px)',
				transformOrigin: 'left'
				});
			$(this).prev("li").css({
					left: -400,
					opacity: 0,
					transform: 'rotateY(-70deg) translateX(-96px)',
					transformOrigin: 'right'
				});
			$('html,body').animate({scrollTop: '110px'}, 800,"easeIn",function(){
				$("#video_list").css("display","none");
			})
			$("#bottomPic").css({bottom:-100,opacity:0});
			$("#exampleMore").animate({bottom:0,opacity:1},1400,"easeIn",function(){
				$("#contentBoxWrap").animate({opacity:1},600,"easeIn",false);
				$("#ckeyWords").css("display","block").animate({opacity:1},300,"easeIn",false);
			});
			
		})
	};
	function ckeyWords(){
		$("#ckeyWords").click(function(){
			$("#contentBoxWrap").animate({opacity:0},300,"easeIn",false);
			$("#video_list").css({display:"block"});
			$('html,body').animate({scrollTop: '0px'}, 400)
			$("#ckeyWords").stop().animate({opacity:0},400,"easeIn",function(){
				$("#ckeyWords").css({display:"none"});
				$("#bottomPic").css({bottom:0,opacity:1});
				aLi.eq(iNow).css({
					left: 460,
					opacity: 1,
					cursor:'pointer',
					transform: 'rotateY(0) translateX(0)',
					transformOrigin: ''
					});
				aLi.eq(iNow).next("li").css({
					left: 920,
					opacity: 0.7,
					transform: 'rotateY(35deg) translateX(48px)',
					transformOrigin: 'left'
					});
				aLi.eq(iNow).prev("li").css({
					left: 0,
					opacity: 0.7,
					transform: 'rotateY(-35deg) translateX(-48px)',
					transformOrigin: 'right'
					});
				oPrev.css("display","block");
				oNext.css("display","block");
				});
			require("./bubble.js").createBubble();
			$("#exampleMore").animate({bottom:-100,opacity:0},1000,"easeIn",false);
		});
	}
	
		
	
	exports.ckeyWords = ckeyWords;
	exports.onClick = onClick;
});