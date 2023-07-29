function areYouPlayingBanjo(name) {
  // if (name.startsWith('r') === true || name.startsWith('R') === true) {
  //   return `${name} plays banjo`
  // } else {
  //   return `${name} does not play banjo`
  // }
  return (/^r/i).test(name) ? `${name} plays banjo` : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo("Adam"));
console.log(areYouPlayingBanjo("Ringo"));
console.log(areYouPlayingBanjo("rolf"));
