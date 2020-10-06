$(document).ready(function () {
	//1. gnb
	var $gnb=$("#gnb > ul");
			
	$gnb.find("li ul").hide();	//depth2의 ul 태그는 자동으로 숨기고 시작

	//1)depth1 <a>에 마우스 진입:mouseenter, focus
	$gnb.find("> li > a").on("mouseenter focus",function  () {
		//초기화
		$gnb.find("> li.on").removeClass("on").children("ul").hide();
		//현재설정
		$(this).next().show().parent().addClass("on");
	});

	//2)nav에서 마우스 떠나기:mouseleave
	$gnb.on("mouseleave",function  () {
		//초기화
		$gnb.find("> li.on").removeClass("on").children("ul").hide();
	});

	//3)blur: shift탭을 눌러서 gnb에서 포커스가 나가던지, 탭을 눌러 gnb에서 포커스가 나가던지, 
	$("#gnb a:first , #gnb a:last").on("blur",function  () {
		setTimeout(function  () {
			if ( !$("#gnb a").is(":focus") ) {
				$gnb.trigger("mouseleave");
			}
		}, 10);
	});


	//2. 전체메뉴 열기와 닫기
	$('.all_menu_btn').on('click', function () {
		if ($(this).hasClass('close')) { //닫기
			$('.all_menu').animate({opacity: 0}, 300, function () {
				$(this).css({display: 'none'});
				$('.all_menu_btn').removeClass('close').children('.blind-b').text('전체메뉴 열기');
			});
		} else { //열기
			$(this).toggleClass('close').children('.blind-b').text('전체메뉴 닫기');
			$('.all_menu').css('display', 'block').delay(200).animate({opacity: 1}, 400);
		}

		//메뉴가 열린 채로 회원가입과 예약하기에서 포커스가 나가면 메뉴를 닫아주자
		$('.all_menu a:first, .all_menu a:last').on('blur', function () {
			//이탈된 포커스를 누군가 받아줄 대기 시간을 지정 - setTimeout
			setTimeout(function () {
				//.all_menu 내부의 a가 아닌 위치에 포커스가 가면 초기화 시키기 => .all_menu 내부의 a가 포커스를 가지고 있지 않다면...
				if (!$('.all_menu a').is(':focus')) $('.all_menu_btn').trigger('click');
			}, 10);
		});

		return false;
	});


	/* 3. 패밀리사이트 */
	var $family = $("#footer .family");
	var $btn = $family.find("a").first(); //depth1 a:Family Site라는 텍스트가 담긴 링크
	var $btnSubmit = $family.find("a").last(); //확인(새창열기 버튼)
	var tgHref;

	//1-1) $btn을 클릭해서 ul 태그 열어주기
	$btn.on("click", function (e) {
		e.preventDefault();

		$(this).next().stop().show().parent().addClass('on');

		//1-2) ul 태그에서 마우스가 떠나면 닫아주기
		$(this).next().on("mouseleave", function () {
			$(this).stop().hide().parent().removeClass('on');
		});

		//1-3) focus가 family 내부에 있지 않을 경우 닫아주기
		$family.find("a:first , a:last").on("blur", function () {
			setTimeout(function () {
				if (!$family.find("a").is(":focus")) $family.find(">ul").stop().hide();
			}, 1000);
		});

		//2) ul li a를 클릭하면 자신의 텍스트와 href를 변수에 담아 $btn에 글자를 강제로 바꾼다=> ul 태그 닫아주기
		$family.find(">ul>li>a").on("click", function (e) {
			e.preventDefault();
			var tgTxt = $(this).text();
			tgHref = $(this).attr("href");
			//console.log(tgTxt, tgHref);

			$btn.text(tgTxt).focus().next().stop().show();
		});
	});
});