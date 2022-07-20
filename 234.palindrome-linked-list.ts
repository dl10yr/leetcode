/*
 * @lc app=leetcode id=234 lang=typescript
 *
 * [234] Palindrome Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
  const values: number[] = []
  while(head !== null) {
    values.push(head.val)
    head = head.next
  }
  while (values.length) {
    if (values[0] === values[values.length -1]) {
      values.splice(0, 1)
      values.splice(values.length -1, 1)
    } else {
      return false
    }
  }
  return true
};
// @lc code=end

