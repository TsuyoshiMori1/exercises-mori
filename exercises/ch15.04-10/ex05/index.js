class InlineCircle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); // シャドウDOMを作成

    const circleContainer = document.createElement("div"); // 円を表示するためのdiv
    circleContainer.classList.add("circle"); // クラスを追加

    // スタイルを追加
    const style = document.createElement("style");
    style.textContent = `
        .circle {
          width: 50px; /* 幅を固定 */
          height: 50px; /* 高さも固定（円形にするため） */
          border-radius: 50%; /* 丸くする */
          display: inline-block; /* インラインブロックにする */
        }
      `;
    this.shadowRoot.append(style, circleContainer); // シャドウDOMにスタイルと円を追加

    this.circleContainer = circleContainer; // 円のコンテナを保存
  }

  static get observedAttributes() {
    return ["border-color"]; // 監視する属性（ボーダー色のみ）
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // 属性が変更された際に呼ばれる
    if (name === "border-color") {
      this.style.borderColor = newValue; // ボーダー色を設定
      this.updateStyles(); // スタイルを更新
    }
  }

  updateStyles() {
    // カスタム要素のスタイルを更新する
    this.circleContainer.style.border = `2px solid ${this.style.borderColor}`; // ボーダーを設定
  }
}

// カスタム要素を定義
customElements.define("inline-circle", InlineCircle);
