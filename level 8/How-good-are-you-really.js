function betterThanAverage(classPoints, yourPoints) {
  let c = classPoints.reduce((a, c) => a + c ,0) / classPoints.length
  return c >= yourPoints 
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));

