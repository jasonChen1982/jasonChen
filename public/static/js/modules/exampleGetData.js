// JavaScript Document

define(function(require,exports,module){
	var examples = [],
		cursor = 1,
		aClassName = ["left_example","center_example","right_example"];

	function getExamplesData(){
		$.ajax({
			type: 'POST',
			url:"/getExample",
			data: "",
			success: function (data){
				examples =eval(data);
				console.log(examples);
				createExamples(examples)
				// require("./exampleWutai.js").onClick();
				// require("./exampleWutai.js").ckeyWords();
			}
		});
	}

	function createExamples(examples){
		var examplesLi = "";
		for(var i=0;i<examples.length;i++){
			var title = "<h3><strong><div>成功案例"+chinese(i)+":</div><div>"+examples[i].title+"</div></strong><span></span></h3>"
			var _id = examples[i]._id;
			var scroll = '<div class="scroll"><div class="content _mCS_1"><img src="'+examples[i].preViewPic+'"></div></div>';
			var p = '<p>'+examples[i].content+'</p>'
			var sClass = aClassName[i]?aClassName[i]:"right_hidden_example";
			examplesLi += '<li class="li '+sClass+'" data-id="'+_id+'">'+title+scroll+p+'</li>';
		}
		$("#example_list").html(examplesLi)
	}

	function chinese(num){
		var chineseNum = ["一","二","三","四","五","六","七","八","九","十"];
		return chineseNum[num]
	}

	$(document).delegate(".li","click",function(){
		if(this.dataset.id&&this.className === "li center_example"){
			createDetial(pickUp(this.dataset.id));
			showDetial();
		}
	});

	function pickUp(mark){
		for(var i=0;i<examples.length;i++){
			if(examples[i]._id === mark){
				return examples[i];
			}
		}
	}
	function createDetial(detial){
		var detials = detial.detialContent;
		var html = "";
		var fastBtn = "";
		for(var i=0;i<detials.length;i++){
			var sClass = i==0? "contentBoxShow":"";
			html += '<div class="contentBox '+sClass+'"><img src="'+detials[i].detialPic+'"></div>';
			fastBtn += '<li><a href="javascript:;">'+detials[i].secTitle+'</a></li>'
		}
		$("#contentBoxWrap").html(html);
		$("#fastNav").html(fastBtn);
		require("./movie.js").movie();
	}
	function showDetial(){
		var $examples = $("#example_list li");
		if(cursor>0){
			$examples.eq(cursor-1).removeClass("left_example").addClass("left_hidden_example");
		}
		$examples.eq(cursor).removeClass("center_example").addClass("center_hidden_example");
		if(cursor+1<$examples.length){
			$examples.eq(cursor+1).removeClass("right_example").addClass("right_hidden_example");
		}
		$('html,body').animate({scrollTop: '110px'}, 800,"easeIn",function(){
			$("#video_list").css("display","none");
		})
		$("#bottomPic").css({bottom:-100,opacity:0});
		$("#exampleMore").animate({bottom:0,opacity:1},1400,"easeIn",function(){
			$("#contentBoxWrap").animate({opacity:1},600,"easeIn",false);
			$("#ckeyWords").css("display","block").animate({opacity:1},300,"easeIn",false);
		});
	}

	$("#ckeyWords").click(function(){
		var $examples = $("#example_list li");
		$("#contentBoxWrap").animate({opacity:0},300,"easeIn",false);
		$("#video_list").css({display:"block"});
		$('html,body').animate({scrollTop: '0px'}, 400)
		$("#ckeyWords").stop().animate({opacity:0},400,"easeIn",function(){
			$("#ckeyWords").css({display:"none"});
			$("#bottomPic").css({bottom:0,opacity:1});
			if(cursor>0){
				$examples.eq(cursor-1).removeClass("left_hidden_example").addClass("left_example");
			}
			$examples.eq(cursor).removeClass("center_hidden_example").addClass("center_example");
			if(cursor+1<$examples.length){
				$examples.eq(cursor+1).removeClass("right_hidden_example").addClass("right_example");
			}
		});
		require("./bubble.js").createBubble();
		$("#exampleMore").animate({bottom:-100,opacity:0},1000,"easeIn",false);
	});



	$('#video_list .prev').click(function() {
		if(cursor>0){
			cursor--;
			changePos();
		}
	});
	$('#video_list .next').click(function() {
		if(cursor<$("#example_list li").length){
			cursor++;
			changePos();
		}
	});
	function changePos(){
		var $examples = $("#example_list li"),
			length = $examples.length;


		for (var i = 0; i < length; i++) {
			if(i<cursor-1){
				$examples.eq(i).removeClass("left_example").addClass("left_hidden_example");
			}else if(i==cursor-1){
				$examples.eq(i).removeClass("left_hidden_example center_example").addClass("left_example");
			}else if(i==cursor){
				$examples.eq(i).removeClass("left_example right_example").addClass("center_example");
			}else if(i==cursor+1){
				$examples.eq(i).removeClass("center_example right_hidden_example").addClass("right_example");
			}else{
				$examples.eq(i).removeClass("right_example").addClass("right_hidden_example");
			}
		}
	}

	exports.getExamplesData = getExamplesData;
});