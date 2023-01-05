function getSum(a) {
  return function(b) {
    return a + b
  }
}

const calc = getSum(5);

console.log(calc(6));
