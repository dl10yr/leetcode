/*
 * @lc app=leetcode id=350 lang=typescript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
  const map = new Map<number, number>()
  nums1.forEach(num => {
    map.set(num, (map.get(num) ?? 0) + 1)
  })

  const result: number[] = []
  for (const n of nums2) {
    if ((map.get(n) ?? 0) > 0) {
      result.push(n)
      map.set(n, map.get(n)! - 1 )
    }
  }
  return result
};
// @lc code=end

