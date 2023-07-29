function isPalindrome(x) {
  return x.toLowerCase() === x.split("").reverse().join("").toLowerCase()
    ? true
    : false;
}

console.log(isPalindrome("Abba"));
console.log(isPalindrome("hello"));


