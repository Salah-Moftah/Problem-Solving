function rentalCarCost(d) {
  let costs = d * 40;
  // if (d < 3) {
  //   return d * costs;
  // } else if (d >= 7) {
  //   return costs - 50;
  // } else {
  //   return costs - 20;
  // }
  return d < 3 ? costs : d >= 7 ? costs - 50 : costs - 20;
}

console.log(rentalCarCost(1));
console.log(rentalCarCost(2));
console.log(rentalCarCost(3));
console.log(rentalCarCost(4));
console.log(rentalCarCost(7));
console.log(rentalCarCost(8));

