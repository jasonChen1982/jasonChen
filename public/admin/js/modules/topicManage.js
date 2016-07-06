
define(function(require,exports,module){
	//为创建每条留言获取元素
	var oMessageList=document.getElementById('MessageList');
	var oShowList=document.getElementById('showList');
	var aLiList=oShowList.getElementsByTagName('li');
	var iNowPage=1;
	var endHtml='';
	
	//创建留言的函数
	function creat(json){
		endHtml='';
		oMessageList.style.opacity=0;
		oMessageList.style.filter = 'alpha(opacity=0)';
		json = json.message;
		for(var dialogue in json){
			var title='';
			var html='';
			var more='';
			var wrap='';
			var url='';
			var img='';
			var length = json[dialogue].sessionContent.length;
				title=json[dialogue].theme;
				url= json[dialogue]._id;
				
			for(var box=0;box<length;box++){
				var name='';
				var time='';
				var who='';
				var p='';
				var ico='';
					img='.'+json[dialogue].sessionContent[0].headPhoto.substring(8);
				if(box<2){
					who=json[dialogue].sessionContent[box].replyType;
					time=moment(json[dialogue].sessionContent[box].meta.updateAt).format('YYYY-MM-DD HH:mm:ss');
					name=json[dialogue].sessionContent[box].name;
					p=json[dialogue].sessionContent[box].content;
					if(who===0){
						if(json[dialogue].sessionContent[box].hidden == '404'){
							p = '内容被隐藏...';
							}
						ico='<span class="ico"></span>'
						html+='<div class="article leaveComments studentMBox">'+ico+'<div class="title studentMBoxHead"><span class="titleIco"></span><h3>'+name+'</h3><span class="theme">主题：'+title+'</span></div><p class="content">'+p+'</p></div>'
					}else if(who===1){
						html+='<div class="article reply studentMBox"><div class="title studentMBoxHead"><span class="titleIco"></span><h3>'+name+'</h3><span class="time">'+time+'</span></div><p class="content">'+p+'</p></div>'
					}
				}
			}
			more='<span class="have_more"><span class="moreIco"></span>点我回复</span>';
			wrap='<a href="javascript:;"><img src="'+img+'"/></a>';
			endHtml+='<li><div class="messageListBox clear" style=" opacity: 1; filter: alpha(opacity=100);"><div class="picture" data-topic="'+url+'">'+wrap+more+'</div>'+html+'</li>';
		}
		
		oShowList.innerHTML=endHtml;

	}

	exports.creat = creat;
	
});