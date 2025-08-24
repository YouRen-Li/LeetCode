/**
 * @param {number[]} prices
 * @return {number}
 */
// 这个答案符合要求，但是超时
var maxProfit = function (prices) {
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > sum) {
        sum = prices[j] - prices[i];
      }
    }
  }
  return sum;
};

console.log(maxProfit([2, 4, 1]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// 该答案只有o1的次数，时间答案均符合
var maxProfit = function (prices) {
  let min = prices[0]; //假设最初买入价为第一次的价格
  let profit = 0; //假设最初利润为0

  for (const price of prices) {
    //遍历数组，得到数组每次的价格
    //将每次数组的值和当前的买入价进行对比，如果这时数组的值最小，那就赋值给min
    // min初始值为第一次的买入价，2与2对比，得到min还是2
    // 第二次，2和4对比，min还是2
    // 第三次，2和1对比，min得到1
    // 综上所述，min的每次遍历结果为，2，2，1
    min = Math.min(min, price);
    //利润等于当前的价格减去买入的价格，就是利润
    // 第一次，买入的价格为2，当前价格为2，所以利润为0
    // 第二次，买入的价格此时还是2，当前的价格为4，所以利润为2
    // 第三次，买入的价格是1，当前的价格是1，所以利润为0
    // max是获取最大的那一次利润，所以利润最终结果还是为2
    profit = Math.max(profit, price - min);
  }
  return profit;
};

console.log(maxProfit([2, 4, 1]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
