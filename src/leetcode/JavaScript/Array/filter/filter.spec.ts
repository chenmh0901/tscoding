const filter = (arr: number[], fn: (n: number, i: number) => any): number[] => {
  const newArray: number[] = []
  for (let i in arr) {
    const j = Number(i)
    if (fn(arr[i], j)) {
      newArray.push(arr[i])
    }
  }
  return newArray
}

test('filter', () => {
  expect(filter([1, 2, 3], (n) => n > 1)).toEqual([2, 3])
})
