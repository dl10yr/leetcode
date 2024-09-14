/*
 * @lc app=leetcode id=55 lang=typescript
 *
 * [55] Jump Game
 */

// @lc code=start
function canJump(nums: number[]): boolean {
    let goal = nums.length - 1

    for (let i = nums.length - 2; i >= 0; i--) {
      if (i + nums[i] >= goal) {
        goal = i
      }
    }

    return goal === 0
};
// @lc code=end

