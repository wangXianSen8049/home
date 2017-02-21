
function lose(){
	var fa1=document.getElementById("father1");
	var img =document.getElementById("img");
	var timer=0;
	var _opacity=1;
	(function start(){
		window.clearTimeout(timer);
		_opacity-=0.1;
		img.style.opacity=_opacity;
		if(_opacity>0){
			timer=window.setTimeout(start,30);
		}else{
			fa1.style.display="none";
		}
	})();

	
}

function chu4(){
	var tt=document.getElementById("tt");
	tt.style.display="block";
	
	}

function chu3(){
	var img1 =document.getElementById("dao");
	img1.style.display="block";
	img1.style.borderTop="none";
	var d1=document.getElementById("d1");
	d1.style.background="white";
	d1.style.borderLeft="1px solid #dcdcdc";
	d1.style.borderRight="1px solid #dcdcdc";
}
function chu2(){
	var ke =document.getElementById("ke");
	ke.style.display="block";
	ke.style.borderTop="none";
	var c1=document.getElementById("c1");
	c1.style.background="white";
	c1.style.borderLeft="1px solid #dcdcdc";
	c1.style.borderRight="1px solid #dcdcdc";
}
function chu1(){
	var dong=document.getElementById("dong");
	dong.style.display="block";
	dong.style.borderTop="none";
	var b1=document.getElementById("b1");
	b1.style.background="white";
	b1.style.borderLeft="1px solid #dcdcdc";
	b1.style.borderRight="1px solid #dcdcdc";
	
}
function chu(){
	
	var cheng=document.getElementById("cheng");
	cheng.style.display="block";
	cheng.style.borderTop="none";
	var ss=document.getElementById("ss");
	ss.style.background="white";
	ss.style.borderLeft="1px solid #dcdcdc";
	ss.style.borderRight="1px solid #dcdcdc";
	
	
function xiao4(){
	var tt =document.getElementById("tt");
	tt.style.display="none";
	
}	
	
}
function xiao3(){
	var img1 =document.getElementById("dao");
	img1.style.display="none";
	var d1=document.getElementById("d1");
	d1.style.background="#e3e4e5";
	d1.style.borderLeft="none";
	d1.style.borderRight="none";
}
function xiao2(){
	var ke=document.getElementById("ke");
	ke.style.display="none";
	var c1=document.getElementById("c1");
	c1.style.background="#e3e4e5";
	c1.style.borderLeft="none";
	c1.style.borderRight="none";
}
function xiao1(){
	var dong=document.getElementById("dong");
	dong.style.display="none";
	var b1=document.getElementById("b1");
	b1.style.background="#e3e4e5";
	b1.style.borderLeft="none";
	b1.style.borderRight="none";
}
function xiao(){
	var cheng=document.getElementById("cheng");
	cheng.style.display="none";
	var ss=document.getElementById("ss");
	ss.style.background="#e3e4e5";
	ss.style.borderLeft="none";
	ss.style.borderRight="none";
	
	
}

function addEven(){
	
	var span=document.getElementById("span");
	span.onclick=lose;
	document.getElementById("ss").onmouseover=chu;
	document.getElementById("ss").onmouseout=xiao;
	document.getElementById("cheng").onmouseover=chu;
	document.getElementById("cheng").onmouseout=xiao;
	
	
	
	document.getElementById("b1").onmousemove=chu1;
	document.getElementById("b1").onmouseout=xiao1;
	document.getElementById("dong").onmouseover=chu1;
	document.getElementById("dong").onmouseout=xiao1;
	
	document.getElementById("c1").onmousemove=chu2;
	document.getElementById("c1").onmouseout=xiao2;
	document.getElementById("ke").onmouseover=chu2;
	document.getElementById("ke").onmouseout=xiao2;
	
	document.getElementById("d1").onmousemove=chu3;
	document.getElementById("d1").onmouseout=xiao3;
	document.getElementById("img1").onmouseover=chu3;
	document.getElementById("img1").onmouseout=xiao3;
	
	
	
	document.getElementById("zz").onmousemove=chu4;
	document.getElementById("zz").onmouseout=xiao4;
}
window.onload=function(){
   addEven();
}
