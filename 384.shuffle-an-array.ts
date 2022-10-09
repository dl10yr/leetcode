/*
 * @lc app=leetcode id=384 lang=typescript
 *
 * [384] Shuffle an Array
 */

// @lc code=start
class Solution {
    private nums: number[]
    private origin: number[]

    constructor(nums: number[]) {
        this.nums = nums
        this.origin = [...nums]
    }

    reset(): number[] {
        return this.origin
    }

    shuffle(): number[] {
        for (let i = this.origin.length - 1; i >= 0; i--) {
            const random = Math.floor(Math.random() * (i+1))
            const tmp = this.nums[i]
            this.nums[i] = this.nums[random]
            this.nums[random] = tmp
        }
        return this.nums
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end

