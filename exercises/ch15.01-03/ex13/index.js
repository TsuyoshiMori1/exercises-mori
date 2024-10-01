// 1. nav 要素内のリンク (<a>)
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => console.log(link));

// 2. 商品リスト (.product-list) 内の最初の商品 (.product-item)
const firstProductItem = document.querySelector(".product-list .product-item");
console.log(firstProductItem);

// 3. カートアイコンの画像 (<img>)
const cartIcon = document.querySelector(".cart img");
console.log(cartIcon);

// 4. 商品リスト (.product-list) 内の価格 (.price) を表示する要素
const prices = document.querySelectorAll(".product-list .price");
prices.forEach((price) => console.log(price));

// 5. 商品リスト (.product-list) 内の全ての商品 (.product-item) の画像 (<img>)
const productImages = document.querySelectorAll(
  ".product-list .product-item img"
);
productImages.forEach((image) => console.log(image));

// 6. 検索バー (.search-bar) 内の検索ボタン (<button>)
const searchButton = document.querySelector(".search-bar button");
console.log(searchButton);

// 7. フッター (footer) 内のパラグラフ (<p>) 要素
const footerParagraph = document.querySelector("footer p");
console.log(footerParagraph);

// 8. 商品リスト (.product-list) 内の偶数番目の商品 (.product-item)
const evenProductItems = document.querySelectorAll(
  ".product-list .product-item:nth-child(even)"
);
evenProductItems.forEach((item) => console.log(item));

// 9. ヘッダー (header) 内のアカウントリンク (.account) の画像 (<img>)
const accountImage = document.querySelector(".account img");
console.log(accountImage);

// 10. ナビゲーションリンクのうち、"会社情報" のリンク
const companyInfoLink = document.querySelector('nav a[href="#about"]');
console.log(companyInfoLink);
