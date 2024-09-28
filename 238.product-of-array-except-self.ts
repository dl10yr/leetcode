/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {

  const zeros = nums.filter(n => n === 0)

  if (zeros.length >= 2) {
    return nums.map(n => 0) 
  }

  if (zeros.length === 1) {
    const prd = nums.filter(n => n !== 0).reduce((prev, curr) => prev * curr, 1)

    return nums.map(n => {
      if (n === 0) return prd
      return 0
    })
  }

  let all = 1
  for (const num of nums) {
    all = all * num
  }

  return nums.map(n => {
    return n === 0 ? all : all / n
  })
};
// @lc code=end

