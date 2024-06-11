function maxArea(height: number[]): number {
  let l: number = 0,
    r: number = height.length - 1
  let ans: number = 0
  while (l < r) {
    let area: number = Math.min(height[l], height[r]) * (r - l)
    ans = Math.max(ans, area)
    if (height[l] <= height[r]) {
      ++l
    } else {
      --r
    }
  }
  return ans
}

test('maxArea', () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toStrictEqual(49)
  expect(maxArea([1, 1])).toStrictEqual(1)
  expect(maxArea([4, 3, 2, 1, 4])).toStrictEqual(16)
  expect(maxArea([1, 2, 1])).toStrictEqual(2)
})
