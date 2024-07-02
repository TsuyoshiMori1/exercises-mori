export function addMyCall(f) {
  f.myCall = function (...args) {
    return f.bind(args[0])(...args.slice(1));
  };
}
