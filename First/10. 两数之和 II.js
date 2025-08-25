/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 超出时间限制
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == target) {
        return [i + 1, j + 1];
      }
    }
  }
};

console.log(twoSum((numbers = [2, 7, 11, 15]), (target = 9)));
console.log(twoSum((numbers = [2, 3, 4]), (target = 6)));
console.log(twoSum((numbers = [-1, 0]), (target = -1)));
console.log(twoSum((numbers = [0, 0, 3, 4]), (target = 0)));
console.log(twoSum((numbers = [5, 25, 75]), (target = 100)));
console.log(twoSum((numbers = [1, 2, 3, 4, 4, 9, 56, 90]), (target = 8)));

// 2.前面两数之和的hash解法
var twoSum = function (numbers, target) {
  let map=new Map();
  for(let i=0;i<numbers.length;i++){
    if(map.has(target-numbers[i])){
      return [map.get(target-numbers[i])+1,i+1];
    }
      map.set(numbers[i],i);
  }
};

console.log(twoSum((numbers = [2, 7, 11, 15]), (target = 9)));
console.log(twoSum((numbers = [2, 3, 4]), (target = 6)));
console.log(twoSum((numbers = [-1, 0]), (target = -1)));
console.log(twoSum((numbers = [0, 0, 3, 4]), (target = 0)));
console.log(twoSum((numbers = [5, 25, 75]), (target = 100)));
console.log(twoSum((numbers = [1, 2, 3, 4, 4, 9, 56, 90]), (target = 8)));

// 3.标准解法，双指针法
var twoSum = function (numbers, target) {
  let start = 0; //数组的第一个元素下标
  let over = numbers.length - 1; //数组的最后一个元素下标
  while (start < over) {
    //结尾的次数减去初始的次数，就是数组整个元素，遍历整个数组
    let sum = numbers[start] + numbers[over]; //第一个元素加最后一个元素
    if (sum == target)
      return [start + 1, over + 1]; //如果第一个加最后一个等于目标值，直接retune
    else if (sum > target)
      --over; //如果相加后大于目标值，就让最后一个元素退一位，退一位的元素相加求和
    else if (sum < target) ++start; //如果第一个元素加上后面的任何一个元素都不大于目标值，那么就让第一个元素加1，让第二个元素和后面的元素相加
  }
};

console.log(twoSum((numbers = [2, 7, 11, 15]), (target = 9)));
console.log(twoSum((numbers = [2, 3, 4]), (target = 6)));
console.log(twoSum((numbers = [-1, 0]), (target = -1)));
console.log(twoSum((numbers = [0, 0, 3, 4]), (target = 0)));
console.log(twoSum((numbers = [5, 25, 75]), (target = 100)));
console.log(twoSum((numbers = [1, 2, 3, 4, 4, 9, 56, 90]), (target = 8)));
