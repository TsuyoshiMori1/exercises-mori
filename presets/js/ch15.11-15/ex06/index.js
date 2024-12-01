const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

let todos = [];

// sessionStorageからToDoリストを読み込む
function loadTodos() {
  try {
    const storedTodos = sessionStorage.getItem("todos");
    if (storedTodos) {
      todos = JSON.parse(storedTodos);
      renderTodos();
    }
  } catch (error) {
    console.error(`error load sessionStorage: ${error}`);
  }
}

// ToDoリストをsessionStorageに保存する関数
function saveTodos() {
  try {
    sessionStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.error("error save todos:", error);
  }
}

// ToDoリストを画面に表示する関数
function renderTodos() {
  list.innerHTML = "";
  todos.forEach((todo) => {
    const elem = document.createElement("li");

    const label = document.createElement("label");
    label.textContent = todo.text;
    label.style.textDecorationLine = todo.completed ? "line-through" : "none";

    const toggle = document.createElement("input");
    toggle.type = "checkbox";
    toggle.checked = todo.completed;
    toggle.addEventListener("change", () => {
      todo.completed = toggle.checked;
      label.style.textDecorationLine = toggle.checked ? "line-through" : "none";
      saveTodos();
    });

    const destroy = document.createElement("button");
    destroy.textContent = "❌";
    destroy.addEventListener("click", () => {
      todos = todos.filter((t) => t !== todo); // ToDoを削除
      saveTodos();
      renderTodos(); // リストを再描画
    });

    elem.appendChild(toggle);
    elem.appendChild(label);
    elem.appendChild(destroy);
    list.appendChild(elem);
  });
}

form.addEventListener("submit", (e) => {
  // フォームが送信されるとページがリロードされるので、それを防ぐため
  e.preventDefault();

  // 両端からホワイトスペースを取り除いた文字列を取得する
  if (input.value.trim() === "") {
    return;
  }
  const todo = input.value.trim();
  // new-todo の中身は空にする
  input.value = "";

  // 新しいToDoを追加
  const newTodo = {
    text: todo,
    completed: false,
  };

  todos.push(newTodo);
  saveTodos();
  renderTodos();
});

// sessionStorageに保存されたToDoを初期表示
loadTodos();

// 他のタブの変更は読み込めないので、sessionStorageが変更された場合の処理は不要
