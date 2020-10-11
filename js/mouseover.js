$(document).ready(function () {
	//mouseover시 일어나는 effect	
	var $businessEle = $('.cj-business li');
	$businessEle.attr('tabindex', 0);
	
	//포커스와 마우스가 진입하면 클래스명 추가
	$businessEle.on('focus mouseenter', function () {
		$(this).addClass("on").siblings().removeClass("on");
	});
});