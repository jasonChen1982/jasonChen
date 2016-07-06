// JavaScript Document
define(function(require,exports,module){
	

	$("#submit_example").click(function(){
		var example = {
			title: $("#example_title_input").val(),
			content: $("#example_content_input").val(),
			preViewPic: $("#example_preViewPic_input").val()
		}
		if(example.title == "" || example.content == "" || !example.preViewPic){
			alert("err")
		}else{
			$("#example_form").submit();
		}
	})

	var liInow = 0;
	$("#addOnePic").click(function(){
		liInow++;
		var str = '<li class="addedOnePic"><input type="file" name="contentPic'+liInow+'" class="li_input_unit"><input type="text" name="contents[text'+liInow+']" value="" class="li_input_unit"></li>'
		$("#addOnePic").before(str);
	})
	function init(hash){
		$("#MNGexample").show();
	}
	
	exports.init = init;
	
});