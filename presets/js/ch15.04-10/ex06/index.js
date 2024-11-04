const template = document.createElement("template");
template.innerHTML = `
<style>
  .completed {
    text-decoration: line-through;
  }
</style>

<form id="new-todo-form">
  <input type="text" id="new-todo" placeholder="What needs to be done?" />
  <button>Add</button>
</form>
<ul id="todo-list"></ul>
`;

class TodoApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.form = this.shadowRoot.querySelector("#new-todo-form");
    // TODO: 残りを実装
    this.list = this.shadowRoot.querySelector("#todo-list");
    this.input = this.shadowRoot.querySelector("#new-todo");

    this.form.addEventListener("submit", this.addTodo.bind(this));
  }

  addTodo(event) {
    event.preventDefault(); // フォームの送信をキャンセルする

    const todoText = this.input.value.trim(); // 両端のホワイトスペースを取り除く
    if (todoText === "") {
      return; // 空のタスクは追加しない
    }

    this.input.value = ""; // 入力フィールドをクリア

    // 新しいリストアイテムを作成
    const li = document.createElement("li");
    const div = document.createElement("div"); // divを作成してflexboxで配置
    li.appendChild(div);

    const label = document.createElement("label");
    label.textContent = todoText;
    label.style.textDecorationLine = "none"; // 初期状態では取り消し線をなしに設定

    const toggle = document.createElement("input");
    toggle.type = "checkbox";
    toggle.addEventListener("change", () => {
      label.style.textDecorationLine = toggle.checked ? "line-through" : "none"; // チェックボックスの状態に応じて取り消し線を追加または削除
      label.classList.toggle("completed", toggle.checked); // 完了クラスのトグル
    });

    const destroy = document.createElement("button");
    destroy.textContent = "❌";
    destroy.addEventListener("click", () => {
      li.remove(); // 削除ボタンがクリックされたらアイテムを削除
    });

    // div に toggle, label, destroy を追加
    div.appendChild(toggle);
    div.appendChild(label);
    div.appendChild(destroy);

    this.list.prepend(li); // 新しいタスクをリストの先頭に追加
  }
}

customElements.define("todo-app", TodoApp);
