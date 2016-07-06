// JavaScript Document

define(function(require,exports,module){
	var iNow = 0;
	function movie(){
		iNow = 0;
		$("#cursor_point").css({
			left: 48+92*iNow+"px"
		})
	}
	$("#fastNav").delegate("li","mouseover",function(){
		$("#cursor_point").css({
			left: 48+92*$(this).index()+"px"
		})
	});
	$("#fastNav").delegate("li","mouseout",function(){
		$("#cursor_point").css({
			left: 48+92*iNow+"px"
		})
	});
	$("#fastNav").delegate("li","click",function(){
		if($(this).index()>iNow){
			$("#contentBoxWrap .contentBox").eq(iNow).removeClass("contentBoxShow").addClass("contentBoxHide");
		}
		else{
			$("#contentBoxWrap .contentBox").eq(iNow).removeClass("contentBoxShow contentBoxHide");
		}
		iNow = $(this).index();
		$("#contentBoxWrap .contentBox").eq(iNow).removeClass("contentBoxHide").addClass("contentBoxShow");
	});
	
	exports.movie = movie;
	
});