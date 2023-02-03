/**
 * 범위슬라이더
 */
var calcVals = function () {
  var $minSlider = $(".range-input--min");
  var $maxSlider = $(".range-input--max");
  
  var min = $minSlider.attr("min");
  var max = $minSlider.attr("max");
  
  var minVal = $minSlider.val();
  var maxVal = $maxSlider.val();
  
  var positionMin = 100 * ((minVal - min) / (max - min));
  var positionMax = 100 * ((maxVal - min) / (max - min));

  $(".amount__min").val(minVal.replace(/(.)(?=(\d{3})+$)/g,'$1,'));
  $(".amount__max").val(maxVal.replace(/(.)(?=(\d{3})+$)/g,'$1,'));
  
  $("body").get(0).style.setProperty("--low", positionMin + "%");
  $("body").get(0).style.setProperty("--high", positionMax + "%");
};

$(document).ready(function () {
  calcVals();
});

$(".range-input--min").on("input change", calcVals);
$(".range-input--max").on("input change", calcVals);


/**
 * 범위슬라이더 오픈
 */
$('.rangeTabOpen').click(function() {
  $(this).addClass('isActive');
});

$('.closeFilterBox').click(function() {
  $(this).parents('.rangeSlideTabBox').prev('.isActive').removeClass('isActive');
});