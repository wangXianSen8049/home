$(document).ready(function(){
	//鼠标悬停事件
	(function bb(){
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
	
	
	//添加产品
	
	(function product(){
		var _main1=document.getElementById("main1");
		ajaxRequest("post","json/produc8.json",false,null,function(data){
			var _data=JSON.parse(data);
			for(var k in _data){
			var _div=document.createElement("div");
			_div.style.width="273px";
			_div.style.height="350px";
			_div.style.float="left";
			_div.style.textAlign="center";
			_div.style.background="white";
			_div.style.margin="1px";
			var _img=document.createElement("img");
			_img.src=_data[k]["img"];
			var _p=document.createElement("p");
			_p.style.fontSize="20px";
			_p.innerHTML=_data[k]["name"];
			_div.appendChild(_img);
			_div.appendChild(_p);
			_main1.appendChild(_div);
				
				
			}
			
			
		});
	})();
	
});