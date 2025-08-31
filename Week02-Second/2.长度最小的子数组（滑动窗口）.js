/**
 * @param {number} target     // 目标和（要达到或超过的值）
 * @param {number[]} nums     // 正整数数组（注意：算法假设 nums 元素非负/正数）
 * @return {number}           // 返回最短子数组长度；如果不存在，返回 0
 */
var minSubArrayLen = function (target, nums) {
  let n = nums.length; // 数组长度
  if (n === 0) return 0; // 空数组，直接返回 0

  let ans = Infinity; // 记录最短长度（初始为无穷大）
  let start = 0,
    end = 0; // 滑动窗口的左右边界，窗口表示 [start, end]
  let sum = 0; // 当前窗口的元素和（sum = nums[start] + ... + nums[end]）

  // 主循环：用 end 扩张窗口，直到遍历完整个数组
  while (end < n) {
    // 把当前 end 指向的元素加入窗口和
    sum += nums[end];
    console.log("sum:" + sum); // 打印当前 sum（方便跟踪）

    // 当当前窗口和已经 >= target 时，尝试收缩左边界 start，
    // 以找到更短的满足条件的子数组（内层 while 保证窗口是“最短的以当前 end 为右端点”的）
    while (sum >= target) {
      // 更新最短长度（end - start + 1 是当前窗口长度）
      ans = Math.min(ans, end - start + 1);
      console.log("ans:" + ans);

      // 把左边的值移出窗口，并把 start 右移（收缩窗口）
      sum -= nums[start];
      console.log("sum:" + sum);
      start++;
    }

    // 扩张右边界，继续遍历
    end++;
    console.log("end:" + end);
  }

  // 如果 ans 还是 Infinity，说明不存在满足条件的子数组，返回 0
  return ans === Infinity ? 0 : ans;
};

console.log(minSubArrayLen((target = 7), (nums = [2, 3, 1, 2, 4, 3])));
console.log(minSubArrayLen((target = 4), (nums = [1, 4, 4])));
console.log(minSubArrayLen((target = 11), (nums = [1, 1, 1, 1, 1, 1, 1, 1])));

// 2.自己写的
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
