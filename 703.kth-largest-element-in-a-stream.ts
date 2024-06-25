/*
 * @lc app=leetcode id=703 lang=typescript
 *
 * [703] Kth Largest Element in a Stream
 */

// @lc code=start
class KthLargest {
    heap: MinHeap

    constructor(k: number, nums: number[]) {
        this.heap = new MinHeap(k, nums)
    }
    add(num: number): number {
        return this.heap.add(num)
    }
}

class MinHeap {
    heap: number[]
    maxHeapLength: number

    constructor(maxHeapLength: number = Number.MAX_SAFE_INTEGER, array: number[] = []){
        this.heap = []
        this.maxHeapLength = maxHeapLength
        array.forEach(number => this.add(number))
    }

    add(val: number): number {
        this.heap.push(val)
        this.bubbleUp()
        if(this.heap.length > this.maxHeapLength){
           this.removeMin()
        }
        return this.heap[0]
    }

    private removeMin(){
        this.heap[0] = this.heap[this.heap.length - 1]
        this.heap.pop()
        this.bubbleDown(0)
    }

    private bubbleDown(currIndex){
        const childIndex = this.getSmallerChildIndex(currIndex)
        if(this.heap[currIndex] <= this.heap[childIndex]) return
        [this.heap[currIndex],this.heap[childIndex]] = [this.heap[childIndex],this.heap[currIndex]]
        this.bubbleDown(childIndex) 
        
    }
   
    private getSmallerChildIndex(index:number): number {
        const leftIndex = index * 2 + 1
        const rightIndex = leftIndex + 1
        if(leftIndex > this.heap.length - 1){
            return this.heap.length - 1
        }
        else if (rightIndex > this.heap.length - 1){
            return leftIndex
        }
        else if (this.heap[leftIndex] < this.heap[rightIndex]){
            return leftIndex
        }
        else return rightIndex
        
    }

    private bubbleUp(){
        let currIndex = this.heap.length - 1
        let parentIndex = this.getParentIndex(this.heap.length - 1)
        
        while(this.heap[currIndex] < this.heap[parentIndex]){
            [this.heap[currIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currIndex]]
            currIndex = parentIndex
            parentIndex = this.getParentIndex(parentIndex) 
        }
    }

    private getParentIndex(index:number){
       const whichChild = index % 2 === 0 
            ? index - 2
            : index - 1
        return Math.max(whichChild/2, 0)
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

