function findAverage(array) {
  if (array.length === 0) return 0;
  return array.reduce((a, c) => a + c) / array.length;
}
console.log(findAverage([1,2,3,4]));