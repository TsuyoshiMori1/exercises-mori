export function counterGroup() {
  let counters: Array<ReturnType<typeof counter>> = [];
  let count = -1;

  function counter() {
    let n = 0;
    return {
      count: function () {
        return n++;
      },
      reset: function () {
        n = 0;
      },
      getCount: function () {
        return n;
      },
    };
  }

  return {
    newCounter: () => {
      const newCounter = counter();
      counters.push(newCounter);
      return newCounter;
    },
    total: () => {
      return counters.reduce((sum, counter) => sum + counter.getCount(), 0);
    },
  };
}
