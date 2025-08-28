/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let char = ""; //定义一个空字符串保存新的字符
  s = s.toLowerCase(); //把字符串转换为小写
  for (let i = 0; i < s.length; i++) {
    //遍历字符串
    if (
      //如果字符串的unicode编码在48-57，97-122之间，说明就说在0-9，a-z之间
      // 那么就保存到空的字符串里
      (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) ||
      (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57)
    ) {
      char += s[i];
    }
  }

  // 这里用了3个方法，split把字符串通过""剪切为数组，
  // reverse反转数组，join把数组拼成字符串
  // 把原来的新数组和反转后拼接的进行比较，如果一致就是true
  // 不一致就是false
  return char == char.split("").reverse().join("");
};

console.log(isPalindrome((s = "A man, a plan, a canal: Panama")));
console.log(isPalindrome((s = "race a car")));
console.log(isPalindrome((s = " ")));
console.log(isPalindrome((s = "0P")));

// console.log("a".charCodeAt());
// console.log("z".charCodeAt());
// console.log("0".charCodeAt());
// console.log("9".charCodeAt());
