function getCount(str) {
  let v = 'aeiou'
  return str.replaceAll(' ', '').split('').filter((e) => v.includes(e)).length;
  // return (str.match(/[aeiou]/ig)||[]).length;
}

console.log(getCount("abracaduabraei"));
