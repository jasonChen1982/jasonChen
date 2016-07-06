window.onload=function (){
	var oTimer=null;
/*留言板*/
	var json={};
	var pageNumber=0;
	var pageSize=0;
	var totalPage=0;
	var totalRow=0;		
			
			
	ajax('post', 'json-null', 'session=jason&page=1'+Math.random(), function(data) {
			
			json =JSON.parse(data);
			
			creat()
		});
	var oMessageList=document.getElementById('MessageList');
	var aMessageList=getByClass(oMessageList,'messageList');
	var oShowList=document.getElementById('showList');
	var aLiList=oShowList.getElementsByTagName('li');
	var iNowPage=1;
	var endHtml='';
	function creat(){
		
		endHtml='';
		oMessageList.style.opacity=0;
		oMessageList.style.filter = 'alpha(opacity=0)';
		for(var dialogue in json){
			var img='';
			var title='';
				pageNumber=json[dialogue].pageNumber;
				pageSize=json[dialogue].pageSize;
				totalPage=json[dialogue].totalPage;
				totalRow=json[dialogue].totalRow;
			var html='';
			var more='';
			var wrap='';
			var url='';
			
			var c=0;
				title=json[dialogue].theme;
				img=json[dialogue].head_photo;
				url=json[dialogue].session;
			for(var box in json[dialogue].content){
				
				var name='';
				var time='';
				var who='';
				var p='';
				var ico='';
				if(c<2){
					who=json[dialogue].content[box].who;
					time=json[dialogue].content[box].creatTime;
					name=json[dialogue].content[box].name;
					p=json[dialogue].content[box].text;
						if(who===' leaveComments '){
							ico='<span class="ico"></span>'
							html+='<div class="article'+who+'studentMBox">'+ico+'<div class="title studentMBoxHead"><span class="titleIco"></span><h3>'+name+'</h3><span class="theme">主题：'+title+'</span></div><p class="content">'+p+'</p></div>'
							}
						else{
							html+='<div class="article'+who+'studentMBox"><div class="title studentMBoxHead"><span class="titleIco"></span><h3>'+name+'</h3><span class="time">'+time+'</span></div><p class="content">'+p+'</p></div>'
							}
						}
				
					more='<span class="have_more"><span class="moreIco"></span>点我有更多</span>';
				
					c++;
				}
				if(more===''){
					wrap='<img src="'+img+'"/>';
					}
				else{
					wrap='<a href="../message/reply-'+url+'"><img src="'+img+'"/></a>';
					}
				endHtml+='<li><div class="messageListBox clear" style=" opacity: 1; filter: alpha(opacity=100);"><div class="picture">'+wrap+more+'</div>'+html+'</li>';
				
		}
		oShowList.innerHTML=endHtml;
		oShowList.height=aLiList[aLiList.length-1].offsetTop+aLiList[aLiList.length-1].offsetHeight;
		var aSession=getByClass(oShowList,'messageListBox clear');
		var aReply=getByClass(oShowList,'article reply studentMBox');
		move(oMessageList,{opacity:100},false)
		move(aMessageList[0],{height:oShowList.height},false)
		for(var s=0;s<aSession.length;s++){
			(function (){
				aSession[s].iDeg=90;
				starMove(aSession[s],0,'webkitTransform','Y',16);
			})(s)
		}
		setTimeout(two,250);
		function two(){
			for(var r=0;r<aReply.length;r++){
				aReply[r].iDeg=-180;
				starMove(aReply[r],0,'webkitTransform','X',11);
				move(aReply[r],{opacity:100},false)
				}
			}

		/*创建A*/	
			oAlink.creatA(totalPage,pageNumber)
			for(var i=0;i<aBtnLink.length;i++){
				aBtnLink[i].pageMark=i+1;
				aBtnLink[i].onclick=function (){
					oShowList.innerHTML='';
					json={};
					pageNumber=0;
					pageSize=0;
					totalPage=0;
					totalRow=0;
					
					ajax('post', 'json-null-'+this.pageMark, 'session=jason&page=1'+Math.random(), function(data) {
						
						json =JSON.parse(data);
						
						creat()
					});
					
				}
				
				
			}
		/*创建A*/
	}
	/*分页A标签*/	
	var oAlink=document.getElementById('alink');
	var oFootC=document.getElementById('messageFootC');
	var aSpanFoot=oFootC.getElementsByTagName('span');
	
	oAlink.creatA=function (num,iNow){
		if(iNow === 1){
			if(iNow===num){
				aSpanFoot[0].style.display='none';aSpanFoot[1].style.display='none';aSpanFoot[2].style.display='none';aSpanFoot[3].style.display='none';
			}
			else{
				aSpanFoot[0].style.display='none';aSpanFoot[1].style.display='none';aSpanFoot[2].style.display='inline-block';aSpanFoot[3].style.display='inline-block';
				aSpanFoot[2].onclick=function (){
					
					ajax('post', 'json-null-'+(pageNumber+1), 'session=jason&page=1'+Math.random(), function(data) {
						
						json =JSON.parse(data);
						
						creat()
					});	
					
				};
				aSpanFoot[3].onclick=function (){
					
					ajax('post', 'json-null-'+(totalPage), 'session=jason&page=1'+Math.random(), function(data) {
						
						json =JSON.parse(data);
						
						creat()
					});	
					
				};
				
				
			}
		}
	else if(iNow===num){
		aSpanFoot[0].style.display='inline-block';aSpanFoot[1].style.display='inline-block';aSpanFoot[2].style.display='none';aSpanFoot[3].style.display='none';
		
		aSpanFoot[0].onclick=function (){
			
			ajax('post', 'json-null-'+1, 'session=jason&page=1'+Math.random(), function(data) {
				
				json =JSON.parse(data);
				
				creat()
			});	
			
		};
		aSpanFoot[1].onclick=function (){
			
			ajax('post', 'json-null-'+(pageNumber-1), 'session=jason&page=1'+Math.random(), function(data) {
				
				json =JSON.parse(data);
				
				creat()
			});	
			
		};
		
		
			}
	
	else{
		aSpanFoot[0].style.display='inline-block';aSpanFoot[1].style.display='inline-block';aSpanFoot[2].style.display='inline-block';aSpanFoot[3].style.display='inline-block';
		
		
		aSpanFoot[0].onclick=function (){
			
			ajax('post', 'json-null-'+1, 'session=jason&page=1'+Math.random(), function(data) {
				
				json =JSON.parse(data);
				
				creat()
			});	
			
		};
		aSpanFoot[1].onclick=function (){
			
			ajax('post', 'json-null-'+(pageNumber-1), 'session=jason&page=1'+Math.random(), function(data) {
				
				json =JSON.parse(data);
				
				creat()
			});	
			
		};
		aSpanFoot[2].onclick=function (){
			
			ajax('post', 'json-null-'+(pageNumber+1), 'session=jason&page=1'+Math.random(), function(data) {
				
				json =JSON.parse(data);
				
				creat()
			});	
			
		};
		aSpanFoot[3].onclick=function (){
			
			ajax('post', 'json-null-'+(totalPage), 'session=jason&page=1'+Math.random(), function(data) {
				
				json =JSON.parse(data);
				
				creat()
			});	
			
		};
		
		}
		this.innerHTML='';
		for(var a=0;a<num;a++){
			if(a==iNow-1){
			this.innerHTML+='<a href="javascript:;" class="messageA messageNub active">'+(a+1)+'</a>';
			}
			else{
			this.innerHTML+='<a href="javascript:;" class="messageA messageNub">'+(a+1)+'</a>';}
			}
		}
	
	var aBtnLink=oAlink.getElementsByTagName('a');
	
	/*分页A标签*/
	/*留言板选头像*/
		var oPhoto=document.getElementById('photo');
		var oImg= oPhoto.getElementsByTagName('img')[0];
		var aSrc=['../html/img/pic01.png','../html/img/pic02.png','../html/img/pic03.png','../html/img/pic04.png','../html/img/pic05.png','../html/img/pic06.png','../html/img/pic07.png'];
		var num=1;
		var iSrcNow=0;
		oImg.onclick=function (){
				if(num>aSrc.length-1){num=0;}
				iSrcNow=num;
				this.src=aSrc[num];
				num++;
			}	
	/*结束 留言板选头像*/

	var oGet=document.getElementById('sendAjax');
		
		oGet.onclick=function (){
			var oTheme=document.getElementById('theme');
			var oName=document.getElementById('name');
			var oContent=document.getElementById('content');
			var oPhone=document.getElementById('phone');
			var oCode=document.getElementById('code');
			picSrc=aSrc[iSrcNow];
			

			
			
			if(oCode.value===''||oContent.value===''||oPhone.value==='填电话或者邮箱'||oName.value==='输入名字或昵称'||oTheme.value==='输入主题或关于什么'){alert('有必填项目未填写！！请完善')}
			
			else{
			ajax('post', '../addMessage', 'message.title='+oTheme.value+'&message.name='+oName.value+'&message.content='+oContent.value+'&message.contact='+oPhone.value+'&message.photo='+picSrc+'&code='+oCode.value,function (data){
				var scheck='';
				scheck=JSON.parse(data);
				
				
				if(scheck=='112'){
					alert('很遗憾！您的验证码错误,请再填写一遍！！');
					
					oCode.value='';
					changecode()
					}
				else{
					alert('恭喜！您的留言提交成功了，请等待管理员回复吧！！');
				var dv='<div class="article leaveComments studentMBox"><span class="ico"></span><div class="title studentMBoxHead"><span class="titleIco"></span><h3>'+oName.value+'</h3><span class="theme">主题：'+oTheme.value+'</span></div><p class="content">'+oContent.value+'</p></div>'
				
				oShowList.innerHTML='<li><div class="messageListBox clear" style=" opacity: 1; filter: alpha(opacity=100); -webkit-transform: rotateY(0deg);"><div class="picture"><img src="'+picSrc+'"/></div>'+dv+'</li>'+oShowList.innerHTML;
				oShowList.height=aLiList[aLiList.length-1].offsetTop+aLiList[aLiList.length-1].offsetHeight;
				move(aMessageList[0],{height:oShowList.height},false)
				
				oTheme.value='输入主题或关于什么';
				oName.value='输入名字或昵称';
				oContent.value='';
				oPhone.value='填电话或者邮箱';
				oCode.value='';
				changecode()
				}
				})}
			}







/*缓冲运动*/
function starMove(obj,iTarget,attr,z,chu)
{
	if(obj.timer1)
	{
		clearInterval(obj.timer1);
	}
	obj.Z=z;
	obj.end=false;
	var iSpeed=0;
	obj.timer1=setInterval(
		function()
		{
			
			iSpeed+=(iTarget-obj.iDeg)/chu;
			iSpeed*=0.80;
			if(Math.abs(obj.iDeg-iTarget)<0.5 && Math.abs(iSpeed)<0.5)
			{
				clearInterval(obj.timer1);
				obj.iDeg=iTarget;
			}

			else
			{	
				obj.iDeg+=iSpeed;
			}
			setDeg(obj,attr);
		},24
	);
}
function setDeg(obj,attr)
{
	var obj;
	if(attr==='left'){
			with(obj.style)
		{
			left=obj.iNow+"px";
		}
	}
	else{
		obj.style.WebkitTransform="rotate"+obj.Z+"("+obj.iDeg+"deg)";
		obj.style.msTransform="rotate"+obj.Z+"("+obj.iDeg+"deg)";
		obj.style.mozTransform="rotate"+obj.Z+"("+obj.iDeg+"deg)";
		obj.style.oTransform="rotate"+obj.Z+"("+obj.iDeg+"deg)";
		obj.style.transform="rotate"+obj.Z+"("+obj.iDeg+"deg)";
	}
}
/*缓冲运动*/



/*简单运动*/
function move(obj,json,fn){
	clearInterval(obj.timer2);
	obj.timer2 = setInterval(function(){
		
		var bBtn = true;
		
		for(var attr in json){
			
			var iCur = 0;
			if(attr == 'opacity'){
				iCur = Math.round(getStyle(obj,attr)*100);
			}
			else if(attr=='zIndex'){obj.style[attr] = json[attr];}
			else{
				iCur = parseInt(getStyle(obj,attr));
			}
			
			var iSpeed = (json[attr] - iCur)/6;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
		
			if(iCur != json[attr]){
				
				bBtn = false;
			}
			
			if(attr == 'opacity'){
				obj.style.filter = 'alpha(opacity='+(iCur+iSpeed)+')';
				obj.style.opacity = (iCur + iSpeed)/100;
			}
			else{
				obj.style[attr] = iCur + iSpeed + 'px';
			}
		}
		
		if(bBtn){
			clearInterval(obj.timer2);
			fn && fn.call(obj);
		}
	},30);
}
function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
}
/*简单运动*/

function bufferMove(obj,iTarget)
{
	if(obj.timer1)
	{
		clearInterval(obj.timer1);
	}
	obj.off=true;
	var iSpeed=0;
	obj.timer1=setInterval(
		function()
		{
			iSpeed+=(iTarget-obj.iNow)/12;
			iSpeed*=0.80;
			if(Math.abs(obj.iNow-iTarget)<0.5 && Math.abs(iSpeed)<0.5)
			{
				clearInterval(obj.timer1);
				obj.iNow=iTarget;
				obj.off=false;
			}
			else
			{	
				obj.iNow+=iSpeed;
			}
			setLeft(obj);
		},24
	);
}
function setLeft(obj)
{
	var obj;
	with(obj.style)
	{
		left=obj.iNow+"px";
	}
}
/*缓冲运动*/


/*结束  留言板*/
		function getByClass(oParent,sClass){
		var aResult=[];
		var aEle=oParent.getElementsByTagName('*');
			for(var i=0;i<aEle.length;i++){
				if(aEle[i].className==sClass){
				aResult.push(aEle[i]);
				}
			}
			return aResult;
	}
};
