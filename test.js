/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let sum = 0;
  let start = 0;
  let length = Infinity;

  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];
    while (sum >= target) {
      length = Math.min(length, end - start + 1); //此时最小的子数组长度
      sum -= nums[start];
      start++;
    }
  }
  return length == Infinity ? 0 : length;
};

console.log(minSubArrayLen((target = 7), (nums = [2, 3, 1, 2, 4, 3])));
console.log(minSubArrayLen((target = 4), (nums = [1, 4, 4])));
console.log(minSubArrayLen((target = 11), (nums = [1, 1, 1, 1, 1, 1, 1, 1])));
