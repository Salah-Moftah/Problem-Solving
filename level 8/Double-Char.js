function doubleChar(str) {
  let S = str.split('').map((el) => el + el).join('');
  return S
}
console.log(doubleChar("String"));
console.log(doubleChar("Hello World"));
console.log(doubleChar("1234!_"));