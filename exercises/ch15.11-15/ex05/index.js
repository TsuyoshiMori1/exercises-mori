const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

// IndexedDB の設定
const DB_NAME = "todo-app"; // データベース名
const STORE_NAME = "todos"; // ストア名
let db;

// BroadcastChannel の作成(タブ間の通信用)
const channel = new BroadcastChannel("todo-updates");

// IndexdDB に接続する
function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);

    request.onupgradeneeded = (event) => {
      db = event.target.result;
      // ToDoリスト用のオブジェクトストアを作製
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    };

    request.onerror = (event) => {
      // データベース接続に失敗した場合
      alert(`IndexedDB connect error: ${event.target.error}`);
      reject(event.target.error);
    };

    request.onsuccess = (event) => {
      db = event.target.result;
      resolve();
    };
  });
}

// IndexDB から ToDo リストを取得する
function fetchTodos() {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);

    const request = store.getAll();

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

// IndexedDB に ToDo を追加する
function addTodoToDB(todo) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);

    const request = store.add(todo);

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

// IndexedDB から ToDo を削除する
function deleteToDoFromDB(id) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);

    const request = store.delete(id);

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

// ToDoリストを画面に表示する関数
function renderTodos(todos) {
  list.innerHTML = "";
  todos.forEach((todo) => {
    const elem = document.createElement("li");

    const label = document.createElement("label");
    label.textContent = todo.text;
    label.style.textDecorationLine = todo.completed ? "line-through" : "none";

    const toggle = document.createElement("input");
    toggle.type = "checkbox";
    toggle.checked = todo.completed;
    toggle.addEventListener("change", async () => {
      todo.completed = toggle.checked;
      label.style.textDecorationLine = toggle.checked ? "line-through" : "none";
      await addTodoToDB(todo); // 更新後のデータを保存
      notifyUpdate(); // 更新を通知
    });

    const destroy = document.createElement("button");
    destroy.textContent = "❌";
    destroy.addEventListener("click", async () => {
      await deleteToDoFromDB(todo.id); // ToDoを削除
      notifyUpdate();
      loadAndRenderTodos();
    });

    elem.appendChild(toggle);
    elem.appendChild(label);
    elem.appendChild(destroy);
    list.appendChild(elem);
  });
}

// ToDo の変更を他のタブに通知する
function notifyUpdate() {
  channel.postMessage("update");
}

// 他のタブから通知を受け取る
channel.onmessage = (message) => {
  if (message.data === "update") {
    loadAndRenderTodos();
  }
};

// ToDo リストを取得して表示する
async function loadAndRenderTodos() {
  const todos = await fetchTodos();
  renderTodos(todos);
}

// 初期化
initDB()
  .then(loadAndRenderTodos)
  .catch((error) => alert(`initDB error: ${error}`));

// 新しい ToDo を追加
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (input.value.trim() === "") {
    return;
  }

  const newTodo = {
    text: input.value.trim(),
    completed: false,
  };

  input.value = "";

  await addTodoToDB(newTodo);
  notifyUpdate();
  loadAndRenderTodos();
});
