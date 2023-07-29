function invert(array) {
  return array.map((e) => e > 0 ? -e : e * -1);
}

console.log(invert([1,2,3,4,5]));
console.log(invert([1,-2,3,-4,5]));
console.log(invert([]));
