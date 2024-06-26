/*
 * @lc app=leetcode id=973 lang=typescript
 *
 * [973] K Closest Points to Origin
 */

// @lc code=start
class BinaryHeap<T> {
  data: T[];
  /**
   * min: a < b; max: a > b
   */
  comparator: (a: T, b: T) => boolean;

  constructor(comparator: (a: T, b: T) => boolean) {
      this.data = [];
      this.comparator = comparator;
  }

  // push
  enqueue(value: T) {
      this.data.push(value);
      let trickleIndex = this.data.length - 1;

      // compare trickleNode with parent node
      // min, a < b
      while (trickleIndex > 0 && this.comparator(this.data[trickleIndex], this.data[this.getParentIndex(trickleIndex)])) {
          const parentIndex = this.getParentIndex(trickleIndex);
          const temp = this.data[trickleIndex];
          this.data[trickleIndex] = this.data[parentIndex];
          this.data[parentIndex] = temp;

          trickleIndex = parentIndex;
      }
  }

  // pop
  dequeue() {
      // dequeue
      // last node to top and trickle down
      const removedNode = this.data[0];
      this.data[0] = this.data[this.data.length - 1];
      this.data.pop();

      let trickleNodeIndex = 0;

      // while has comparable child, swap
      while (this.hasComparableChild(trickleNodeIndex)) {
          const smallerChildIndex = this.getComparableChild(trickleNodeIndex);
          // swap with child

          const temp = this.data[trickleNodeIndex];
          this.data[trickleNodeIndex] = this.data[smallerChildIndex];
          this.data[smallerChildIndex] = temp;

          trickleNodeIndex = smallerChildIndex;
      }

      return removedNode;
  }

  // get parent
  getParentIndex(index: number) {
      return Math.floor((index - 1) / 2);
  }

  // get left
  getLeftChild(index: number) {
      return index * 2 + 1;
  }

  // get right
  getRightChild(index: number) {
      return index * 2 + 2;
  }

  hasComparableChild(index: number) {
      const leftIndex = this.getLeftChild(index);
      const rightIndex = this.getRightChild(index);

      const hasSmalleftLeft =
          this.data[leftIndex] !== undefined && this.comparator(this.data[leftIndex], this.data[index]);

      return hasSmalleftLeft || (this.data[rightIndex] && this.comparator(this.data[rightIndex], this.data[index]));
  }

  getComparableChild(index: number) {
      const leftIndex = this.getLeftChild(index);
      const rightIndex = this.getRightChild(index);

      // if there is right child, there exists left child. right < left
      if (this.data[rightIndex] !== undefined && this.comparator(this.data[rightIndex], this.data[leftIndex])) {
          return rightIndex;
      }

      return leftIndex;
  }
}

function kClosest(points: number[][], k: number): number[][] {
  const maxHeap = new BinaryHeap<[number, number]>((a, b) => {
      const distanceA = Math.sqrt(a[0] * a[0] + a[1] * a[1])
      const distanceB = Math.sqrt(b[0] * b[0] + b[1] * b[1])

      return distanceA > distanceB
  })

  for (const pair of points) {
      maxHeap.enqueue([pair[0], pair[1]])
  }

  while (maxHeap.data.length > k) {
      maxHeap.dequeue()
  }

  return maxHeap.data
};
// @lc code=end

