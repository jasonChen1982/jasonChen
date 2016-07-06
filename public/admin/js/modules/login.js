$(function(){
	$("#login_btn").click(function(){
		var user = {
			name: $("#name_input").val(),
			pwd: $("#pwd_input").val(),
			checkCode: $("#check_input").val()
		}
		console.log(window.location.host)
		if(user.name == "" || user.pwd == "" || user.checkCode == ""){
			alert("err")
		}else{
			$("#login_form").submit();
		}
	})
})