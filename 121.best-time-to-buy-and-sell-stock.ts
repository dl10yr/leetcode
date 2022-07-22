/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  const mins: number[] = []
  for (const price of prices) {
    if (mins.length === 0) {
      mins.push(price)
    } else if (mins[mins.length -1] >= price) {
      mins.push(price)
    } else if (mins[mins.length -1] < price) {
      mins.push(mins[mins.length -1])
    }
  }
  const diffs: number[] = []
  for (let i = 0; i < prices.length; i++) {
    diffs.push(prices[i] - mins[i])
  }
  return Math.max(...diffs) < 0 ? 0 : Math.max(...diffs)
};
// @lc code=end

