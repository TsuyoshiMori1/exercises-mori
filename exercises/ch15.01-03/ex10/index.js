document.addEventListener("DOMContentLoaded", () => {
  const editorDiv = document.getElementById("editor-front");
  const editorInput = document.getElementById("editor-back");

  // div 要素をクリックすると input 要素が focus される
  editorDiv.addEventListener("click", () => {
    editorInput.focus();
  });

  // input 要素に focus されると灰色 (silver)になる
  editorInput.addEventListener("focus", () => {
    editorDiv.style.backgroundColor = "rgb(192, 192, 192)";
  });

  // input 要素から focus が外れると白色に戻る
  editorInput.addEventListener("blur", () => {
    editorDiv.style.backgroundColor = "rgb(255, 255, 255)";
  });

  // input 要素に入力された text は div 要素にも表示される
  editorInput.addEventListener("input", () => {
    editorDiv.textContent = editorInput.value;
  });
});
