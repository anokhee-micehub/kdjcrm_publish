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