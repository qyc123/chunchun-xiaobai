/*图片轮播*/
	var imgUl1=document.getElementsByClassName("big-show")[0];
	var imgLi1=imgUl1.getElementsByTagName("li");
	var curIndex=0;
	var curIndex1=0;
	var i=0;
	var timer1=null;
	var timer2=null;
	var timer3=null;
	var dianUl1=document.getElementById("dian1");
	var dianLi1=dianUl1.getElementsByTagName("li");
	var imgUl2=document.getElementsByClassName("into-imgshow")[0];
	var imgLi2=imgUl2.getElementsByTagName("li");
	var dianUl2=document.getElementsByClassName("intoimg-dian")[0];
	var dianLi2=dianUl2.getElementsByTagName("li");
	imgUl1.style.width=imgLi1[0].offsetWidth*imgLi1.length+"px";
	 timer1=setInterval(changeImg,3000);
	timer3=setInterval(changeImg1,3000);
/*控制点*/
     for(i=0;i<dianLi1.length;i++){
		 dianLi1[i].index=i;
		 dianLi1[i].onmouseover=function(){
	        for(i=0;i<dianLi1.length;i++){
			   dianLi1[i].style.background="#ccc";
		    }
		      this.style.background="#f40";
			   clearInterval(timer1);
			   var that=this;
			  startMove(imgUl1,-imgLi1[0].offsetWidth*that.index);
		 };
		 dianLi1[i].onmouseout=function(){
			 curIndex=this.index;
			 timer1=setInterval(changeImg,3000);
		 }
	 }
	 for(i=0;i<dianLi2.length;i++){
		 dianLi2[i].index=i;
		 dianLi2[i].onmouseover=function(){
		  for(i=0;i<dianLi2.length;i++){
			   dianLi2[i].style.background="#ccc";
		    }
		      this.style.background="#f40";
			   clearInterval(timer1);
			   var that=this;
			  startMove(imgUl2,-imgLi2[0].offsetWidth*that.index);
		 };
		 dianLi2[i].onmouseout=function(){
			 curIndex1=this.index;
			 timer1=setInterval(changeImg,3000);
		 }
	 }
	 
/*控制块*/
    var leftSpan=document.getElementsByClassName("control-left")[0];
	var rightSpan=document.getElementsByClassName("control-right")[0];
	var leftSpan1=document.getElementsByClassName("intoimg-left")[0];
	var rightSpan1=document.getElementsByClassName("intoimg-right")[0];
	imgUl1.onmouseover=function(){
		clearTimeout(timer2);
		leftSpan.style.display=rightSpan.style.display="block";
	}
	imgUl1.onmouseout=function(){
		timer2=setTimeout(function(){
		    leftSpan.style.display=rightSpan.style.display="none";
		},500);
	}
	imgUl2.onmouseover=function(){
		clearTimeout(timer2);
		leftSpan1.style.display=rightSpan1.style.display="block";
	}
	imgUl2.onmouseout=function(){
		timer2=setTimeout(function(){
		    leftSpan1.style.display=rightSpan1.style.display="none";
		},500);
	}
	rightSpan.onmouseover=leftSpan.onmouseover=function(){
		clearTimeout(timer2);
		this.style.display="block";
	}
	rightSpan1.onmouseover=leftSpan1.onmouseover=function(){
		clearTimeout(timer2);
		this.style.display="block";
	}
	
	
	leftSpan.onclick=function(){
		clearTimeout(timer1);
		curIndex--;
		if(curIndex<0){
			curIndex=imgLi1.length-1;
		}
		for(i=0;i<dianLi1.length;i++){
			dianLi1[i].style.background="#ccc";
		}
		dianLi1[curIndex].style.background="#f40";
		startMove(imgUl1,-imgLi1[0].offsetWidth*curIndex);
		timer1=setInterval(changeImg,3000);
	}
	rightSpan.onclick=function(){
		clearTimeout(timer1);
		curIndex++;
		if(curIndex>imgLi1.length-1){
			curIndex=0;
		}
		for(i=0;i<dianLi1.length;i++){
			dianLi1[i].style.background="#ccc";
		}
		dianLi1[curIndex].style.background="#f40";
		startMove(imgUl1,-imgLi1[0].offsetWidth*curIndex);
		timer1=setInterval(changeImg,3000);
	}
	
	leftSpan1.onclick=function(){
		clearTimeout(timer3);
		curIndex1--;
		if(curIndex1<0){
			curIndex1=imgLi2.length-1;
		}
		for(i=0;i<dianLi2.length;i++){
			dianLi2[i].style.background="#ccc";
		}
		dianLi2[curIndex1].style.background="#f40";
		startMove(imgUl2,-imgLi2[0].offsetWidth*curIndex1);
		timer3=setInterval(changeImg,3000);
	}
	rightSpan1.onclick=function(){
		clearTimeout(timer3);
		curIndex1++;
		if(curIndex1>imgLi2.length-1){
			curIndex1=0;
		}
		for(i=0;i<dianLi2.length;i++){
			dianLi2[i].style.background="#ccc";
		}
		dianLi2[curIndex1].style.background="#f40";
		startMove(imgUl2,-imgLi2[0].offsetWidth*curIndex1);
		timer3=setInterval(changeImg,3000);
	}
	 
function startMove(obj,iTarget){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		  var iCur=parseInt(obj.offsetLeft);
		  var iSpeed=(iTarget-iCur)/8;
		  iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
		  if(iCur==iTarget){
			  clearInterval(obj.timer);
		  }
		  else{
			  obj.style.left=iCur+iSpeed+"px";
		  }
		  },30);
}
function changeImg1(){
	for(i=0;i<dianLi2.length;i++){
			dianLi2[i].style.background="#ccc";
		}
		if(curIndex1==imgLi2.length-1){
			curIndex1=0;
			imgUl2.style.left="0px";
		}else{
			curIndex1++;
		}
		dianLi2[curIndex1].style.background="#f40";
	    startMove(imgUl2,-imgLi2[0].offsetWidth*curIndex1);
}

function changeImg(){
		for(i=0;i<dianLi1.length;i++){
			dianLi1[i].style.background="#ccc";
		}
		if(curIndex==imgLi1.length-1){
			curIndex=0;
			imgUl1.style.left="0px";
		}else{
			curIndex++;
		}
		dianLi1[curIndex].style.background="#f40";
	    startMove(imgUl1,-imgLi1[0].offsetWidth*curIndex);
}