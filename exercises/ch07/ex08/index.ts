export function reverse(data: string) {
  const segmenter = new Intl.Segmenter("jp", { granularity: "grapheme" });
  const segments = segmenter.segment(data);

  const segmentArray = Array.from(segments);
  let reverse = new Array(segmentArray.length);

  for (var i = 0; i < segmentArray.length; i++) {
    reverse[i] = segmentArray[segmentArray.length - i - 1].segment;
  }

  return reverse.join("");
}
