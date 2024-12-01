import { expect, test } from "@playwright/test";

// ToDoを追加するヘルパー関数
async function addToDo(page, todo) {
  // 入力フィールドにToDoテキストを入力
  await page.locator("#new-todo").fill(todo);

  // "Add" ボタンをクリックしてフォーム送信をシミュレート
  await page.locator("button[type='submit']").click();
}

// チェックボックスでToDoを完了にするヘルパー関数
async function checkToDo(page, index) {
  await page
    .locator("#todo-list li")
    .nth(index)
    .locator("input[type='checkbox']")
    .check();
}

// ToDoを削除するヘルパー関数
async function deleteToDo(page, index) {
  await page.locator("#todo-list li").nth(index).locator("button").click();
}

// ToDoのリストアイテム数をカウントするヘルパー関数
async function countToDos(page) {
  return await page.locator("#todo-list li").count();
}

// ToDoリストの特定のアイテムを取得するヘルパー関数
function queryToDo(page, index) {
  return page.locator("#todo-list li").nth(index);
}

test.describe("IndexedDB-based Todo App", () => {
  test.beforeEach(async ({ page }) => {
    // テスト前にページをリロードして状態をリセット
    await page.goto("http://localhost:5000/ch15.11-15/ex05");
    await page.reload();
  });

  test("no default todos", async ({ page }) => {
    expect(await countToDos(page)).toBe(0);
  });

  test("add new todo", async ({ page }) => {
    await addToDo(page, "質問表に質問を記載する");

    expect(await countToDos(page)).toBe(1);

    const todo = queryToDo(page, 0);
    const label = todo.getByText("質問表に質問を記載する");
    await expect(label).toBeVisible();
    await expect(label).toHaveCSS("text-decoration-line", "none");
  });

  test("add multiple todos", async ({ page }) => {
    await addToDo(page, "質問表に質問を記載する");
    await addToDo(page, "練習問題を完了する");

    expect(await countToDos(page)).toBe(2);

    const todo1 = queryToDo(page, 0);
    const label1 = await todo1.locator("label");
    await expect(label1).toHaveText("質問表に質問を記載する");
    await expect(label1).toHaveCSS("text-decoration-line", "none");

    const todo2 = queryToDo(page, 1);
    const label2 = await todo2.locator("label");
    await expect(label2).toHaveText("練習問題を完了する");
    await expect(label2).toHaveCSS("text-decoration-line", "none");
  });

  test("delete todo", async ({ page }) => {
    await addToDo(page, "質問表に質問を記載する");
    await addToDo(page, "練習問題を完了する");
    await deleteToDo(page, 0);

    expect(await countToDos(page)).toBe(1);
  });

  test("complete todo", async ({ page }) => {
    await addToDo(page, "質問表に質問を記載する");
    await addToDo(page, "練習問題を完了する");

    await checkToDo(page, 0);
    await checkToDo(page, 1);

    expect(await countToDos(page)).toBe(2);

    const todo1 = queryToDo(page, 0);
    const label1 = await todo1.locator("label");
    await expect(label1).toHaveText("質問表に質問を記載する");
    await expect(label1).toHaveCSS("text-decoration-line", "line-through");

    const todo2 = queryToDo(page, 1);
    const label2 = await todo2.locator("label");
    await expect(label2).toHaveText("練習問題を完了する");
    await expect(label2).toHaveCSS("text-decoration-line", "line-through");
  });

  test("sync todos across tabs", async ({ page }) => {
    await addToDo(page, "タブ間同期テスト");

    const page2 = await page.context().newPage();
    await page2.goto("http://localhost:5000/ch15.11-15/ex05");

    const todoCount = await countToDos(page2);
    expect(todoCount).toBe(1);

    const todo = queryToDo(page2, 0);
    const label = await todo.locator("label");
    await expect(label).toHaveText("タブ間同期テスト");

    await deleteToDo(page, 0);

    const updatedTodoCount = await countToDos(page2);
    expect(updatedTodoCount).toBe(0);
  });
});
