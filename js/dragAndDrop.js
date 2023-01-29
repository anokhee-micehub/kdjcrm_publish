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
// document.onmousedown = disableselect;