import { test, expect } from "@playwright/test";

test.describe("ToDo App", () => {
  test.beforeEach(async ({ page }) => {
    // テスト対象のページを開く
    await page.goto("/ch15.04-10/ex11");
  });

  test("can add a new todo item", async ({ page }) => {
    await page.fill("#new-todo", "新しいタスク");
    await page.click("text=Add");

    // ToDo リストに新しい項目が追加されることを確認
    const todoItem = page.locator("#todo-list li").first();
    await expect(todoItem).toContainText("新しいタスク");
  });

  test("can toggle todo completion status", async ({ page }) => {
    await page.fill("#new-todo", "テストタスク");
    await page.click("text=Add");

    // チェックボックスのトグルで完了状態を切り替える
    const toggle = page.locator("#todo-list li .toggle").first();
    await toggle.check();
    await expect(page.locator("#todo-list li")).toHaveClass(/completed/);

    // 再度トグルをオフにする
    await toggle.uncheck();
    await expect(page.locator("#todo-list li")).not.toHaveClass(/completed/);
  });

  test("can delete a todo item", async ({ page }) => {
    await page.fill("#new-todo", "削除するタスク");
    await page.click("text=Add");

    // タスク削除ボタンをクリック
    await page.click("#todo-list li .destroy");

    // リストが空であることを確認
    await expect(page.locator("#todo-list li")).toHaveCount(0);
  });

  test("can filter todos by status", async ({ page }) => {
    // タスクを追加
    await page.fill("#new-todo", "未完了タスク");
    await page.click("text=Add");
    await page.fill("#new-todo", "完了タスク");
    await page.click("text=Add");

    // 2つ目のタスクを完了にする
    const secondToggle = page.locator("#todo-list li .toggle").nth(1);
    await secondToggle.check();

    // Active フィルタで未完了のタスクのみが表示されることを確認
    await page.click("text=Active");
    await expect(page.locator("#todo-list li")).toHaveCount(1);
    await expect(page.locator("#todo-list li")).toContainText("未完了タスク");

    // Completed フィルタで完了したタスクのみが表示されることを確認
    await page.click("text=Completed");
    await expect(page.locator("#todo-list li")).toHaveCount(1);
    await expect(page.locator("#todo-list li")).toContainText("完了タスク");

    // All フィルタですべてのタスクが表示されることを確認
    await page.click("text=All");
    await expect(page.locator("#todo-list li")).toHaveCount(2);
  });
});
