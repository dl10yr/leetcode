/*
 * @lc app=leetcode id=704 lang=typescript
 *
 * [704] Binary Search
 */

// @lc code=start
function search(nums: number[], target: number): number {
    let l= 0
    let r = nums.length - 1
    let ans = -1

    while (l <= r) {
        let m = Math.floor((l + r) / 2)
        if (target === nums[m]) {
            return m
        } else if (target >= nums[m]) {
            l = m + 1
        } else {
            r = m - 1
        }
    }

    return ans
};// @lc code=end

