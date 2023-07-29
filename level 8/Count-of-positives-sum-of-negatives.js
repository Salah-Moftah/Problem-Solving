function countPositivesSumNegatives(input) {
  let positive = input.filter((e) => e > 0).length;
  let negative = input.filter((e) => e < 0).reduce((acc, curr) => acc + curr, 0)
  return Array.of(positive, negative);
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);

function countPositivesSumNegatives(input) {
  let count = 0;
  let sum = 0;
  let arr = [];

  if (input === null || input.length == 0) {
    return arr
  } else {
    input.map((m) => m > 0 ? count++ : sum += m)
  }
  return arr = [count, sum]
}
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);