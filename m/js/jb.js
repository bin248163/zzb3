
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?5ede328100fe9143ec5237e3c1611d32";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

console.log('%c霸屏科技\n真正做事，对结果负责','color:#444');
console.log('%chttp://bapingyun.com/','color:#f00');
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
    
   
    
});