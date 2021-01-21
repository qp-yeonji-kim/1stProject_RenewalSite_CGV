$(document).ready(function () {
  $('#stealcut ul li img').attr('tabIndex', 0);
  $('#stealcut ul li img').on('click', function () {
    // 변수
    var $mdCut = $('#modal_stealcut');
    var $first = $mdCut.children('.first');
    var $last = $mdCut.children('.last');
    var $closeBtn = $mdCut.children('.md_close_btn');
    var $clickImg = $(this);
    var imgNum = $clickImg.parent().index() + 1;
    var imgSrc = '';

    // 클릭하면 바꿀 모달 속성
    $mdCut.siblings().attr({
      'aria-hidden': true,
      inert: true
    });

    // dim생성 및 cnt노출
    $mdCut.before('<div id="dim"></div>');
    var $dim = $('#dim');
    imgSrc += '../../images/detail/stealcut' + imgNum + '.jpg'; 

    $dim.stop().fadeIn('fast').next().css('visibility', 'visible');
    $('#modal_stealcut img').attr('src', imgSrc);
    $first.focus();

    if(imgNum === 1) {
      $('#modal_stealcut .next').focus().prev().attr({'disabled': true}).css({'color': '#7d7d7d'});
    } else if(imgNum === 23) {
      $('#modal_stealcut .prev').focus().next().attr({'disabled': true}).css({'color': '#7d7d7d'});
    } else if(imgNum !== 1 && imgNum !== 23) {
      $('#modal_stealcut .next, #modal_stealcut .prev').attr({'disabled': false}).css({'color': '#000'});
    }

    // 다음버튼, 이전버튼
    $('#modal_stealcut .prev_next').on('click', function(){ 
      if ($(this).is('.prev') && imgNum !== 1) {
        imgNum = imgNum - 1;
        imgSrc = '../../images/detail/stealcut' + imgNum + '.jpg';
        $('#modal_stealcut img').attr('src', imgSrc);
        $(this).siblings('.prev_next').attr({'disabled': false}).css({'color': '#000'});
      } 
      else if ($(this).is('.next') && imgNum !== 23) {
        imgNum = imgNum + 1;
        imgSrc = '../../images/detail/stealcut' + imgNum + '.jpg';
        $('#modal_stealcut img').attr('src', imgSrc);
        $(this).siblings('.prev_next').attr({'disabled': false}).css({'color': '#000'});
      }
/*       else if (imgNum === 2 || imgNum === 22) {
        $(this).attr({'disabled': true}).css({'color': '#7d7d7d'});
      } 
      방향 전환 될 수 있는 부분.. 어떻게 처리할 지 고민
      */
    });

    // 탭버튼 순환

    // 스크롤 안되게 방지

    // 닫기 버튼 - 사진위치로 되돌아가야 함.
    $closeBtn.on('click', function () {
      $dim.stop().fadeOut('fast', function () {
        $(this).remove();
      });
      $mdCut.css('visibility', 'hidden').siblings().removeAttr('aria-hidden inert');
      /* 여기에 다시 포커스 되돌아가게 */
    });

    $dim.on('click', function () {
      $closeBtn.trigger('click');
    });
    $(window).on('keydown', function (e) {
      if (e.keyCode === 27) $closeBtn.click();
    });

  });


  $('#stealcut ul li img').on('keydown', function () {
    console.log();
  });

});