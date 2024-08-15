/*
 * @lc app=leetcode id=39 lang=typescript
 *
 * [39] Combination Sum
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
    let ans: number[][] = []

    const dfs = (i: number, current: number[], total: number) => {
      if (total === target) {
        ans.push([...current])
        return
      }

      if (i >= candidates.length || total > target) {
        return
      }

      current.push(candidates[i])
      dfs(i, current, total + candidates[i])

      current.pop()
      dfs(i + 1, current, total)
    }
    

    dfs(0, [], 0)


    return ans
};
// @lc code=end

