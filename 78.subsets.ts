/*
 * @lc app=leetcode id=78 lang=typescript
 *
 * [78] Subsets
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
    let ans: number[][] = []
    let subset: number[] = []

    const dfs = (i: number) => {
      if (i >= nums.length) {
        ans.push(subset.slice())
        return
      }

      subset.push(nums[i])
      dfs(i + 1)

      subset.pop()
      dfs(i + 1)

    }

    dfs(0)

    return ans;
};
// @lc code=end

