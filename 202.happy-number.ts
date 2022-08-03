/*
 * @lc app=leetcode id=202 lang=typescript
 *
 * [202] Happy Number
 */

// @lc code=start
function isHappy(n: number): boolean {
  const nums: number[] = []
  let num = n
  while (!nums.includes(num)) {
    nums.push(num)
    num = String(num).split('').map(s => parseInt(s, 10)**2).reduce((prev, cur) => prev + cur, 0) 
    if (num === 1) return true
  }
  return false
};
// @lc code=end

