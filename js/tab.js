$(document).ready(function() {
	/* 1) 초기 설정 */
  $('.tab:first-of-type, .tabpanel:first-of-type').addClass('active').attr('tabIndex', 0);
  $('.tab:first-of-type').attr('aria-selected', true).siblings().attr('aria-selected', false);
  $('.tabpanel:first-of-type').attr('aria-hidden', false).siblings('.tabpanel').attr('aria-hidden', true);

  /* 2) 탭 키보드 제어 */
  $('.tab').on('keydown', function (e) {
    var key = e.keyCode;
    console.log(key); //왼쪽방향키 37 , 오른쪽 방향키 39, 스페이스바 32 , 엔터 13
    switch (key) {
      case 37:
        $(this).attr('tabIndex', -1);
        if ($(this).hasClass('first')) $(this).siblings('.last').attr('tabIndex', 0).focus();
        else $(this).prev().attr('tabIndex', 0).focus();
        break;
      case 39:
        $(this) .attr('tabIndex', -1);
        if ($(this).hasClass('last')) $(this).siblings('.first').attr('tabIndex', 0).focus();
        else $(this).next().attr('tabIndex', 0).focus();
        break;
      case 36:
        e.preventDefault();
        $(this).siblings('.first').attr('tabIndex', 0).focus();
        break;
      case 35:
        e.preventDefault();
        $(this).siblings('.last').attr('tabIndex', 0).focus();
        break;
      case 32:
      case 13:
        var $tg = $(this);
        activeOn($tg);
        break;
    }
  });

  //3) 탭 클릭 이벤트
  $('.tab').on('click', function () {
    var $tg = $(this);
    activeOn($tg);
  });

  function activeOn($target) {
    $target.addClass('active').attr({'aria-selected': true, tabIndex: 0}).siblings().removeClass('active').attr({'aria-selected': false, tabIndex: -1});
    $('#' + $target.attr('aria-controls')).addClass('active').attr({'aria-hidden': false, tabIndex: 0}).focus().siblings('.tabpanel').removeClass('active').attr({'aria-hidden': true, tabIndex: -1});
  }
  
});