import { test, expect } from "@playwright/test";

test.describe("Integrity 属性をテストする", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/ch15.01-03/ex03");
  });

  test("適切な integrity 値の場合はロードされる", async ({ page }) => {
    // ページが読み込まれた後、#messageの内容を確認
    const paragraphText = await page.textContent("#message");
    expect(paragraphText).toBe("JavaScript is loaded"); // 正しいテキストを期待
  });

  test("適切でない integrity 値の場合はロードされない", async ({ page }) => {
    // 不正なハッシュ値を設定
    await page.evaluate(() => {
      const script = document.querySelector('script[type="module"]');
      if (script) {
        script.setAttribute("integrity", "sha256-invalidhashvalue"); // 不正なハッシュ値
      }
    });

    // ページをリロードして新しいintegrityを適用
    await page.reload();

    // メッセージが空であることを確認
    const paragraphText = await page.textContent("#message");
    expect(paragraphText).toBe(""); // スクリプトが読み込まれないことを期待
  });
});
