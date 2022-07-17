/*
 * @lc app=leetcode id=326 lang=typescript
 *
 * [326] Power of Three
 */

// @lc code=start
function isPowerOfThree(n: number): boolean {
  return Number.isInteger(parseFloat((Math.log(n)/Math.log(3)).toPrecision(15)))
};
// @lc code=end

