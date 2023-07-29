function digitize(n) {
  return String(n).split('').reverse().map(num => Number(num));
}
console.log(digitize(35231));
console.log(digitize(0));