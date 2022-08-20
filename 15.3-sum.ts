/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return []
  nums.sort((a, b) => a - b)
  const results: number[][] = []

  for (let firstIndex = 0; firstIndex < nums.length - 2; firstIndex++) {
    while (nums[firstIndex] === nums[firstIndex - 1]) firstIndex++

    let l = firstIndex + 1
    let r = nums.length - 1

    while (l < r) {
      const [firstNumber, leftNumber, rightNumber] = [nums[firstIndex], nums[l], nums[r]]
      const sum = firstNumber + leftNumber + rightNumber
      if (sum === 0) {
        results.push([firstNumber, leftNumber, rightNumber])
        while(nums[l] === nums[l+1]) l++
        l++
      }
      if (sum > 0) r--
      if (sum < 0) l++
    }
  }
  return results
};
// @lc code=end

