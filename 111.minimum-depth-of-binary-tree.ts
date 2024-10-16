/*
 * @lc app=leetcode id=111 lang=typescript
 *
 * [111] Minimum Depth of Binary Tree
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
function minDepth(root: TreeNode | null): number {
  if (!root) return 0

  if (root.left === null) {
      return 1 + minDepth(root.right)
  }

  if (root.right === null) {
      return 1 + minDepth(root.left)
  }

  return 1 + Math.min(minDepth(root.right), minDepth(root.left))

};
// @lc code=end

