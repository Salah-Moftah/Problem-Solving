function position(letter) {
  a = "abcdefghijklmnopqrstuvwxyz";
  return `Position of alphabet: ${a.indexOf(letter) + 1}`;
}

console.log(position("a"));
console.log(position("z"));

