/*
 * @lc app=leetcode id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */


// @lc code=start
function myPow(x: number, n: number): number {
  function helper(x: number, absN: number): number {
    if (x === 0) return 0
    if (absN === 0) return 1
  
    const res = helper(x * x, Math.floor(absN / 2))
    return absN % 2 === 1 ? x * res : res
  }
  
  const absN = Math.abs(n)

  const ans = helper(x, absN)

  return n < 0 ? 1 / ans : ans

};
// @lc code=end

