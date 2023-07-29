var summation = function (num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr.reduce((a, c) => a + c, 0);
};

console.log(summation(8));

