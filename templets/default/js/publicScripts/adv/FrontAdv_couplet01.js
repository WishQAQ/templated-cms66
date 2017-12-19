//判断是否有对联广告
if (!window.$initialized_adv_couplet) {
	window.$initialized_adv_couplet = true;

//取当前浏览器显示left
window.getScrollLeft = window.getScrollLeft || function(){
	return this.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
};

//取当前浏览器显示top
window.getScrollTop = window.getScrollTop || function(){
	return this.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
};

//取当前浏览器显示width
window.getWidth = window.getWidth || function() {
	return this.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
};

//取当前浏览器显示height
window.getHeight = window.getHeight || function() {
	return this.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
};

//判断浏览器类型，IE或者其他的
var userAgent = navigator.userAgent.toLowerCase();

//对联广告js方法定义
var FrontAdv_couplet01={

 
//设置对联广告根据浏览器显示位置，显示对联广告当前位置。
 $couple:function(el1, el2, l, r, t, relative) {
	 /*var imgWidth=el2.childNodes[1].childNodes[1].childNodes[1].width;
	if(imgWidth=='')
	{
		imgWidth=0;
	}
	el2.style.right = (r+imgWidth+10)+'px';
	
	el1.style.position = 'absolute';
	el1.style.left = l+'px';
	el1.style.top = t+'px';
	el2.style.position = 'absolute';

	if(userAgent.indexOf("firefox")>=1){
		el2.style.left = (window.getWidth() - r - 21 - parseInt(el2.getAttribute("width"))) +'px';
	}else{
		el2.style.left = (window.getWidth() - r - parseInt(el2.getAttribute("width"))) +'px';
	}

		
	el2.style.top =  t+'px';
	if (relative) {
		el1.style.top = (window.getScrollTop() + t) +'px';
		el2.style.top = (window.getScrollTop() + t)+'px';

		function adjust() {
			el1.style.top = (window.getScrollTop() + t) +'px';
			el2.style.top = (window.getScrollTop() + t)+'px';
			el1.style.left = (window.getScrollLeft()+l)+'px';
			el2.style.left = (window.getWidth() + window.getScrollLeft() - r - parseInt(el2.getAttribute("width"))) +'px';
			if(userAgent.indexOf("firefox")>=1){
				el2.style.left = (window.getWidth() - r - 21 - parseInt(el2.getAttribute("width"))) +'px';
			}else{
				el2.style.left = (window.getWidth() - r - parseInt(el2.getAttribute("width"))) +'px';
			}

		}

		$(window).scroll(adjust);
		$(window).resize(adjust);
	}  */
	var _f = function() {
		var e = el1.parentNode;
		e.parentNode.removeChild(e);
	};
	var closes = el1.parentNode.getElementsByTagName("div");
	for (var i=0, _e; _e=closes[i]; i++) {
		if (/shut/.test(_e.className)) _e.onclick = _f;
	}
 },

 init:function(s){
 	var cs = document.getElementsByTagName("div");
	for (var i=0, c; c=cs[i]; i++) {
		if (c.className.indexOf("FrontAdv_couplet01-div") > -1) {
			var children = [];
			for (var j=0, item; item = c.childNodes[j]; j++) {
				if (item.className && /adv_couplet/.test(item.className)) children.push(item);
			}
			FrontAdv_couplet01.$couple(
					children[0],
					children[1],
					parseInt(c.getAttribute('left')||0),
					parseInt(c.getAttribute('right')||0),
					parseInt(c.getAttribute('top')||0),
					c.getAttribute('manner') == 'relative'
				);
		}
	}
 }
}

}


