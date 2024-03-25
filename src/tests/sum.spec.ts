const sum = (a: number, b: number) => a + b
it('1+2=3', () => {
  expect(sum(1, 2)).toBe(3)
})
test('1+2=3', () => {
  expect(sum(1, 2)).toBe(3)
})
