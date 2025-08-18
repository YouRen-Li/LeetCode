/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const array = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (array.has(nums[i])) {
      return true;
    }
    array.set(nums[i]);
  }
  return false;
};

// 这道题有第一题两数之和的基础，我2分钟就写出来了。
// 刷刷算法还是有用的，看样子

console.log(containsDuplicate((nums = [1, 2, 3, 1])));
console.log(containsDuplicate((nums = [1, 2, 3, 4])));
console.log(containsDuplicate((nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2])));
