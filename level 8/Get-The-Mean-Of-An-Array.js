function getAverage(marks) {
  return Math.floor(marks.reduce((acc, crr) => acc + crr, 0) / marks.length);
}

console.log(getAverage([2, 2, 2, 2]));
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
