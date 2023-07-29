function positiveSum(arr) {
  return arr.filter((e) => e > 0).reduce((acc, curr) => acc + curr, 0);
  // var positive = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > 0) {
  //     positive += (arr[i]);
  //   }
  // }
  
  // return positive;
}

console.log(positiveSum([1, -4, 7, 12]));

