export function LF2CRLF(text: string): string {
  // LF -> CRLF
  return text.replace(/\n/g, "\r\n");
}

export function CRLF2LF(text: string): string {
  // CRLF -> LF
  return text.replace(/\r\n/g, "\n");
}
