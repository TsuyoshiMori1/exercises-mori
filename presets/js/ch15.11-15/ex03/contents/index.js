const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

document.addEventListener("DOMContentLoaded", async () => {
  try {
    // URLに'http://localhost:3001'を追加
    // `contents/index.js` で、`fetch` のオプション設定を変更し、CORS モードでのリクエスト送信と、クロスオリジンでの Cookie の送信を許可する
    const response = await fetch("http://localhost:3001/api/tasks", {
      mode: "cors", // CORSモードを指定
      credentials: "include", // クロスオリジンでのCookie送信を許可
    });
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);

    const data = await response.json();
    data.items.forEach((task) => appendToDoItem(task));
  } catch (error) {
    // サーバからエラーレスポンスが返却されたときは、ToDo リストの表示を更新させずエラーの内容を `alert` で表示する
    alert(`Failed to load tasks: ${error.message}`);
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // 両端からホワイトスペースを取り除いた文字列を取得する
  const todo = input.value.trim();
  if (todo === "") {
    return;
  }

  // new-todo の中身は空にする
  input.value = "";

  try {
    const response = await fetch("http://localhost:3001/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ name: todo }),
      mode: "cors", // CORSモードを指定
      credentials: "include", // クロスオリジンでのCookie送信を許可
    });
    if (!response.ok) throw new Error(`Erro: ${response.statusText}`);

    const newTask = await response.json();
    appendToDoItem(newTask);
  } catch (error) {
    alert(`Failed to add tasks: ${error.message}`);
  }
});

// API から取得したタスクオブジェクトを受け取って、ToDo リストの要素を追加する
function appendToDoItem(task) {
  // ここから #todo-list に追加する要素を構築する
  const elem = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = task.name;
  label.style.textDecorationLine = "none";

  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  toggle.checked = task.status === "completed";
  toggle.addEventListener("change", async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/tasks/${task.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json; charset=UTF-8" },
          body: JSON.stringify({
            status: toggle.checked ? "completed" : "active",
          }),
          mode: "cors", // CORSモードを指定
          credentials: "include", // クロスオリジンでのCookie送信を許可
        }
      );
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);

      const updatedTask = await response.json();
      label.style.textDecorationLine =
        updatedTask.status === "completed" ? "line-through" : "none";
    } catch (error) {
      alert(`Failed to update task: ${error.message}`);
    }
  });

  const destroy = document.createElement("button");
  destroy.textContent = "Delete";
  destroy.addEventListener("click", async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/tasks/${task.id}`,
        {
          method: "DELETE",
          mode: "cors", // CORSモードを指定
          credentials: "include", // クロスオリジンでのCookie送信を許可
        }
      );
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);

      elem.remove();
    } catch (error) {
      alert(`Failed to delete task: ${error.message}`);
    }
  });

  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);
  list.prepend(elem);
}
