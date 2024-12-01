実際のサービスの通信をデベロッパーツールなどで眺めて CORS の設定を確認しなさい。

楽天銀行の通信を確認

- リクエスト
  - Originに"https://fes.rakuten-bank.co.jp"が設定
- レスポンス
  - Access-Control-Allow-Originに"https://fes.rakuten-bank.co.jp"が設定。アクセスが許可された
  - Access-Control-Allow-Methodsに"GET"と"POST"が許可されている
  - Access-Control-Allow-Credentialsが"true"で資格情報を送信する設定になっている

General

```
Request URL:
https://asia.creativecdn.com/tags/v2?type=json
Request Method:
POST
Status Code:
200 OK
Remote Address:
103.132.192.30:443
Referrer Policy:
no-referrer-when-downgrade
```

Response Headers

```
access-control-allow-credentials:
true
access-control-allow-methods:
GET, POST
access-control-allow-origin:
https://fes.rakuten-bank.co.jp
access-control-max-age:
3600
cache-control:
no-cache, no-store, must-revalidate, private, max-age=0
content-encoding:
gzip
content-length:
498
content-type:
application/json;charset=utf-8
date:
Sat, 30 Nov 2024 10:53:01 GMT
date:
Sat, 30 Nov 2024 10:53:01 GMT
expires:
Thu, 01 Jan 1970 00:00:00 GMT
pragma:
no-cache
vary:
Origin

```

Request Headers

```
:authority:
asia.creativecdn.com
:method:
POST
:path:
/tags/v2?type=json
:scheme:
https
accept:
*/*
accept-encoding:
gzip, deflate, br, zstd
accept-language:
ja-JP,ja;q=0.9,en-US;q=0.8,en;q=0.7
cache-control:
no-cache
content-length:
435
content-type:
application/json
cookie:
u=MbBT7XMaQwr7BeRyFw6m; g=MbBT7XMaQwr7BeRyFw6m_1702037028239; ar_debug=1; c=MbBT7XMaQwr7BeRyFw6m_70MwbsTeF5MCSZ3XeAdP_1732963773660; ts=1732963773; receive-cookie-deprecation=1
origin:
https://fes.rakuten-bank.co.jp
pragma:
no-cache
priority:
u=1, i
referer:
https://fes.rakuten-bank.co.jp/XMS/inquiry/gns?=&CurrentPageID=HEADER_FOOTER_LINK&COMMAND=BALANCE_INQUIRY_START
sec-ch-ua:
"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"
sec-ch-ua-mobile:
?0
sec-ch-ua-platform:
"Windows"
sec-fetch-dest:
empty
sec-fetch-mode:
cors
sec-fetch-site:
cross-site
user-agent:
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36
```

- 参考
  - https://ja.developer.box.com/guides/security/cors/
  - https://apidog.com/jp/blog/postman-cors-testing/
  - https://www.securify.jp/blog/cross-origin-resource-sharing/
