$(document).ready(function () {
  $('#stealcut ul li img').attr('tabIndex', 0);
  $('#stealcut ul li img').on('click', function () {
    // 변수
    var $mdCut = $('#modal_stealcut');
    var $prevBtn = $mdCut.children('.prev');
    var $nextBtn = $mdCut.children('.next');
    var $clsBtn = $mdCut.children('.md_close_btn');
    var $clickImg = $(this);
    var imgNum = $clickImg.parent().index() + 1;
    var imgSrc = '';

    // 클릭하면 바꿀 모달 접근성
    $mdCut.siblings().attr({'aria-hidden': true, inert: true});

    // dim생성 및 cnt노출
    $mdCut.before('<div id="dim"></div>');
    var $dim = $('#dim');
    imgSrc += '../../images/detail/stealcut' + imgNum + '.jpg'; 

    $dim.stop().fadeIn('fast').next().css('visibility', 'visible');
    $('#modal_stealcut > img').attr('src', imgSrc);
    $prevBtn.focus();

    if(imgNum === 1) {
      $nextBtn.focus().prev().attr({'disabled': true}).css({'color': '#7d7d7d'});
      $nextBtn.on('keydown', function(e){
        if(e.shiftKey && e.keyCode === 9) {
          e.preventDefault();
          $clsBtn.focus();
        }
      });
      $clsBtn.on('keydown', function(e){
        if(!e.shiftKey && e.keyCode === 9) {
          e.preventDefault();
          $nextBtn.focus();
        }
      });
      
    } else if(imgNum === 23) {
      $prevBtn.focus().next().attr({'disabled': true}).css({'color': '#7d7d7d'});
    } else if(imgNum !== 1 && imgNum !== 23) {
      $('#modal_stealcut .prev_next').attr({'disabled': false}).css({'color': '#000'});
    }
    $('html, body').css('overflowY', 'hidden');

    // 탭버튼 순환
    $prevBtn.on('keydown', function(e){
      if(e.shiftKey && e.keyCode === 9) {
        e.preventDefault();
        $clsBtn.focus();
      }
    });
    $clsBtn.on('keydown', function(e){
      if(!e.shiftKey && e.keyCode === 9) {
        e.preventDefault();
        $prevBtn.focus();
      }                                         
    });

    // 다음버튼, 이전버튼
    $prevBtn.on('click', function(){ 
      imgNum = imgNum - 1;
      imgSrc = '../../images/detail/stealcut' + imgNum + '.jpg';
      $('#modal_stealcut > img').attr('src', imgSrc);
      $(this).siblings('.prev_next').attr({'disabled': false}).css({'color': '#000'});
      if (imgNum === 1) {
        $(this).attr({'disabled': true}).css({'color': '#7d7d7d'});
      } 
    });

    $nextBtn.on('click', function(){ 
      imgNum = imgNum + 1;
      imgSrc = '../../images/detail/stealcut' + imgNum + '.jpg';
      $('#modal_stealcut > img').attr('src', imgSrc);
      $(this).siblings('.prev_next').attr({'disabled': false}).css({'color': '#000'});
      if (imgNum === 23) {
        $(this).attr({'disabled': true}).css({'color': '#7d7d7d'});
      } 
    });

    // 닫기 버튼
    $clsBtn.on('click', function () {
      $dim.stop().fadeOut('fast', function () {
        $(this).remove();
      });
      $mdCut.css('visibility', 'hidden').siblings().removeAttr('aria-hidden inert');
      $('#stealcut ul li img').eq(imgNum - 1).focus();
      $('html, body').css('overflow', 'auto');
    });

    $dim.on('click', function () {
      $clsBtn.trigger('click');
    });
    $(window).on('keydown', function (e) {
      if (e.keyCode === 27) $clsBtn.click();
    });
  });

  $('#stealcut ul li img').on('keydown', function (e) {
    if (e.keyCode === 13) $(this).trigger('click');
  });
});