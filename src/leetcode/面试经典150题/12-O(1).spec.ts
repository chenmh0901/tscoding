class RandomizedSet {
  private nums: number[]
  private indices: Map<number, number>

  constructor() {
    this.nums = []
    this.indices = new Map()
  }

  /*
    建立hash索引
  */
  insert(val: number): boolean {
    if (this.indices.has(val)) {
      return false
    }
    const index = this.nums.length
    this.nums.push(val)
    this.indices.set(val, index)
    return true
  }
  /*
    - 首先，检查要删除的值是否存在。如果不存在，返回 false。
    - 如果存在，获取该值在数组中的索引。
    - 将数组的最后一个元素移动到要删除的元素的位置。这样做的目的是填补由于删除元素而留下的空位。
    - 更新移动后的元素在索引映射中的位置。
    - 从数组的末尾删除一个元素。由于我们已经将最后一个元素移动到了其他位置，所以这将删除原来的最后一个元素。
    - 最后，从索引映射中删除要删除的元素。
  */
  remove(val: number): boolean {
    if (!this.indices.has(val)) return false
    const index = this.indices.get(val) as number
    this.nums[index] = this.nums[this.nums.length - 1]
    this.indices.set(this.nums[index], index)
    this.nums.pop()
    this.indices.delete(val)
    return true
  }

  getRandom(): number {
    const index = Math.floor(Math.random() * this.nums.length)
    return this.nums[index]
  }
}

test('RandomizedSet', () => {
  const randomizedSet = new RandomizedSet()
  expect(randomizedSet.insert(1)).toBeTruthy()
  expect(randomizedSet.remove(2)).toBeFalsy()
  expect(randomizedSet.insert(2)).toBeTruthy()
  expect(randomizedSet.getRandom()).toBeGreaterThanOrEqual(1)
  expect(randomizedSet.remove(1)).toBeTruthy()
  expect(randomizedSet.insert(2)).toBeFalsy()
  expect(randomizedSet.getRandom()).toBe(2)
})
