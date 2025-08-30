/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口计算
// 思路就是，首先把前面没重复的数据全部保存在一个数组里
// 然后，遇到了重复的元素，就开始从最左边开始消除
// 一直消除到数组里这个重复的元素消失
// 然后把刚刚遇到的重复元素添加进数组
// 以此类推
var lengthOfLongestSubstring = function (s) {
  // 1.首先定义一个新的数组，用来保存没有重复的数据
  let array = [];
  // 1.因为遍历到最后，会导致新数组越来越小
  // 所以我们应该需要一个第三方最大值，用来保存最大的长度
  // 初始化为0
  let length = 0;
  let maxlength = 0;

  // 2.遍历字符串
  for (let i = 0; i < s.length; i++) {
    // 3.如果遇到了重复的元素，我们需要循环新的数组，从最左边开始
    // 一直减到该元素消失
    // 这里就需要用while循环了，因为while可以做条件判断
    while (array.includes(s[i])) {
      let index = array.findIndex((item) => item == s[i]) + 1;
      array.splice(0, index);
      length -= index;
    }

    // 4.如果没有重复的元素，我们就添加到数组中
    array.push(s[i]);
    length++;
    maxlength = Math.max(maxlength, length);
  }
  return maxlength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("dvdf")); // 3
