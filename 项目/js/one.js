$(document).ready(function(){
	a();
	function a(){
		
		$(".banner_in").delay(2000)
		.animate({"left":"-1423px"},1000,"swing").delay(2000)
		.animate({"left":"-2846px"},1000,"swing").delay(2000)
		.animate({"left":"-4269px"},1000,"swing").delay(2000)
		.animate({"left":"-5692px"},1000,"swing").delay(2000)
		.animate({"left":"-7115px"},1000,"swing")
		.animate({"left":"0px"},-100,function(){a();});
	}
	
	(function b(){
		var img =document.getElementById("img");
		var s2=document.getElementById("s2");
		var chan=document.getElementById("chan");
		var product=document.getElementById("product");
		chan.onmousemove=function(){
			product.style.display="block";
		}
		product.onmousemove=function(){
			product.style.display="block";
		}
		
		chan.onmouseout=function(){
			product.style.display="none";
		}
		product.onmouseout=function(){
			product.style.display="none";
		}
		s2.onmousemove=function(){
			img.style.display="block";
		}
		s2.onmouseout=function(){
			img.style.display="none";
		}
	})();
	//滚轮事件
	document.body.onmousewheel = function(event) {
    event = event || window.event;
	    var foot=document.getElementById("font_out");
	    var aa=document.getElementById("aa");
	    if(window.scrollY>=500){
	    	foot.style.zIndex="-1";
	    	aa.style.display="block";
	    }else{
	    	foot.style.zIndex="-3";
	    	aa.style.display="none";
	    }
	};
	
	
	
	
	
	
	
	
	
	
});



