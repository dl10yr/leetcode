/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  const distinctList = Array.from(new Set(nums))
  if (distinctList.length === nums.length) return false
  return true
};
// @lc code=end

