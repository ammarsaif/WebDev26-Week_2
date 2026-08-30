const count = (function () {
  let counter = 0;

  function increment() {
    counter += 1;
  }

  function reset() {
    counter = 0;
  }

  function getCounter() {
    return counter;
  }

  return {
    increment: increment,
    reset: reset,
    getCounter: getCounter,
  };
})();

// Check Initial Value
console.log(`Check Initial value: ${count.getCounter()}`);

count.increment();
count.increment();
count.increment();

// Check Increment Value
console.log(`Check value after increment: ${count.getCounter()}`);

count.reset();

// Check Reset Value
console.log(`Check value after reset: ${count.getCounter()}`);
