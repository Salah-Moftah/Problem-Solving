function feast(beast, dish) {
  return beast.startsWith(dish[0]) === true &&
    beast.endsWith(dish[dish.length - 1])
    ? true
    : false;
}

console.log(feast("great blue heron", "garlic naan"));
console.log(feast("brown bear", "bear claw"));

