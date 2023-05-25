function calcSum(numbers) {
  return numbers.reduce((sum, item) => sum + item, 0);
}

console.log(calcSum([]));
