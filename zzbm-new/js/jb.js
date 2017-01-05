console.log('%c霸屏科技\n真正做事，对结果负责','color:#444');
console.log('%chttp://bapingyun.com/','color:#f00');
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?1aa9f98fc3b6dec4380a8f42f0ddda72";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

$(function(){
  var $na=$('#na');
	var $navw=$('#nav-w');
	var $navl=$('#nav-l');
	var $x=$('#x');
	var $top = $('#top'); 
	$(window).scroll(function() {
		if ($(window).scrollTop() > 400) {
			$top.fadeIn(500); //一秒渐入动画
		} else {
			$top.fadeOut(500); //一秒渐隐动画
		}
	});
  $top.click(function() {
		var speed = 300; //滑动的速度
		$('body,html').animate({
			scrollTop: 0
		}, speed);
		return false;
	});
	var $tabx1list=$("#group1 li a");
    var $tabx1=$("#group1-c");
	$na.click(function(){
		$navw.animate({left:'30%'},200);
		$navl.show();
	});
	$navl.click(function(){
		$navw.animate({left:'100%'},200);
		$(this).hide();
	});
	$x.click(function(){
		$navw.animate({left:'100%'},200);
		$navl.hide();
	});
    
    if($('#demo')[0]) {
    var speed=50; //数字越大速度越慢
	var t=$('#demo')[0];
	var t1=$('#demo1')[0];
	var t2=$('#demo2')[0];
	t2.innerHTML=t1.innerHTML;
	function Marquee(){
	if(t2.offsetWidth-t.scrollLeft<=0)
	t.scrollLeft-=t1.offsetWidth
	else{
	t.scrollLeft++;
	}
	}
	var MyMar=setInterval(Marquee,speed);
	t.onmouseover=function() {clearInterval(MyMar)};
	t.onmouseout=function() {MyMar=setInterval(Marquee,speed)};
    } else{
    	return false;
    }
  
    
});