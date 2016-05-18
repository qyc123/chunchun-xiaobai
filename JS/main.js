//头部二级菜单
//获取对象

window.onload=function(){
	var arrowBox=document.getElementsByName("arrow-box");
    var toggleBox=document.getElementsByName("toggle-box");
    var downBox=document.getElementsByClassName("down-icon");
    var i=0;
    var timer=null;
	for(i=0;i<arrowBox.length;i++){
		arrowBox[i].index=i;
		arrowBox[i].onmouseover=function(){
			toggleBox[this.index].style.display="block";
			downBox[this.index].classList.add("run-up");
		};
		toggleBox[i].onmouseout=arrowBox[i].onmouseout=function(){
			for(i=0;i<arrowBox.length;i++){
				toggleBox[i].style.display="none";
			}
			downBox[this.index].classList.remove("run-up");
			downBox[this.index].classList.add("run-down");
		};
	}
	for(i=0;i<toggleBox.length;i++){
		toggleBox[i].index=i;
		toggleBox[i].onmouseover=function(){
			this.style.display="block";
			downBox[this.index].classList.add("run-up");
			
		};
	}
	
	
	
	/*user-box左右切换*/
	var cardDiv=document.getElementsByClassName("cards-info")[0];
	var cardUl=cardDiv.getElementsByTagName("ul")[0];
	var cardLeft=document.getElementsByClassName("cards-left")[0];
	var cardRight=document.getElementsByClassName("cards-right")[0];
	cardLeft.onclick=function(){
       startMove(cardUl,-cardUl.offsetWidth/2);
	}
	cardRight.onclick=function(){
		startMove(cardUl,0);
	}


    /*搜索框菜单*/
	var firstBox=document.getElementsByClassName("first")[0];
	var secondBox=document.getElementsByClassName("second")[0];
	var downBox1=firstBox.getElementsByClassName("down-icon")[0];
	var first_Box=document.getElementsByClassName("first1")[0];
	var second_Box=document.getElementsByClassName("second1")[0];
	var down_Box=first_Box.getElementsByClassName("down-icon")[0];
	secondBox.onmouseover=firstBox.onmouseover=function(){
		searchOver(secondBox,downBox1);
	};
	secondBox.onmouseout=firstBox.onmouseout=function(){
		searchOut(secondBox,downBox1);
	};
	second_Box.onmouseover=first_Box.onmouseover=function(){
		searchOver(second_Box,down_Box);
	};
	second_Box.onmouseout=first_Box.onmouseout=function(){
		searchOut(second_Box,down_Box);
	};
	
	/*关闭二维码*/
	var closeCode=document.getElementsByClassName("top-search-close")[0];
	var closeSpan=closeCode.getElementsByTagName("span")[0];
	closeSpan.onclick=function(){
		closeCode.style.display="none";
	};
	
	
	/*主内容左侧导航*/
	var menuNav=document.getElementsByClassName("tole-nav")[0];
	var menuUl=document.getElementsByClassName("tole-menu")[0];
	var menuLi=menuNav.getElementsByTagName("li");
	var conLi=document.getElementsByClassName("menu-visible");
	for(i=0;i<menuLi.length;i++){
		menuLi[i].index=i;
	  menuLi[i].onmouseover=function(){
		 clearTimeout(timer);
		var that=this;
		timer=setTimeout(function(){
			menuUl.style.display="block";
		    conLi[that.index].style.display="block";
		},100);
	  };
	
	  menuLi[i].onmouseout=function(){
		  clearTimeout(timer);
		 timer=setTimeout(function(){
			 menuUl.style.display="none";
		  for(i=0;i<menuLi.length;i++){
			  conLi[i].style.display="none";
		  }
		 },300);
		  
	  };
	}
	  
	
	for(i=0;i<conLi.length;i++){
		conLi[i].index=i;
	    conLi[i].onmouseover=function(){
			conLi[i].style.display="block";
		}
	}
	
	
	/*选项卡*/
	var actBox=document.getElementsByClassName("ac1-title")[0];
	var actLi=actBox.getElementsByTagName("li");
	var acoBox=document.getElementsByClassName("ac1-content")[0];
	var acoLi=acoBox.getElementsByTagName("li");
	for(i=0;i<actLi.length;i++){
		actLi[i].index=i;
		actLi[i].onmouseover=function(){
			for(i=0;i<actLi.length;i++){
				actLi[i].className="act1-text";
				acoLi[i].style.display="none";
			}
			this.classList.add("actactive");
			acoLi[this.index].style.display="block";
			
		}
	}
	
	/*弹出框*/
	var ac3Box=document.getElementsByClassName("ac3-content")[0];
	var ac3Li=ac3Box.getElementsByTagName("li");
	var chongBox=document.getElementsByClassName("chongzhi-box")[0];
	var closeChong=chongBox.getElementsByClassName("close-img")[0];
	var ac3Result=[];
	for(i=0;i<4;i++){
		ac3Result[i]=ac3Li[i];
	}
	for(i=0;i<ac3Result.length;i++){
		ac3Result[i].onclick=function(){
			chongBox.style.display="block";
		}
	}
	closeChong.onclick=function(){
		chongBox.style.display="none";
	}

function searchOver(obj1,obj2){
	obj1.style.display="block";
	obj2.classList.add("run-up");
}
function searchOut(obj1,obj2){
	    obj1.style.display="none";
		obj2.classList.remove("run-up");
		obj2.classList.add("run-down");
}
	
	
	
	/*隐藏菜单*/
	var moreButton=document.getElementsByClassName("morebutton1")[0];
	var hiddenMenu=document.getElementsByClassName("tofonav-wrapper2")[0];
	var moreButton1=document.getElementsByClassName("morebutton2")[0];
	var oldHtml=moreButton.innerHTML;
	moreButton.onclick=function(){
		this.innerText="孕婴童";
		this.style.background="#fff";
		this.style.color="#6c6c6c";
		hiddenMenu.style.visibility="visible";
	}
	moreButton1.onclick=function(){
		moreButton.innerHTML=oldHtml;
		moreButton.style.background="#f40";
		moreButton.style.color="#fff";
		hiddenMenu.style.visibility="hidden";
	}
	
	/*微淘隐藏*/
	var productBox=document.getElementsByClassName("tale-products");
	var weiTao=document.getElementsByClassName("orange weitao-visible");
	for(i=0;i<productBox.length;i++){
		productBox[i].index=i;
		productBox[i].onmouseover=function(){
			weiTao[this.index].style.display="block";
		}
		productBox[i].onmouseout=function(){
			for(i=0;i<productBox.length;i++){
				weiTao[i].style.display="none";
			}
		}
	}
	/*关注隐藏*/
	var weitaoBox=document.getElementsByClassName("weitao-content");
	var guanzhuBox=document.getElementsByClassName("head-gray guanzhu");
	for(i=0;i<weitaoBox.length;i++){
		weitaoBox[i].index=i;
		weitaoBox[i].onmouseover=function(){
			guanzhuBox[this.index].style.display="block";
		}
		weitaoBox[i].onmouseout=function(){
			for(i=0;i<weitaoBox.length;i++){
				guanzhuBox[i].style.display="none";
			}
		}
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
};

window.onscroll=function(){
	/*滚动框*/
	 
function getScrollTop(){
	var scrollTop=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
	return scrollTop;
}

var scrollSearch=document.getElementsByClassName("scroll-search")[0];
var bottomBox=document.getElementsByClassName("tari-bottom")[0];
var scrollTop=getScrollTop();

	if(scrollTop>66){
		scrollSearch.style.display="block";
		
	}else{
		scrollSearch.style.display="none";
	}

};
		


