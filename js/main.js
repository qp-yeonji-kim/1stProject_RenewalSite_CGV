
  $(document).ready(function () {
    $('#content').fullpage({
      //필요옵션
      sectionsColor: ['#000', '#292929', '#000', '#ed1c24', '#0f0f0f', '#fff'],
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['CGV상영작', '무비차트', '이벤트', 'CGV SHOP', '매거진', 'footer']
    });
    var wide_slider = $('#wide_slider .wide_poster').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 1,
      slideWidth: 1920,
      shrinkItems: true,
      prevText: '<span class="blind-b">이전 슬라이드 페이지</span>',
      nextText: '<span class="blind-b">다음 슬라이드 페이지</span>',
      startText: '<span class="blind-b">슬라이드 재생</span>',
      stopText: '<span class="blind-b">슬라이드 정지</span>'
    });
    var book = $('#slider1 .visual').bxSlider({
      minSlides: 5,
      maxSlides: 5,
      moveSlides: 5,
      slideWidth: 1085,
      pager: false,
      shrinkItems: true,
      infiniteLoop: false,
      prevText: '<span class="blind-b">이전 슬라이드 페이지</span>',
      nextText: '<span class="blind-b">다음 슬라이드 페이지</span>'
    });
    var grade = $('#slider2 .visual').bxSlider({
      minSlides: 5,
      maxSlides: 5,
      moveSlides: 5,
      slideWidth: 1085,
      pager: false,
      shrinkItems: true,
      infiniteLoop: false,
      prevText: '<span class="blind-b">이전 슬라이드 페이지</span>',
      nextText: '<span class="blind-b">다음 슬라이드 페이지</span>'
    });

    $('#s_moviechart #ranking_grade').on('click', gradeReload);
    $('#s_moviechart #ranking_grade').on('keydown', function (e) {
      if (e.keyCode == 13 || e.keyCode == 32) gradeReload();
    });

    function gradeReload() {
      setTimeout(function () {
        grade.reloadSlider();
      }, 10);
    }
  });