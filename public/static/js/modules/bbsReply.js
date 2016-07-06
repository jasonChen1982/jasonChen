// JavaScript Document
define(function(require,exports,module){
	var json={};
	var pageNumber=0;
	var pageSize=0;
	var totalPage=0;
	var totalRow=0;	
		
	//请求留言数据		
	function getMessage(pNum){

		require("./replyAbout.js").creatBlank();
		$(window).on("scroll",showListIn)
		$.ajax({
			type: 'POST',
			url:"/getMessage",
			data: {
				pNum: pNum
			},
			success: function (data){
				json =eval(data);
				pageNumber=json.pn;
				pageSize=json.much;
				totalPage=json.pMuch;
				totalRow=json.count;
				creat();
			}
		});
	}
	
	//为创建每条留言获取元素
	var oMessageList=document.getElementById('MessageList');
	var aMessageList=getByClass(oMessageList,'messageList');
	var oShowList=document.getElementById('showList');
	var aLiList=oShowList.getElementsByTagName('li');
	var iNowPage=1;
	var endHtml='';
	
	//创建留言的函数
	function creat(){
		require("./topicManage.js").creat(json)


		move(oMessageList,{opacity:100},false)
		move(aMessageList[0],{height:$("#messageList").height($("#showList").height()+20)},false)

		showListInit();
		showListIn();

		/* 创建A */	
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
				
				$.ajax({
					type: 'POST',
					url:"/getMessage",
					data: {
						pNum: this.pageMark
					},
					success: function (data){
						json =eval(data);
						creat();
					}
				});
				
			}
		}
		/* 结束 创建A */
	}


	var aShowListBuffer = [];

	function showListInit(){
		var aShowList = $("#showList li");
		var aListHeight = aShowList.length;
		for(var i=0;i<aListHeight;i++){
			aShowListBuffer[i] = {
				first: aShowList.eq(i).find(".messageListBox"),
				second: aShowList.eq(i).find(".reply").length > 0 ? aShowList.eq(i).find(".reply"): "",
				open: false
			};
		}
	}

	function showListIn(){
		var length=aShowListBuffer.length;
		var wHeight = $(window).height();
		var scrollTop = $(window).scrollTop();

		for(var i=0;i<length;i++){
			var unit = aShowListBuffer[i].first,
				top = unit.offset().top,
				heightHalf = unit.height()/2;
			if( top-wHeight+heightHalf < scrollTop && !aShowListBuffer[i].open){
				aShowListBuffer[i].open = true;
				var oSession = aShowListBuffer[i].first.get(0);
				var oReply = aShowListBuffer[i].second;
				oSession.iDeg=90;
				starMove(oSession,0,'webkitTransform','Y',16);
				if(oReply){
					(function (oReply){
						setTimeout(function(){
							oReply.iDeg=-180;
							starMove(oReply,0,'webkitTransform','X',11);
							move(oReply,{opacity:100},false)
						},250)
					})(oReply.get(0))
				}
				
			}
		}
	}
/*分页A标签*/	
	var oAlink=document.getElementById('alink');
	var oFootC=document.getElementById('messageFootC');
	var aSpanFoot=oFootC.getElementsByTagName('span');
	
	oAlink.creatA=function (num,iNow){
		if(iNow === 1){
			if(iNow===num){
				aSpanFoot[0].style.display='none';aSpanFoot[1].style.display='none';aSpanFoot[2].style.display='none';aSpanFoot[3].style.display='none';
			}else{
				aSpanFoot[0].style.display='none';aSpanFoot[1].style.display='none';aSpanFoot[2].style.display='inline-block';aSpanFoot[3].style.display='inline-block';
				aSpanFoot[2].onclick=function (){

					$.ajax({
						type: 'POST',
						url:"/getMessage",
						data: {
							pNum: pageNumber+1
						},
						success: function (data){
							json =eval(data);
							creat();
						}
					});
					
				};
				aSpanFoot[3].onclick=function (){

					$.ajax({
						type: 'POST',
						url:"/getMessage",
						data: {
							pNum: totalPage
						},
						success: function (data){
							json =eval(data);
							creat();
						}
					});
					
				};
				
				
			}
	}else if(iNow===num){
		aSpanFoot[0].style.display='inline-block';aSpanFoot[1].style.display='inline-block';aSpanFoot[2].style.display='none';aSpanFoot[3].style.display='none';
		
		aSpanFoot[0].onclick=function (){

			$.ajax({
				type: 'POST',
				url:"/getMessage",
				data: {
					pNum: 1
				},
				success: function (data){
					json =eval(data);
					creat();
				}
			});
			
		};
		aSpanFoot[1].onclick=function (){
			
			$.ajax({
				type: 'POST',
				url:"/getMessage",
				data: {
					pNum: pageNumber-1
				},
				success: function (data){
					json =eval(data);
					creat();
				}
			});
			
		};
		
		
	}else{
		aSpanFoot[0].style.display='inline-block';aSpanFoot[1].style.display='inline-block';aSpanFoot[2].style.display='inline-block';aSpanFoot[3].style.display='inline-block';
		
		
		aSpanFoot[0].onclick=function (){
			
			$.ajax({
				type: 'POST',
				url:"/getMessage",
				data: {
					pNum: 1
				},
				success: function (data){
					json =eval(data);
					creat();
				}
			});
			
		};
		aSpanFoot[1].onclick=function (){
			
			$.ajax({
				type: 'POST',
				url:"/getMessage",
				data: {
					pNum: pageNumber-1
				},
				success: function (data){
					json =eval(data);
					creat();
				}
			});
			
		};
		aSpanFoot[2].onclick=function (){
			
			$.ajax({
				type: 'POST',
				url:"/getMessage",
				data: {
					pNum: pageNumber+1
				},
				success: function (data){
					json =eval(data);
					creat();
				}
			});	
			
		};
		aSpanFoot[3].onclick=function (){
				
			$.ajax({
				type: 'POST',
				url:"/getMessage",
				data: {
					pNum: totalPage
				},
				success: function (data){
					json =eval(data);
					creat();
				}
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
	
/* 结束  分页A标签 */


$(document).delegate(".picture","click",function(){
	var mark = this.dataset.topic,
		sjson;
	if(mark){
		sjson = getMessageById(json.message,mark)
		require("./replyManage.js").creat(sjson)
		require("./replyAbout.js").addBlank(mark)

		move(oMessageList,{opacity:100},false)
		move(aMessageList[0],{height:$("#messageList").height($("#showList").height())},false)


		showListInit();
		showListIn();
	}
});

function getMessageById(json,id){
	for(var i=0;i<json.length;i++){
		if(json[i]._id == id){
			return json[i];
		}
	}
}




/* 缓冲运动 */
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
		obj.style.mozTransform="rotate"+obj.Z+"("+obj.iDeg+"deg)";
		obj.style.msTransform="rotate"+obj.Z+"("+obj.iDeg+"deg)";
		obj.style.oTransform="rotate"+obj.Z+"("+obj.iDeg+"deg)";
		obj.style.transform="rotate"+obj.Z+"("+obj.iDeg+"deg)";
	}
}
/* 结束 缓冲运动 */



/* 简单运动 */
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

function offWindow(){
	$(window).off("scroll",showListIn)
}

/* 结束  简单运动 */
/* 结束  留言板 */

	exports.getMessage = getMessage;
	exports.offWindow = offWindow;


});