// JavaScript Document
window.onload=function(){
	/*头部登录动态效果*/
	var pic_header1=document.getElementById("pic_header1_1");
	pic_header1.onmouseover=function(){
		var show=this.getElementsByTagName("ul")[0];
		if(show){
			var This=show;
			clearInterval(This.timer)
			This.timer=setInterval(function(){
				This.style.height=This.offsetHeight+8+'px';
				if(This.offsetHeight>=52.5){
					clearInterval(This.timer);
					}
				
				},30)
			}
		
		}
	pic_header1.onmouseout=function(){
		var hidden=this.getElementsByTagName("ul")[0];
		if(hidden){
			var This=hidden;
			clearInterval(This.timer);
			This.timer=setInterval(function(){
				This.style.height=This.offsetHeight-8+'px';
				if(This.offsetHeight=0){
					clearInterval(This.timer);
					}
				},30)
			
			}
		
		}
	/*导航栏的动态效果*/
	var nav_1=document.getElementById("nav");
	var list=nav_1.getElementsByTagName("a");
        for(var i=0;i<list.length;i++){
			list[i].onmouseover=function(){
				var This=this;
				clearInterval(This.time);
				This.time=setInterval(function(){
					This.style.width=This.offsetWidth+8+'px';
					if(This.offsetWidth>=120){
						clearInterval(This.time);
						}
					},30)
				
				}
			list[i].onmouseout=function(){
				var This=this;
				clearInterval(This.time);
				This.time=setInterval(function(){
					This.style.width=This.offsetWidth-8+'px';
					if(This.offsetWidth<=103){
						This.style.width='103px';
						clearInterval(This.time);
						}
					},30)
				}
				/*时间定义的函数*/
				showTime();
				
				
				
				/*首页导航滚动条信息的效果*/
				area=document.getElementById("scrollBox");
				var con1=document.getElementById("con1");
				var con2=document.getElementById("con2");
				area.scrollTop=0;
				con2.innerHTML=con1.innerHTML;
				var myscrollUp=setInterval("scrollUp()",speed);
				area.onmouseover=function(){
				   clearInterval(myscrollUp);
				}
				area.onmouseout=function(){
				 myscrollUp=setInterval("scrollUp()",speed);
				}
			}
			
		
			
		/*通过父类获取子类的方法*/
	    function getByClass(clsName,parent){
		   var oParent=parent?document.getElementById(parent):document,
		   eles=[],
		   elements=oParent.getElementsByTagName('*');
		   for(var i=0;i<elements.length;i++){
			   eles.push(elements[i]);
			   }
			   return eles;
		   }
		   
		   
		   /*首页四块图片的动态效果*/
           var oleft_1=document.getElementById("left_1"),
		       imgs=oleft_1.getElementsByTagName("div");
		   for(var i=0;i<imgs.length;i++){
			   imgs[i].timer=null;
			   imgs[i].onmouseover=function(){
				   startMove(this,"opacity",30);
				   }
				   imgs[i].onmouseout=function(){
					   startMove(this,"opacity",0);
					   }
			   }
	}
			 /*获取类的样式*/
		   function getStyle(obj,attr){
			   if(obj.currentStyle){
				   return obj.currentStyle[attr];
				   }else{
					   return getComputedStyle(obj,false)[attr];
					   }
			   
			   }
	function startMove(obj,attr,iTarget,fn){
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			var icur=null;
			if(attr=='opacity'){
				icur=Math.round(parseFloat(getStyle(obj,attr))*100);
				}else{
					icur=parseInt(getStyle(obj,attr));
					}
			 var speed=(iTarget-icur)/8;
			     speed=speed>0?Math.ceil(speed):Math.floor(speed);
				 if(icur==iTarget){
					 clearInterval(obj.timer);
					 if(fn){
						 fn();
						 }
					 }else{
						 if(attr=='opacity'){
					obj.style.filter='alpha(opacity:'+(icur+speed)+')';
					obj.style.opacity=(icur+speed)/100;
							 }else{
						 obj.style[attr]=icur+speed+'px';
							 }
						 }
			},30)
		}
		
		/*时间的定义*/
		//检查时间的分和秒
		function checkTime(i){
			if(i<10){
				i="0"+i;
				}
				return i;
			}
		function showTime(){
			var myDate=new Date(),
			    year=myDate.getFullYear(),
			    month=myDate.getMonth()+1,
				date=myDate.getDate(),
				day=myDate.getDay(),
				h=myDate.getHours(),
				m=myDate.getMinutes(),
				s=myDate.getSeconds();
				m=checkTime(m);
				s=checkTime(s);
				var weekend=new Array(7);
				weekend[0]="星期日";
				weekend[1]="星期一";
				weekend[2]="星期二";
				weekend[3]="星期三";
				weekend[4]="星期四";
				weekend[5]="星期五";
				weekend[6]="星期六";
				document.getElementById("time").innerHTML=year+"年"+month+"月"+date+"日"+weekend[day]+" "+h+":"+m+":"+s;
				setTimeout(showTime,500);
			}
			
		    /*首页右边的滚动条效果*/
			var speed=80;
             var area;
			 function scrollUp(){
				if(area.scrollTop>=con1.scrollHeight){
			    area.scrollTop=0;
					}else{
				area.scrollTop++;
				}
			 }
				