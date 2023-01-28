$(function() {
  /**
   * 탭박스 온오프 기능
   * @param btnWRap 버튼을 감싸고있는 부모 wrap
   * @param contentsBox 온,오프되는 컨텐츠박스
   */
  function tabBtn(btnWRap, contentsBox) {
    $('.'+btnWRap+' > button').click(function() {
      $('.'+btnWRap+' > button').removeClass('isActive');
      $(this).addClass('isActive');
      $('.'+$(this).data('val')+'').each(function() {
        $('.'+contentsBox+'').removeClass('isActive');
        $(this).addClass('isActive');
      });
    });
  }
  tabBtn('selectlocationBox-tabBtns', 'selectlocationBox'); // 대관 선택 탭  
  tabBtn('popup-tabBox', 'tableWrapBox_tab'); // 이력 조회 탭

  /**
   * 컨택이력 수정 창 열고 닫기
   * onInput/offInput을 변경할 때 기본적인 클래스를 반드시 추가해줘야함 'infoBox-info infoBox-info_bt'
   */
  $('.editContents').click(function() {
    $(this).parents('.offInput').attr('class', 'infoBox-info infoBox-info_bt onInput');
    $('#giveText').val('');
  })
  $('.closeEdit').click(function() {
    $('.onInput').attr('class', 'infoBox-info infoBox-info_bt offInput')
  });

  /**
   * 컨택이력 총평 텍스트 입력 값 적용시키기
   */
  $('.saveText').click(function() {
    $('#getText').text($('#giveText').val());
  });

  /**
   * 커스텀 셀렉트박스(총평, 필터, 날짜선택) 열고, 요소 외 클릭시 닫힘
   * @param {*} openBtn 셀렉트박스 오픈버튼
   * @param {*} customSelectBox 셀렉트박스컨텐츠
   */
  function closeSelectBox(openBtn, customSelectBox) {
    $('.'+openBtn+'').click(function() {
      $(this).addClass('active');
    });

    $('body').click(function(e) {
      if($('.'+openBtn+'').hasClass('active')) {
        if($('.'+customSelectBox+'').has(e.target).length === 0) {
          $('.'+openBtn+'').removeClass('active');
        }
      }
    });
  }
  closeSelectBox('openSelectBox1', 'customSelectBox1'); // 총평
  closeSelectBox('openSelectBox2', 'customSelectBox2'); // 담당자와 분류
  closeSelectBox('openSelectBox3', 'customSelectBox3'); // 날짜 선택

  /**
   * 필터적용 클릭 시 셀렉트박스 닫힘
   */
  $('.closeSelectBox').click(function() {
    $(this).parents('.customSelectBox-options').prev('.active').removeClass('active');
  });

  /**
   * 등록일자 오늘/일주일/한 달 버튼 active토글
   */
  $('.isActiveBtn').click(function() {
    $('.isActiveBtn').removeClass('active');
    $(this).addClass('active');
  });

  /**
   * 총평 셀렉트박스 평가 아이콘 가져오기
   */
  $('.customSelectBox-options > button').click(function() {
    $(this).parents('.customSelectBox-options')
      .prev('button')
      .removeClass('active')
      .children('i')
      .attr('class', 'fa-solid '+$(this).data('val')+'');
  });

  /**
   * 유효고객 정보 카드 클릭시 라인 온/오프
   */
  $('.cardToggle').click(function() {
    $(this).toggleClass('isActive');
  });


  /**
   * 카드 드래그 플러그인
   * @cardWrapBox 1~5 전부 카드를 감싼 ul부모요소를 가리킴
   */
  dragula([
    document.getElementById("cardWrapBox1"),
    document.getElementById("cardWrapBox2"),
    document.getElementById("cardWrapBox3"),
    document.getElementById("cardWrapBox4"),
    document.getElementById("cardWrapBox5")
  ]);
  // function disableselect(e) {return false;}
  document.onselectstart = new Function ();
  document.onmousedown = disableselect;

  /**
   * 팝업 열기
   * $('.'+$(this).data('popup')+'') : 팝업을 여는 버튼의 data 값과 열고자 하는 팝업박스의 클래스를 일치시켜준다.
   */
  $('.open_popup').click(function() {
    $('.'+$(this).data('popup')+'').addClass('open');
    $('body').css('overflow', 'hidden');
  })
  
  /**
   * 팝업 닫기
   */
  $('.close_popup').click(function() {
    $(this).parents('.popupBox').removeClass('open');
    $('body').css('overflow', 'auto');
  });
});