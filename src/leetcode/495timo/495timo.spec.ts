function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let totalduration = 0
  for (let i = 0; i < timeSeries.length - 1; i++) {
    if (timeSeries[i + 1] > timeSeries[i] + duration) {
      totalduration += duration
    } else {
      totalduration += timeSeries[i + 1] - timeSeries[i]
    }
  }
  return totalduration + duration
}
test('timo', () => {
  expect(findPoisonedDuration([1, 4], 2)).toBe(4)
  expect(findPoisonedDuration([1, 2], 2)).toBe(3)
})
