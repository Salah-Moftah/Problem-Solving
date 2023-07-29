function removeEveryOther(arr) {
  // let array = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (i % 2 === 0) {
  //     array.push(arr[i]);
  //   }
  // }
  // return array;
  return arr.filter((e, n) => n % 2 === 0);
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
