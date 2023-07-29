function correct(string) {
  return string.replace(/5/g, 'S').replace(/1/g, 'I').replace(/0/g, 'O')
}

console.log(correct("51NGAP0RE"));