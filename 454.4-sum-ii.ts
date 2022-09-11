/*
 * @lc app=leetcode id=454 lang=typescript
 *
 * [454] 4Sum II
 */

// @lc code=start
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  const map = new Map<number, number>()
  let ans = 0

  for (const num1 of nums1) {
    for (const num2 of nums2) {
      const sum = num1 + num2
      map.set(sum, (map.get(sum) || 0) + 1)
    }
  }
  for (const num3 of nums3) {
    for (const num4 of nums4) {
      const target = - num3 - num4
      ans += map.get(target) || 0
    }
  }

  return ans
};
// @lc code=end

