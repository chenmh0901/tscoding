function canCompleteCircuit(gas: number[], cost: number[]) {
  let n = gas.length // 获取加油站的总数量
  let i = 0 // 起点索引初始化为 0
  while (i < n) {
    let sumOfGas = 0,
      sumOfCost = 0 // 初始化当前路径的汽油总量和费用总量
    let cnt = 0 // 累积加油站计数器
    while (cnt < n) {
      // 从当前起点出发，遍历所有加油站
      let j = (i + cnt) % n // 计算当前需要访问的加油站索引
      sumOfGas += gas[j] // 累加当前加油站的汽油量
      sumOfCost += cost[j] // 累加当前加油站的费用
      if (sumOfCost > sumOfGas) {
        // 如果所需费用超过获得的汽油量，停止当前尝试
        break
      }
      cnt++ // 成功前进到下一个加油站
    }
    if (cnt == n) {
      // 如果成功完成了一圈
      return i // 返回当前起点索引
    } else {
      // 未能完成一圈
      i = i + cnt + 1 // 尝试下一个可能的起点 如果从x经过z无法到达y+1，那么从x到z之间的任何一个点都无法到达y，包括x和z。
    }
  }
  return -1 // 如果遍历所有起点都无法完成一圈，返回 -1
}

test('canCompleteCircuit', () => {
  expect(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])).toBe(3)
  expect(canCompleteCircuit([2, 3, 4], [3, 4, 3])).toBe(-1)
})
