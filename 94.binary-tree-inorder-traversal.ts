/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
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

function helper(root: TreeNode | null, res: Array<number>) {
  if (!root) return
  if (root.left) helper(root.left, res)
  res.push(root.val)
  if (root.right) helper(root.right, res)
}

function inorderTraversal(root: TreeNode | null): number[] {
  let res = []
  helper(root, res)
  return res
};
// @lc code=end

