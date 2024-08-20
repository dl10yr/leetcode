/*
 * @lc app=leetcode id=46 lang=typescript
 *
 * [46] Permutations
 */

// @lc code=start
function permute(nums: number[]): number[][] {
    
  let ans: number[][] = []

  if (nums.length === 1) {
    return [[...nums]]
  }

  for (const i of nums) {
    let n = nums.shift()!

    let perms = permute(nums)

    for (const perm of perms) {
        perm.push(n)
    }

    perms.forEach((perm) => {
      ans.push(perm);
    })

    nums.push(n)

  }

  return ans

};
// @lc code=end

