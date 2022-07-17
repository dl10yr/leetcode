/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let dummy = new ListNode(0)
  let current1: ListNode | null = l1
  let current2: ListNode | null = l2
  let current3: ListNode | null = dummy
  let carry: number = 0

  while (current1 || current2 || carry) {
    let x: number = (current1?.val) ?? 0
    let y: number = (current2?.val) ?? 0

    let sum: number = x + y + carry
    carry = Math.floor(sum / 10)
    current3.next = new ListNode(sum % 10)

    current1 = current1?.next
    current2 = current2?.next
    current3 = current3.next
  }

  return dummy.next

};
// @lc code=end

