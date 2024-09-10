/*
 * @lc app=leetcode id=506 lang=typescript
 *
 * [506] Relative Ranks
 */

// @lc code=start
function findRelativeRanks(score: number[]): string[] {
  const clonedScore = [...score].sort((a, b) => b - a)

  return score.map((s) => {
    const index = clonedScore.indexOf(s)
    if (index === 0) {
      return 'Gold Medal'
    } else if (index === 1) {
      return 'Silver Medal'
    } else if (index === 2) {
      return 'Bronze Medal'
    } else {
      return (index + 1).toString()
    }
  })
};
// @lc code=end

