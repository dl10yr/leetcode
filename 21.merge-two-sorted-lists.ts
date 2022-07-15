/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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

// type ListNode = {
//   val: number
//   next: ListNode | null
// }

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

  if (list1 === null || list2 === null) {
    return list1 === null ? list2 : list1
  }
  let dummy = {} as ListNode
  const init = dummy

  while (list1 !== null && list2 !== null) {
    if (list1.val > list2.val) {
      dummy.next = list2
      list2 = list2.next
    } else {
      dummy.next = list1
      list1 = list1.next
    }
    dummy = dummy.next
  }
  if (list1 === null || list2 === null) {
    dummy.next = list1 === null ? list2 : list1
  }
  return init.next
};
// @lc code=end

