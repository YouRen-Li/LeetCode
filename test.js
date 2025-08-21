/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] < 10) {
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};

console.log(plusOne((digits = [9])));
console.log(plusOne((digits = [0])));
console.log(plusOne((digits = [9, 9])));
console.log(plusOne((digits = [1, 2, 2])));
console.log(plusOne((digits = [4, 3, 2, 1])));
