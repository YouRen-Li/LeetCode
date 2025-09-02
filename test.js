/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// 这道题是困难，依然可以使用滑动窗口来计算
var minWindow = function (s, t) {
  let need = new Map(); //保存每个字符需要出现的次数
  let window = new Map(); //记录窗口里字符出现的次数

  // 1. 统计目标串 t 的字符频率
  for (let c of t) {
    need.set(c, (need.get(c) || 0) + 1);
  }

  let left = 0,
    right = 0; // 窗口左右边界
  let valid = 0; // 满足条件的字符数
  let start = 0,
    len = Infinity; // 记录最小子串的位置和长度

  while (right < s.length) {
    // 1. 扩张窗口，加入一个字符
    let c = s[right];
    right++;
    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1);
      if (window.get(c) === need.get(c)) {
        valid++;
      }
    }
  }

  // 2. 收缩窗口
  while (valid === need.size) {
    // 更新最小子串
    if (right - left < len) {
      start = left;
      len = right - left;
    }

    let d = s[left];
    left++;
    if (need.has(d)) {
      if (window.get(d) === need.get(d)) {
        valid--;
      }
      window.set(d, window.get(d) - 1);
    }
  }

  return len === Infinity ? "" : s.substring(start, start + len);
};

console.log(minWindow((s = "ADOBECODEBANC"), (t = "ABC")));
console.log(minWindow((s = "a"), (t = "a")));
console.log(minWindow((s = "a"), (t = "aa")));
