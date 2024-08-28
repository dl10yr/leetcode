/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  const th = Math.ceil(nums.length / 2)
  const map = new Map<number, number>()
  for (const num of nums) {
    const old = map.get(num) || 0
    if (old + 1 >= th) return num
    map.set(num, old + 1)
  }
};
// @lc code=end

