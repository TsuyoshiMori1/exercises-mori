export function substring(str: string, indexStart: number, indexEnd: number) {
  const array = str.split("");
  let returnStr = "";
  for (let i: number = indexStart; i < indexEnd; i++) {
    returnStr += array[i];
  }
  return returnStr;
}

export function slice(str: string, indexStart: number, indexEnd: number) {
  const array = str.split("");
  let returnStr = "";
  for (let i: number = indexStart; i < indexEnd; i++) {
    returnStr += array[i];
  }
  return returnStr;
}

export function padStart(str: string, targetLength: number, padString: string) {
  let returnStr = "";
  for (
    let i: number = 0;
    i < targetLength - str.length;
    i += padString.length
  ) {
    returnStr += padString;
  }
  return (returnStr += str);
}

export function trim(str: string) {
  let resultStr = "";
  for (const char of str) {
    if (char !== " ") resultStr += char;
  }
  return resultStr;
}
