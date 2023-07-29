function fakeBin(x) {
  // return x.split('').map((e) => e < 5 ? '0': '1').join('');
  return x.replace(/[1-4]/g, "0").replace(/[5-9]/g, "1");
}

console.log(fakeBin("45385593107843568"));

