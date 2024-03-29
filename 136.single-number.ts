/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  const map = new Map<number, number>()
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }
  for (const num of nums) {
    if (map.get(num) === 1) return num
  }
};
// @lc code=end

