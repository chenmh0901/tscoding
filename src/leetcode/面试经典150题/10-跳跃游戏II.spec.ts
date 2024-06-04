/*
 - 如果某一个作为起跳点的格子可以跳跃的距离是3，那么表示后面3个格子都可以作为起跳点。
  - 可以对每一个能作为起跳点的格子都尝试跳一次，把能跳到最远的距离不断更新。
 - 如果从这个起跳点起跳叫做第1次跳跃，那么从后面3个格子起跳都可以叫做第2次跳跃。
 - 所以，当一次跳跃结束时，从下一个格子开始，到现在能跳到最远的距离都是下一次跳跃的起跳点。
  - 对每一次跳跃用for循环来模拟。
    - 跳完一次之后，更新下一次 起跳点 的范围。
    - 在新的范围内跳，更新能跳到最远的距离。
 - 记录 跳跃 次数，如果跳到了终点，就得到了结果。
*/

function Jump(nums: number[]): number {
  // let start = 0
  // let end = 1
  // let step = 0

  // while (end < nums.length) {
  //   let max = 0
  //   for (let i = start; i < end; i++) {
  //     max = Math.max(max, i + nums[i])
  //   }
  //   start = end
  //   end = max + 1
  //   step++
  // }

  let max = 0
  let end = 0
  let step = 0
  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, i + nums[i])
    if (i === end) {
      end = max
      step++
    }
  }
  return step
}

test('Jump', () => {
  expect(Jump([2, 3, 1, 1, 4])).toBe(2)
  expect(Jump([2, 3, 0, 1, 4])).toBe(2)
})
