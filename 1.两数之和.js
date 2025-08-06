/** 1.暴力破解 执行用时47毫秒
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//   var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         return [i, j];
//       }
//     }
//   }
// };

/** 2.利用has表解决 执行用时4毫秒
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  const maps = new Map();
  for (let i = 0; i < nums.length; i++) {
    const sub = target - nums[i];
    if (maps.has(sub)) {
      return [maps.get(sub), i];
    }
    maps.set(nums[i], i);
  }
};

console.log(twoSum([3, 2, 4], 6));
