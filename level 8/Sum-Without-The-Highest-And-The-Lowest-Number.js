function sumArray(array) {
  if (array == null) return 0;
  return array.sort((a,b) => a - b).slice(1, -1).reduce((acc, curr) => acc + curr,0);
  
}
console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([1, 1, 11, 2, 3]));
console.log(sumArray());
