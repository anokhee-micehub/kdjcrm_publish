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