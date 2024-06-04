export function reverse(data: string) {
  const segmenter = new Intl.Segmenter("jp", { granularity: "grapheme" });
  const segments = segmenter.segment(data);

  const segmentArray = Array.from(segments);
  let reverse = new Array(segmentArray.length);

  for (var i = 0; i < segmentArray.length; i++) {
    reverse[i] = segmentArray[segmentArray.length - i - 1].segment;
  }

  console.log(segmentArray);
  console.log(segmentArray.length);
  console.log(reverse);

  return reverse.join("");
}

reverse("𠮷野家");
console.log("𠮷野家"[0]);
console.log("𠮷野家"[1]);
console.log("𠮷野家"[2]);
reverse("👨‍👨‍👧‍👧家族");
console.log("👨‍👨‍👧‍👧家族"[0]);
console.log("👨‍👨‍👧‍👧家族"[1]);
console.log("👨‍👨‍👧‍👧家族"[2]);
console.log("👨‍👨‍👧‍👧家族"[3]);
