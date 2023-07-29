function shortcut(string) {
  // let a = ['a', 'e', 'i', 'o', 'u']
  // result = []
  // for (let i = 0; i < string.length; i++) {
  //   if (!a.includes(string[i])) {
  //     result.push(string[i])
  //   }
  // }
  // return result.join('');
  return string.replace(/[aeiou]/g, "");
}

console.log(shortcut("hello"));

