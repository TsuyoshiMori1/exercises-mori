export function escapeStringWithIfElse(str: string) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "\0") {
      result += "\0"; // NUL文字
    } else if (str[i] === "\b") {
      result += "\b"; // バックスペース
    } else if (str[i] === "\t") {
      result += "\t"; // 水平タブ
    } else if (str[i] === "\n") {
      result += "\n"; // 改行
    } else if (str[i] === "\v") {
      result += "\v"; // 垂直タブ
    } else if (str[i] === "\f") {
      result += "\f"; // 改頁
    } else if (str[i] === "\r") {
      result += "\r"; // 復帰
    } else if (str[i] === '"') {
      result += '"'; // 二重引用符
    } else if (str[i] === "'") {
      result += "'"; // アポストロフィ
    } else if (str[i] === "\\") {
      result += "\\"; // バックスラッシュ
    } else {
      result += str[i];
    }
  }
  return result;
}

export function escapeStringWithSwitch(str: string) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "\0":
        result += "\0"; // NUL文字
        break;
      case "\b":
        result += "\b"; // バックスペース
        break;
      case "\t":
        result += "\t"; // 水平タブ
        break;
      case "\n":
        result += "\n"; // 改行
        break;
      case "\v":
        result += "\v"; // 垂直タブ
        break;
      case "\f":
        result += "\f"; // 改頁
        break;
      case "\r":
        result += "\r"; // 復帰
        break;
      case '"':
        result += '"'; // 二重引用符
        break;
      case "'":
        result += "'"; // アポストロフィ
        break;
      case "\\":
        result += "\\"; // バックスラッシュ
        break;
      default:
        result += str[i];
    }
  }
  return result;
}
