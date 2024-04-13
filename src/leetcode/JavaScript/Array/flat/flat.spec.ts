type MultiDimensionalArray = (number | MultiDimensionalArray)[]

var flat = function (
  arr: MultiDimensionalArray,
  n: number,
): MultiDimensionalArray {
  let res: MultiDimensionalArray = []
  const flattening = (nums: MultiDimensionalArray, l: number) => {
    for (const num of nums) {
      if (Array.isArray(num) && l > 0 && l <= n) {
        flattening(num, l - 1)
      } else {
        res.push(num)
      }
    }
  }
  flattening(arr, n)
  return res
}
test('flat', () => {
  expect(flat([1, 2, [3, 4, [5, 6]]], 1)).toEqual([1, 2, 3, 4, [5, 6]])
  expect(flat([1, 2, [3, 4, [5, 6]]], 2)).toEqual([1, 2, 3, 4, 5, 6])
  expect(flat([1, 2, [3, 4, [5, [6]]]], 2)).toEqual([1, 2, 3, 4, 5, [6]])
})
