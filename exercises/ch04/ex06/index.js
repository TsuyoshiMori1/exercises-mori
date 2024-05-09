function resize(params) {
  let maxWidth = 600;
  let maxHeight = 480;

  if (params && params.maxWidth) {
    maxWidth = params.maxWidth;
  }

  if (params && params.maxHeight) {
    maxHeight = params.maxHeight;
  }

  console.log({ maxWidth, maxHeight });
}

function resize1(params) {
  let maxWidth = (params && params.maxWidth) || 600;
  let maxHeight = (params && params.maxHeight) || 480;
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

resize(params);
resize1(params);
resize2(params);
resize(undefined);
resize1(undefined);
resize2(undefined);
