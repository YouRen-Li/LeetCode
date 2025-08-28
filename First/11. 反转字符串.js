/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 1.最快最简单，api一次搞定
var reverseString = function (s) {
  return s.reverse();
};

console.log(reverseString((s = ["h", "e", "l", "l", "o"])));
console.log(reverseString((s = ["H", "a", "n", "n", "a", "h"])));

// 2.标准解法——双指针法
var reverseString = function (s) {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }
  return s;
};

console.log(reverseString((s = ["h", "e", "l", "l", "o"])));
console.log(reverseString((s = ["H", "a", "n", "n", "a", "h"])));
