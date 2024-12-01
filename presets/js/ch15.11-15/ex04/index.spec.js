import { expect, test } from "@playwright/test";

async function addToDo(page, todo) {
  await page.getByRole("textbox").fill(todo);
  await page.getByRole("button", { name: "Add" }).click();
}

async function checkToDo(page, index) {
  await page.getByRole("listitem").nth(index).getByRole("checkbox").check();
}

async function deleteToDo(page, index) {
  await page
    .getByRole("listitem")
    .nth(index)
    .getByRole("button", { name: "❌" })
    .click();
}

async function countToDos(page) {
  return await page.getByRole("listitem").count();
}

function queryToDo(page, index) {
  return page.getByRole("listitem").nth(index);
}

test.describe("simple todo app", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5000/ch15.11-15/ex04");
    await page.reload(); // ページをリロードして状態をリセット
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
    const label = todo1.getByText("質問表に質問を記載する");
    await expect(label).toBeVisible();
    await expect(todo1).toHaveCSS("text-decoration-line", "none");

    const todo2 = queryToDo(page, 1);
    const label2 = todo2.getByText("練習問題を完了する");
    await expect(label2).toBeVisible();
    await expect(todo1).toHaveCSS("text-decoration-line", "none");
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
    const label = todo1.getByText("質問表に質問を記載する");
    await expect(label).toBeVisible();
    await expect(label).toHaveCSS("text-decoration-line", "line-through");

    const todo2 = queryToDo(page, 1);
    const label2 = todo2.getByText("練習問題を完了する");
    await expect(label2).toBeVisible();
    await expect(label2).toHaveCSS("text-decoration-line", "line-through");
  });
});
