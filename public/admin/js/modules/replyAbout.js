// JavaScript Document
define(function(require,exports,module){
	var IdMark = "";


	function creatBlank(){
		$("#replyBlank").hide();
		$("#MessageList").removeClass("messageL").addClass("messageC");
		$("#blankTitle").html("留言板");
		$("#sendAjax").html("发表留言");
	}

	function addBlank(id){
		$("#replyBlank").show();
		$("#MessageList").removeClass("messageC").addClass("messageL");
		$("#blankTitle").html("回复");
		$("#sendAjax").html("发表回复");
		$("#trTopic").hide();
		IdMark = id;
	}

	var message;
	$("#sendAjax").on("click",function(){
		message = {
			name: $("#name").val(),
			content: $("#content").val(),
			replyType: 1
		}
		addMsg();
	})

	function addMsg(){
		if(message.content===''||message.name==='输入名字或昵称'){
			alert('有必填项目未填写！！请完善')
		}else{
			
			$.ajax({
				type: 'POST',
				url:"/addMessage",
				data: {
					message: message,
					_id: IdMark
				},
				success: function (scheck){
					
					if(scheck!=='200'){
						alert('很遗憾！您的验证码错误,请再填写一遍！！');
						
						oCode.value='';

					}else{
						alert('恭喜！您的留言提交成功了！！');
						var dv='<div class="article leaveComments studentMBox"><span class="ico"></span><div class="title studentMBoxHead"><span class="titleIco"></span><h3>'+message.name+'</h3><span class="theme">主题：'+message.theme+'</span></div><p class="content">'+message.content+'</p></div>'
						
						$("#showList").append('<li><div class="messageListBox clear" style=" opacity: 1; filter: alpha(opacity=100); -webkit-transform: rotateY(0deg);"><div class="picture"><img src="'+picSrc+'"/></div>'+dv+'</li>');

						$("#messageList").height($("#showList").height());
						
						$("#name").value='输入名字或昵称';
						$("#content").value='';
						$("#phone").value='填电话或者邮箱';
						$("#code").value='';
					}
				}
			});
		}
	}



	// oGet.onclick=function (){
	// 	var oTheme=document.getElementById('theme');
	// 	var oName=document.getElementById('name');
	// 	var oContent=document.getElementById('content');
	// 	var oPhone=document.getElementById('phone');
	// 	var oCode=document.getElementById('code');
	// 	var message = {
	// 		theme: oTheme.value,
	// 		name: oName.value,
	// 		content: oContent.value,
	// 		contact: oPhone.value,
	// 		headPhoto: picSrc
	// 	}
		
	// 	if(oCode.value===''||oContent.value===''||oPhone.value==='填电话或者邮箱'||oName.value==='输入名字或昵称'||oTheme.value==='输入主题或关于什么'){
	// 		alert('有必填项目未填写！！请完善')
	// 	}else{
			
	// 		$.ajax({
	// 			type: 'POST',
	// 			url:"/createMessage",
	// 			data: {
	// 				message: message,
	// 				code: oCode.value
	// 			},
	// 			success: function (data){
					
	// 				var scheck='';
	// 				scheck=eval(data);
					
					
	// 				if(scheck=='112'){
	// 					alert('很遗憾！您的验证码错误,请再填写一遍！！');
						
	// 					oCode.value='';

	// 				}else{
	// 					alert('恭喜！您的留言提交成功了，请等待管理员回复吧！！');
	// 					var dv='<div class="article leaveComments studentMBox"><span class="ico"></span><div class="title studentMBoxHead"><span class="titleIco"></span><h3>'+oName.value+'</h3><span class="theme">主题：'+oTheme.value+'</span></div><p class="content">'+oContent.value+'</p></div>'
						
	// 					oShowList.innerHTML='<li><div class="messageListBox clear" style=" opacity: 1; filter: alpha(opacity=100); -webkit-transform: rotateY(0deg);"><div class="picture"><img src="'+picSrc+'"/></div>'+dv+'</li>'+oShowList.innerHTML;
	// 					oShowList.height=aLiList[aLiList.length-1].offsetTop+aLiList[aLiList.length-1].offsetHeight;
	// 					move(aMessageList[0],{height:oShowList.height},false)
						
	// 					oTheme.value='输入主题或关于什么';
	// 					oName.value='输入名字或昵称';
	// 					oContent.value='';
	// 					oPhone.value='填电话或者邮箱';
	// 					oCode.value='';
	// 				}
	// 			}
	// 		});
	// 	}
	// }


	exports.creatBlank = creatBlank;
	exports.addBlank = addBlank;
	
});