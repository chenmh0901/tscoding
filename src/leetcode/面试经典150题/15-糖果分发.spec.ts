function candy(ratings: number[]): number {
  const len = ratings.length
  const left = new Array(len).fill(1)
  const right = new Array(len).fill(1)

  // 左遍历与右遍历，前缀积与后缀积
  for (let i = 1; i < len; i++) {
    if (ratings[i] > ratings[i - 1]) {
      left[i] = left[i - 1] + 1
    }
  }
  let count = left[len - 1]

  for (let i = len - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      right[i] = right[i + 1] + 1
    }
    count += Math.max(left[i], right[i])
  }
  return count
}
test('candy', () => {
  expect(candy([1, 0, 2])).toBe(5)
  expect(candy([1, 2, 2])).toBe(4)
})
