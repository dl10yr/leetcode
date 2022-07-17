/*
 * @lc app=leetcode id=108 lang=typescript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function construct(nums: number[], start: number, end: number): TreeNode | null {
  if (start > end) return null

  const mid = Math.floor((start+end) / 2)
  const current: TreeNode = new TreeNode(nums[mid])
  current.left = construct(nums, start, mid - 1)
  current.right = construct(nums, mid + 1, end)
  return current
}


function sortedArrayToBST(nums: number[]): TreeNode | null {
  const [start, end] = [0, nums.length -1]
  return construct(nums, start, end)
};
// @lc code=end

