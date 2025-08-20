/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 1.暴力解法
// var moveZeroes = function (nums) {
//   let count = 0;
//   for (let i = nums.length; i >= 0; i--) {
//     if (nums[i] == 0) {
//       nums.splice(i, 1);
//       count++;
//     }
//   }

//   for (let i = 0; i < count; i++) {
//     nums.push(0);
//   }
//   return nums;
// };

// console.log(moveZeroes((nums = [0, 1, 0, 3, 12])));
// console.log(moveZeroes((nums = [0])));
// console.log(moveZeroes((nums = [0, 0, 1])));


// 2.双指针法——通过计算0的个数来移动数组
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let count = 0; //计算数组中0的个数

  //遍历数组
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[count] = nums[i]; //如果数组的元素不为0，那么提到第一位
      count++; //0的个数+1
    }
  }

  for (let j = count; j < nums.length; j++) {
    nums[j] = 0; //数组中的0个数，全部在最后补0补上
  }

  return nums;
};

console.log(moveZeroes((nums = [0, 1, 0, 3, 12])));
console.log(moveZeroes((nums = [0])));
console.log(moveZeroes((nums = [0, 1, 4, 0, 5, 6])));
