const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

document.addEventListener("DOMContentLoaded", async () => {
  // 問題2 で cookieを表示
  console.log(`cookie:${document.cookie}`);
  // TODO: ここで API を呼び出してタスク一覧を取得し、
  // 成功したら取得したタスクを appendToDoItem で ToDo リストの要素として追加しなさい
  /* ここから追加 */
  try {
    const response = await fetch("/api/tasks");
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);

    const data = await response.json();
    data.items.forEach((task) => appendToDoItem(task));
  } catch (error) {
    // サーバからエラーレスポンスが返却されたときは、ToDo リストの表示を更新させずエラーの内容を `alert` で表示する
    alert(`Failed to load tasks: ${error.message}`);
  }
  /* ここまで追加 */
});

form.addEventListener("submit", async (e) => {
  // TODO: ここで form のイベントのキャンセルを実施しなさい (なぜでしょう？)
  e.preventDefault(); // 【追加】 フォームの内容を送信して、ページをリロードするのでキャンセルする https://qiita.com/yokoto/items/27c56ebc4b818167ef9e

  // 両端からホワイトスペースを取り除いた文字列を取得する
  const todo = input.value.trim();
  if (todo === "") {
    return;
  }

  // new-todo の中身は空にする
  input.value = "";

  // TODO: ここで API を呼び出して新しいタスクを作成し
  // 成功したら作成したタスクを appendToDoItem で ToDo リストの要素として追加しなさい
  /* ここから追加 */
  try {
    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ name: todo }),
    });
    if (!response.ok) throw new Error(`Erro: ${response.statusText}`);

    const newTask = await response.json();
    appendToDoItem(newTask);
  } catch (error) {
    alert(`Failed to add tasks: ${error.message}`);
  }
  /* ここまで追加 */
});

// API から取得したタスクオブジェクトを受け取って、ToDo リストの要素を追加する
function appendToDoItem(task) {
  // ここから #todo-list に追加する要素を構築する
  const elem = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = task.name;
  label.style.textDecorationLine = "none";

  const toggle = document.createElement("input");
  // TODO: toggle が変化 (change) した際に API を呼び出してタスクの状態を更新し
  // 成功したら label.style.textDecorationLine を変更しなさい
  toggle.type = "checkbox";
  toggle.checked = task.status === "completed";
  toggle.addEventListener("change", async () => {
    try {
      const response = await fetch(`/api/tasks/${task.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
          status: toggle.checked ? "completed" : "active",
        }),
      });
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);

      const updatedTask = await response.json();
      label.style.textDecorationLine =
        updatedTask.status === "completed" ? "line-through" : "none";
    } catch (error) {
      alert(`Failed to update task: ${error.message}`);
    }
  });

  const destroy = document.createElement("button");
  // TODO: destroy がクリック (click) された場合に API を呼び出してタスク を削除し
  // 成功したら elem を削除しなさい
  destroy.textContent = "Delete";
  destroy.addEventListener("click", async () => {
    try {
      const response = await fetch(`/api/tasks/${task.id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);

      elem.remove();
    } catch (error) {
      alert(`Failed to delete task: ${error.message}`);
    }
  });

  // TODO: elem 内に toggle, label, destroy を追加しなさい
  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);
  list.prepend(elem);
}
