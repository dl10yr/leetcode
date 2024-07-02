/*
 * @lc app=leetcode id=215 lang=typescript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
class MaxHeap {
  heap: number[]

  constructor(arr: number[]) {
      this.heap = []
      this.buildHeap(arr)
  }

  findLargest(parent: number): number {
      const left = this.leftChild(parent);
      const right = this.rightChild(parent);
      let largest: number = parent;

      if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
          largest = left;
      }
      if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
          largest = right;
      }

      return largest;
  }

  leftChild(parent: number): number {
      return parent * 2 + 1;
  }

  rightChild(parent: number): number {
      return parent * 2 + 2;
  }

  swap(a: number, b: number): void {
      let temp = this.heap[a];
      this.heap[a] = this.heap[b];
      this.heap[b] = temp;
  }

  filterDown(): void {
      let current: number = 0;

      while (current < this.heap.length) {
          let largest = this.findLargest(current);

          if (largest !== current) {
              this.swap(current, largest);
              current = largest;
          } else {
              break;
          }
      }
  }

  pop(): number {
      let result: number = this.heap[0];
      this.heap[0] = this.heap.pop() as number;
      this.filterDown();
      return result;
  }

  buildHeap(arr: number[]): void {
      this.heap.push(...arr)
      const n = arr.length
      const heapify = (parent: number): void => {
          let largest = this.findLargest(parent)

          if (largest !== parent) {
              this.swap(largest, parent)
              heapify(largest)
          }
      }

      for (let i = Math.floor((n / 2) - 1); i >= 0; i--) {
          heapify(i)
      }
  }
}

function findKthLargest(nums: number[], k: number): number {
  let heap: MaxHeap = new MaxHeap(nums);

  let result: number = 0;
  for (let i = 0; i < k; i++) {
      result = heap.pop();
  }
  return result;
};
// @lc code=end

