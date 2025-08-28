/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false; //首先判断两个字符串长度是否相等，不相等则直接返回 false
  const hashMap = new Array(26).fill(0); //构建26字母表，全部填充位为0

  for (let i = 0; i < s.length; i++) {
    //s和t长度相等，所以遍历哪个都行
    hashMap[s.charCodeAt(i) - "a".charCodeAt(0)]++; //把字符转成26字母表所在的hash表位置
    hashMap[t.charCodeAt(i) - "a".charCodeAt(0)]--; //如果两个字符是字母异位词，那么它们每个字母出现的次数应该完全一样。所以++和--会互相抵消掉
  }

  for (let i = 0; i < hashMap.length; i++) {
    if (hashMap[i] != 0) return false; //如果是字母异位词，那么根据前面的循环，已经互相抵消为0了。没有抵消为0，就代表不是字母异位词，所以返回false
  }

  return true; //经过上面的步骤，确定为字母异位词，返回true
};

console.log(isAnagram((s = "rat"), (t = "car")));
