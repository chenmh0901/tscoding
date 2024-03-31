/**
 * @description reduce array values => single value
 * @param nums
 * @param fn
 * @param init
 * @returns
 */
const reduce = (
  nums: number[],
  fn: (accum: number, curr: number) => number,
  init: number,
): number => {
  let currentinit = init
  for (const i of nums) {
    currentinit = fn(currentinit, i)
  }
  return currentinit
}
test('reduce', () => {
  expect(reduce([1, 2, 3], (accum, curr) => accum + curr, 0)).toBe(6)
})
