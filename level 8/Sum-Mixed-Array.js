function sumMix(x){
  return x.reduce((a, c) => a + Number(c), 0)
}

console.log(sumMix([9, 3, '7', '3']));