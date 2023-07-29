function squareSum(numbers) {
  return numbers.map((n) => n * n).reduce((acc, curr) => acc + curr, 0);
}

console.log(squareSum([0, 3, 4, 5]));
