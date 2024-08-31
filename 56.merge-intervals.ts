/*
 * @lc app=leetcode id=56 lang=typescript
 *
 * [56] Merge Intervals
 */

// @lc code=start
function mergeInterval(intervals: number[][]): number[][] {
  let merged: number[][] = []
  let prev = intervals.shift()

  for (const current of intervals) {
    const [prevStart, prevEnd] = prev!
    const [currentStart, currentEnd] = current

    if (currentStart <= prevEnd) {
      prev![1] = Math.max(prev![1], current[1])
      continue
    }

    merged.push(prev!)
    prev = current
  }

  return [...merged!, prev!]
}


function merge(intervals: number[][]): number[][] {
  intervals.sort(([aStart, aEnd], [bStart, bEnd]) => aStart !== bStart ? aStart - bStart : aEnd - bEnd)

  return mergeInterval(intervals)
};
// @lc code=end

