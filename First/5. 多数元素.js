/**
 * @param {number[]} nums
 * @return {number}
 */
// 1.暴力解法
var majorityElement1 = function (nums) {
  let array = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!array.has(nums[i])) {
      array.set(nums[i], 1);
    } else {
      array.set(nums[i], array.get(nums[i]) + 1);
    }
  }

  let max = 0;
  let maxKey = 0;
  for (const [key, value] of array) {
    if (value > max) {
      max = value;
      maxKey = key;
    }
  }

  return maxKey;
};

console.log(majorityElement1((nums = [3, 2, 3])));
console.log(majorityElement1((nums = [2, 2, 1, 1, 1, 2, 2])));

// 2.摩尔投票算法
// 多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素
// 所以可以采用，消除的方式
// 用多数元素减去其他的元素，最后剩下的一定是最多的那个元素
var majorityElement = function (nums) {
  let num = null;
  let count = 0; //计数器
  for (const element of nums) {
    if (count == 0) {
      //第一次初始化，让num初始化为数组第一个数字
      num = element;
      count++;
    } else {
      //第二次进入，此时count为1
      if (num == element) {
        //如果等于，说明是重复元素，相加
        count++;
      } else {
        //如果不等于，说明不是重复元素，相减
        count--;
      }
    }
  }
  return num;
};

console.log(majorityElement((nums = [3, 2, 3])));
console.log(majorityElement((nums = [2, 2, 1, 1, 1, 2, 2])));
