export function any(...funcs) {
  return function (arg) {
    return funcs.some((func) => func(arg));
  };
}

export function catching(tryFunc, catchFunc) {
  return function (...args) {
    try {
      return tryFunc(...args);
    } catch (error) {
      return catchFunc(error);
    }
  };
}
