// JavaScript Document
define(function(require,exports,module){
	$("#submit_btn").click(function(){
		var user = {
			account: $("#name_input").val(),
			pwd: $("#pwd_input").val(),
			pwdcheck: $("#pwdcheck_input").val()
		}
		if(user.account == "" || user.pwd == "" || user.pwdcheck == "" || user.pwdcheck !== user.pwd){
			alert("err")
		}else{
			$.ajax({
				type: 'POST',
				url:"register",
				data: {
					user: user
				},
				success: function (data){
					alert("提交成功！！！"+data);
					$("#MNGregister input").val("");
				}
			});
		}
	})
	function init(hash){
		$("#MNGregister").show();
	}
	
	exports.init = init;
	
});