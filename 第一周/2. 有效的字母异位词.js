/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false; //首先判断两个字符串长度是否相等，不相等则直接返回 false
  const hashMap = new Array(26).fill(0); //若相等，则初始化 26 个字母哈希表
  for (let i = 0; i < s.length; i++) {
    hashMap[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    hashMap[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  for (let i = 0; i < 26; i++) {
    if (hashMap[i] != 0) return false;
  }

  return true;
};

console.log(isAnagram((s = "anagram"), (t = "nagaram")));
console.log(isAnagram((s = "rat"), (t = "car")));