function TrappingRainWater(height: number[]) {
  let left = 0
  let right = height.length - 1
  let maxLeft = 0
  let maxRight = 0
  let result = 0

  // O(n)
  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left]
      } else {
        result += maxLeft - height[left]
      }
      left++
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right]
      } else {
        result += maxRight - height[right]
      }
      right--
    }
  }

  //使用数组循环的方式
  // let maxLeft = new Array(height.length).fill(0)
  // let maxRight = new Array(height.length).fill(0)
  // let result = 0
  // for (let i = 1; i < height.length; i++) {
  //   maxLeft[i] = Math.max(maxLeft[i - 1], height[i])
  // }
  // for (let i = height.length - 2; i >= 0; i--) {
  //   maxRight[i] = Math.max(maxRight[i + 1], height[i])
  // }
  // for (let i = 1; i < height.length - 1; i++) {
  //   let capacitor = Math.min(maxLeft[i], maxRight[i]) - height[i]
  //   result += capacitor
  // }

  return result
}
test('TrappingRainWater', () => {
  expect(TrappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6)
})
