const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

// 【追加】通信やリトライが完了するまで ユーザが ToDo リストの追加/削除/変更、及びテキストの編集をできないようにする
let isLocked = false;

// 【追加】API からステータスコード 500 番台のエラーレスポンスが返ってきた場合は [問題 11.16](../ch11/README.md#問題-1116-) で作成した `retryWithExponentialBackoff` を流用 (必要に応じて変更) して `fetch` のリトライを行う
async function retryWithExponentialBackoff(func, maxRetry = 3) {
  let count = 0;
  while (count <= maxRetry) {
    try {
      const response = await func();
      if (response.ok) {
        return response;
      }
      if (response.status >= 500 && response.status < 600) {
        throw new Error(`Server error: ${response.status}`);
      }
      return response;
    } catch (error) {
      count++;
      if (count > maxRetry) throw error;
      const delay = Math.pow(2, count - 1) * 1000;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}

// 【追加】リクエスト送出から 3 秒以上経過してもレスポンスを受信できない場合はリクエストをキャンセルし、リクエストがタイムアウトしたことを `alert` に表示する
async function fetchWithTimeout(url, options = {}, timeout = 3000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  options.signal = controller.signal;

  try {
    // デバッグ用
    console.log("fetch");
    return await fetch(url, options);
  } catch (error) {
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

async function fetchWithRetryAndTimeout(
  url,
  options = {},
  timeout = 3000,
  maxRetries = 3
) {
  return retryWithExponentialBackoff(
    () => fetchWithTimeout(url, options, timeout),
    maxRetries
  );
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetchWithRetryAndTimeout("/api/tasks"); // 用意したメソッドに変更
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);

    const data = await response.json();
    data.items.forEach((task) => appendToDoItem(task));
  } catch (error) {
    alert(`Failed to load tasks: ${error.message}`);
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (isLocked) return; // ロック中は編集しない

  // 両端からホワイトスペースを取り除いた文字列を取得する
  const todo = input.value.trim();
  if (todo === "") {
    return;
  }

  // new-todo の中身は空にする
  input.value = "";

  try {
    isLocked = true; // ユーザの操作をロックする
    // 用意したメソッドに変更
    const response = await fetchWithRetryAndTimeout("/api/tasks", {
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
  } finally {
    isLocked = false; // 操作をアンロック
  }
});

// API から取得したタスクオブジェクトを受け取って、ToDo リストの要素を追加する
function appendToDoItem(task) {
  const elem = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = task.name;
  label.style.textDecorationLine = "none";

  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  toggle.checked = task.status === "completed";
  toggle.addEventListener("change", async () => {
    try {
      isLocked = true; // ユーザーの操作をロックする
      // 用意したメソッドに変更
      const response = await fetchWithRetryAndTimeout(`/api/tasks/${task.id}`, {
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
    } finally {
      isLocked = false; // 操作をアンロック
    }
  });

  const destroy = document.createElement("button");
  destroy.textContent = "Delete";
  destroy.addEventListener("click", async () => {
    try {
      // 用意したメソッドに変更
      const response = await fetchWithRetryAndTimeout(`/api/tasks/${task.id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);

      elem.remove();
    } catch (error) {
      alert(`Failed to delete task: ${error.message}`);
    } finally {
      isLocked = false; // 操作をアンロック
    }
  });

  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);
  list.prepend(elem);
}
