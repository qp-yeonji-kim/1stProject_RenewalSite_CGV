$(document).ready(function () {
    /* 패밀리사이트 */
    var $family=$('.family');
    var $btn = $family.find('a').first();		//depth1 a:"계열사 바로가기"라는 텍스트가 담긴 링크
    var $btnSubmit = $family.find('a').last();		//확인(새창열기 버튼)
    var tgHref;
    
    //1-1) $btn을 클릭해서 ul 태그 열어주기
    $btn.on('click',function  (e) {
      e.preventDefault();

      $(this).next().stop().show();

      //1-2) ul 태그에서 마우스가 떠나면 닫아주기
      $(this).next().on('mouseleave',function  () {
        $(this).stop().hide();
      });

      //1-3) focus가 family 내부에 있지 않을 경우 닫아주기
      $family.find('a:first , a:last').on('blur',function  () {
        setTimeout(function  () {
          if (!$family.find('a').is(':focus')) $family.find('>ul').stop().hide();
        }, 1000);
      });

      //2) ul li a를 클릭하면 자신의 텍스트와 href를 변수에 담아 $btn에 글자를 강제로 바꾼다=> ul 태그 닫아주기
      $family.find('>ul>li a').on('click',function  (e) {
        e.preventDefault();
        var tgTxt=$(this).text();
        tgHref=$(this).attr('href');
        //console.log(tgTxt, tgHref);

        $btn.text(tgTxt).focus().next().stop().show();
      });
    });

    //3) 확인버튼 눌러 페이지 이동시키기
    $btnSubmit.on('click',function  (e) {
      e.preventDefault();
      //첫번째 a태그 내부의 텍스트로 변경합니다
      if ($btn.text()=='계열사 바로가기') return false;

      //window.open('열려질 새창의 경로명','팝업창 이름','옵션');
      window.open(tgHref, 'popup');
    });
  });