/*
 * @lc app=leetcode id=112 lang=typescript
 *
 * [112] Path Sum
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) {
      return false
    }

    if (root.val === targetSum && root.right === null && root.left === null) {
      return true
    }

    const rightResult = hasPathSum(root.right, targetSum - root.val)
    const leftResult = hasPathSum(root.left, targetSum - root.val)

    return rightResult || leftResult
};
// @lc code=end

