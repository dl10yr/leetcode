/*
 * @lc app=leetcode id=57 lang=typescript
 *
 * [57] Insert Interval
 */

// @lc code=start

function getBefore (intervals: number[][], newInterval: number[], index: number = 0, before: number[][] = []): { beforeIndex: number, before: number[][] }  {
  const hasGap = ([prevStart, prevEnd]: number[], [currStart, currEnd]: number[]) => prevEnd < currStart;
  
  while (index < intervals.length && hasGap(intervals[index], newInterval)) {
      const current = intervals[index];
      before.push(current);
      index++;
  }
  return { beforeIndex: index, before };
};

function mergeIntervals (intervals: number[][], newInterval: number[], index: number): number {
  const hasOverlap = ([prevStart, prevEnd]: number[], [currStart, currEnd]: number[]) => currStart <= prevEnd;

  while (index < intervals.length && hasOverlap(newInterval, intervals[index])) {
      const current = intervals[index];
      newInterval[0] = Math.min(newInterval[0], current[0]);
      newInterval[1] = Math.max(newInterval[1], current[1]);
      index++;
  }
  return index;
};

function insert(intervals: number[][], newInterval: number[]): number[][] {
    const { beforeIndex, before } = getBefore(intervals, newInterval)

    const afterIndex = mergeIntervals(intervals, newInterval, beforeIndex)

    const after = intervals.slice(afterIndex)

    return [...before, newInterval, ...after]
};
// @lc code=end


