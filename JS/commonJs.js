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
tabBtn('rentInfoChangeBtns', 'rentInfoBox'); // 대관등록

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

/**
 * 화면 로드시 기회단계카드 갯수대로 width값 설정하기
 */
$(window).on('load', function() {
  const stepBarBox = $('.stepBarBox');
  const stepBarBoxItemLength = $('.stepBarBox-item').length;
  const stepBarBoxItemWidth = $('.stepBarBox-item').width();

  stepBarBox.width((stepBarBoxItemWidth + 20) * stepBarBoxItemLength + 'px');
});

/**
 * 기회단계카드 사이즈 컨트롤하기(크기를 줄이면 스크롤도 같이 줄어듦)
 */
$('.sizeControl').click(function() {
  const stepBarBox = $('.stepBarBox');
  const stepBarBoxItemLength = $('.stepBarBox-item').length;
  const thisText = $(this).text();

  if(thisText === '-') {
    $(this)
    .text('+')
    .parents('.stepBarBox-item')
    .addClass('shrink')
    .css('width', '162px');

    stepBarBox.width(162 * stepBarBoxItemLength + 'px');
  } else {
    $(this)
    .text('-')
    .parents('.stepBarBox-item')
    .removeClass('shrink')
    .css('width', '355px');
  }
});