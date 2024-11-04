import { test, expect } from "@playwright/test";

test.describe("InlineCircle Custom Element Tests", () => {
  test.beforeEach(async ({ page }) => {
    // カスタム要素を使用するHTMLファイルを開く
    await page.goto("/ch15.04-10/ex05"); // HTMLファイルのパスを指定
  });

  test("should render inline-circle with specified border-color", async ({
    page,
  }) => {
    // カスタム要素を取得
    const blueCircle = await page.locator('inline-circle[border-color="blue"]');

    // 青い円が正しくレンダリングされているかを確認
    await expect(blueCircle).toBeVisible(); // 要素が表示されていることを確認
    await expect(blueCircle).toHaveCSS("border-color", "rgb(0, 0, 255)"); // ボーダー色が青であることを確認
  });
});
