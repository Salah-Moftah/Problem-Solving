function noBoringZeros(n) {
  let string = String(n);
  // while (string.endsWith(0)) {
  //   string = string.slice(0, string.length - 1);
  // }
  // return Number(string)
  return +string.replace(/0*$/, '');
}
console.log(noBoringZeros(1450));
console.log(noBoringZeros(960000));
console.log(noBoringZeros(-1050));