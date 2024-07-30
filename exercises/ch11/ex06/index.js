export function isEmailAddress(email) {
  if (!email) {
    return false;
  }

  // 長さのチェック
  const parts = email.split("@");
  if (parts.length !== 2) {
    return false;
  }

  const [localPart, domain] = parts;
  if (
    localPart.length == 0 ||
    localPart.length > 64 ||
    domain.length == 0 ||
    domain.length > 252
  ) {
    return false;
  }

  // ローカルパートやドメインの不正な位置にドットがないかチェック
  if (
    /^\./.test(localPart) ||
    /\.$/.test(localPart) ||
    /\.{2,}/.test(localPart)
  ) {
    return false;
  }
  if (/^\./.test(domain) || /\.$/.test(domain) || /\.{2,}/.test(domain)) {
    return false;
  }

  // 正規表現チェック
  // [@の前]
  // 先頭で、英数字、記号を1文字以上繰り返す
  // "."が付いた後、英数字、記号が記載されている
  // [@の後]
  // 英数字、記号が1文字以上繰り返す
  // "."が付いた後、英数字、記号が記載されている

  const emailRegex =
    /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*$/;

  return emailRegex.test(email);
}
