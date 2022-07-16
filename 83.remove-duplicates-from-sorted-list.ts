/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null
  if (!head.next) return head
  let prev = head
  let current = head.next
  while (current) {
    while (current && current.val === prev.val) {
      current = current.next as ListNode
    }
    prev.next = current
    prev = current

    if (current) {
      current = current.next as ListNode
    }
    return head
  }
};
// @lc code=end

