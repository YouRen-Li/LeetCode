/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = Math.min(...prices);
  let max = null;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] == min) {
      prices.splice(0, i + 1);
      if (prices.length == 0) {
        return 0;
      }
      max = Math.max(...prices);
    }
  }
  return max - min;
};


console.log(maxProfit([2, 4, 1]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));


