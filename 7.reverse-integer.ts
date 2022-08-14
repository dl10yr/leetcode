/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
  const maxNumber = Math.pow(2, 31) - 1
  const out = Math.abs(parseInt(x.toString().split('').reverse().join('')))
  return out > maxNumber ? 0 : out * Math.sign(x)
};
// @lc code=end

