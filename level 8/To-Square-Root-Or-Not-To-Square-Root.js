function squareOrSquareRoot(array) {
  return array.map(el => Number.isInteger(Math.sqrt(el)) ? Math.sqrt(el) : el * el);  
}

console.log(squareOrSquareRoot([4,3,9,7,2,1]));
