// 给定两个数组 nums1 和 nums2 ，返回 它们的 交集 。
// 输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 这种写法虽然可以，但是太low了。
// var intersection = function (nums1, nums2) {
//   const array = [];
//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; k < nums2.length; j++) {
//       if (nums1[i] == nums2[j]) {
//         array.push(nums1[i]);
//       }
//     }
//   }

//   return array;
// };

// console.log(intersection((nums1 = [1, 2, 2, 1]), (nums2 = [2, 2])));

// 2.利用set去重
var intersection = function (nums1, nums2) {
  const st1 = new Set(nums1);
  const st2 = new Set(nums2);
  const res = [];

  for (let val of st2) {
    if (st1.has(val)) {
      res.push(val);
    }
  }
  return res;
};

