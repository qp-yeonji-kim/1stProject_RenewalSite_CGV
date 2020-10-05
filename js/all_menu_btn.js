$(document).ready(function () {
  //전체메뉴 열기와 닫기
  $('.all_menu_btn').on('click', function () {
    if ($(this).hasClass('close')) { //닫기
      $('.all_menu').animate({opacity: 0}, 300, function () {
        $(this).css({display: 'none', top: 150}).removeClass('active');
        $('.all_menu_btn').removeClass('close').children('.blind-b').text('전체메뉴 열기');
      });
    } else {  //열기
      $(this).toggleClass('close').children('.blind-b').text('전체메뉴 닫기');
      $('.all_menu').addClass('active').css('display', 'block').delay(500).animate({opacity: 1, top: 100}, 500);
		}
		
		//메뉴가 열린 채로 회원가입과 예약하기에서 포커스가 나가면 메뉴를 닫아주자
		$('.util a:first, .util a:last').on('blur', function () {
			//이탈된 포커스를 누군가 받아줄 대기 시간을 지정 - setTimeout
			setTimeout(function () {
			//.util 내부의 a가 아닌 위치에 포커스가 가면 초기화 시키기 => .util 내부의 a가 포커스를 가지고 있지 않다면...
			if ( !$('.util a').is(':focus') ) $('.all_menu_btn').trigger('click');  
			}, 10);
		});		

    return false;
  });

	/* 패밀리사이트 */
	var $family=$("#footer .family");
	var $btn = $family.find("a").first();		//depth1 a:Family Site라는 텍스트가 담긴 링크
	var $btnSubmit =	$family.find("a").last();		//확인(새창열기 버튼)
	var tgHref;
	
	//1-1) $btn을 클릭해서 ul 태그 열어주기
	$btn.on("click",function  (e) {
		e.preventDefault();

		$(this).next().stop().show().parent().addClass('on');

		//1-2) ul 태그에서 마우스가 떠나면 닫아주기
		$(this).next().on("mouseleave",function  () {
			$(this).stop().hide().parent().removeClass('on');
		});

		//1-3) focus가 family 내부에 있지 않을 경우 닫아주기
		$family.find("a:first , a:last").on("blur",function  () {
			setTimeout(function  () {
				if (!$family.find("a").is(":focus")) $family.find(">ul").stop().hide();
			}, 1000);
		});

		//2) ul li a를 클릭하면 자신의 텍스트와 href를 변수에 담아 $btn에 글자를 강제로 바꾼다=> ul 태그 닫아주기
		$family.find(">ul>li>a").on("click",function  (e) {
			e.preventDefault();
			var tgTxt=$(this).text();
			tgHref=$(this).attr("href");
			//console.log(tgTxt, tgHref);

			$btn.text(tgTxt).focus().next().stop().show();
		});
	});

	//3) 확인버튼 눌러 페이지 이동시키기
	$btnSubmit.on("click",function  (e) {
		e.preventDefault();
		if ($btn.text()=="Family Site") return false;

		//window.open("열려질 새창의 경로명","팝업창 이름","옵션");
		window.open(tgHref, "popup");
	});

	// top 이동 버튼
	$(".btn_top").on("click", function () {
		$("html, body").stop().animate({scrollTop: 0});
		return false;
	});

});