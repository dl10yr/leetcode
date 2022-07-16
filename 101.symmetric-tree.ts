/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
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
function isMirror(l: TreeNode | null, r: TreeNode | null): boolean {
  if (l === null && r === null) return true
  if (l !== null && r === null) return false
  if (l === null && r !== null) return false

  if (l.val !== r.val) return false

  if(!isMirror(l.left, r.right)) return false
  if(!isMirror(l.right, r.left)) return false

  return true
}

function isSymmetric(root: TreeNode | null): boolean {
  return isMirror(root.left, root.right)
};
// @lc code=end

