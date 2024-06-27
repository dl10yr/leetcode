/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const zero = nums.filter(n => n === 0).length
  let cnt = 0
  for (let i = 0; i < nums.length; i++) {
    if (cnt > zero) break
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
      i--
      cnt++
    } else {
      cnt = 0
    }
  }
};
// @lc code=end

