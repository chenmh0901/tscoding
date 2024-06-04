/*
 * 动态规划
 *
 * 状态转移方程更新每天持有股票和不持有股票的最大利润
 */

function maxProfit(prices: number[]): number {
  const length = prices.length
  if (length < 2) return 0

  const dp: number[][] = new Array(length)
    .fill(0)
    .map(() => new Array(2).fill(0))

  dp[0][0] = 0
  dp[0][1] = -prices[0]

  for (let i = 1; i < length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
  }
  return dp[length - 1][0]
}

test('maxProfit', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
})
