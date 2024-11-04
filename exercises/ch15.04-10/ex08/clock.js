// 秒針を追加
document.querySelector("#clock .hands").innerHTML +=
  '<line class="secondhand" x1="50" y1="50" x2="50" y2="15" stroke-width="1"/>';

(function updateClock() {
  // SVG時計の画像を更新して現在時刻を表示する
  let now = new Date(); // 現在時刻
  let sec = now.getSeconds(); // 秒
  let min = now.getMinutes() + sec / 60; // 小数部を持つ分
  let hour = (now.getHours() % 12) + min / 60; // 小数部を持つ時
  let secangle = sec * 6; // 1秒あたり6度
  let minangle = min * 6; // 1分あたり6度
  let hourangle = hour * 30; // 1時間あたり30度

  // 時計の針のSVG要素を取得する
  let sechand = document.querySelector("#clock .secondhand");
  let minhand = document.querySelector("#clock .minutehand");
  let hourhand = document.querySelector("#clock .hourhand");

  // SVG属性を設定して、時計板の中で回転する
  sechand.setAttribute("transform", `rotate(${secangle},50,50)`);
  minhand.setAttribute("transform", `rotate(${minangle},50,50)`);
  hourhand.setAttribute("transform", `rotate(${hourangle},50,50)`);

  // 1秒後にこの関数を再度実行する
  setTimeout(updateClock, 1000);
})();
