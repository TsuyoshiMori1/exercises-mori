function resize1(params) {
  let maxWidth =
    params && params.maxWidth && params.maxWidth > 0 ? params.maxWidth : 600;
  let maxHeight =
    params && params.maxHeight && params.maxHeight > 0 ? params.maxHeight : 480;
  console.log({ maxWidth, maxHeight });
}

function resize2(params) {
  let maxWidth = params?.maxWidth ?? 600;
  let maxHeight = params?.maxHeight ?? 480;
  console.log({ maxWidth, maxHeight });
}

let params = {
  maxWidth: 800,
  maxHeight: 600,
};

resize1(params);
resize2(params);
resize1(undefined);
resize2(undefined);
