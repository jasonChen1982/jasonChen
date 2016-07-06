
define(function(require,exports,module){

	var oMessageList=document.getElementById('MessageList');
	var oShowList=document.getElementById('showList');
	var aLiList=oShowList.getElementsByTagName('li');
	var oTitle=document.getElementById('title');
	var endHtml='';
	var title='';
	function creat(json){
		title='';
		endHtml='';
		oMessageList.style.opacity=0;
		oMessageList.style.filter = 'alpha(opacity=0)';

		title='<span class="them"><span style="color:#000;">留言互动主题：</span>'+json.theme+'</span>';
		var lTrue=false;
		var html='';

		for(var i=0;i<json.sessionContent.length;i++){
			var more='';
				var img='';
				var wrap='';
				var name='';
				var time='';
				var who='';
				var p='';
				var ico='';
		console.log(json.sessionContent[i]);
					who=json.sessionContent[i].replyType;
					time=moment(json.sessionContent[i].meta.updateAt).format('YYYY-MM-DD HH:mm:ss');
					name=json.sessionContent[i].name;
					p=json.sessionContent[i].content;
						if(who===0){
							if(json.sessionContent[i].hidden == '404'){
								p = '内容被隐藏...';
								}
							if(lTrue){endHtml+='<li><div class="messageListBox clear" style=" opacity: 1; filter: alpha(opacity=100);">'+html+'</div></li>';}
							lTrue=false;
							html='';
							img=json.sessionContent[i].headPhoto;
							wrap='<div class="picture"><img src="'+img+'" /></div>';
							ico='<span class="ico"></span>';
							html=wrap+'<div class="article leaveComments studentMBox">'+ico+'<div class="title studentMBoxHead"><span class="titleIco"></span><h3>'+name+'</h3><span class="time">'+time+'</span></div><p class="content">'+p+'</p></div>';
						}else if(who===1){
							html+='<div class="article reply studentMBox"><div class="title studentMBoxHead"><span class="titleIco"></span><h3>'+name+'</h3><span class="time">'+time+'</span></div><p class="content">'+p+'</p></div>';
							lTrue=true;
						}
		}
		endHtml+='<li><div class="messageListBox clear" style=" opacity: 1; filter: alpha(opacity=100);">'+html+'</div></li>';	
						
	
		oTitle.innerHTML=title;
		oShowList.innerHTML=endHtml;
		
	}

	exports.creat = creat;
	
});