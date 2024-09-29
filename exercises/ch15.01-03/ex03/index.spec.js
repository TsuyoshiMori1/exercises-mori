import { test, expect } from "@playwright/test";

// テスト対象の URL に遷移する関数
function gotoTestTarget(page) {
  return page.goto("/ch15.01-03/ex03"); // HTML ファイルのパスを指定
}

test.describe("Integrity 属性をテストする", () => {
  test.beforeEach(async ({ page }) => {
    await gotoTestTarget(page);
  });

  test("適切な integrity 値の場合はロードされる", async ({ page }) => {
    // ページが読み込まれた後、指定したテキストが含まれているか確認
    const paragraphText = await page.textContent("#message");
    expect(paragraphText).toBe("JavaScript is loaded"); // 正しいテキストを期待
  });

  test("適切でない integrity 値の場合はロードされない", async ({ page }) => {
    // 不正なハッシュ値を設定する
    await page.evaluate(() => {
      const script = document.getElementById("script");
      if (script) {
        script.setAttribute("integrity", "sha256-invalidhashvalue"); // 不正なハッシュ値
      }
    });

    // ページが読み込まれた後、メッセージが空であることを確認
    const paragraphText = await page.textContent("#message");
    expect(paragraphText).toBe(""); // スクリプトが読み込まれないため空であることを期待
  });
});
