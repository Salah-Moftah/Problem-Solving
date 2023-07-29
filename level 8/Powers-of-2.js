function powersOfTwo(n) {
  return Array(n + 1)
    .fill(0)
    .map((e, i) => e + i)
    .map((e) => Math.pow(2, e));
}
console.log(powersOfTwo(4));

