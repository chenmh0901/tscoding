type F = (x: number) => number
const compose = (func: F[]) => {
  return (x: number) => func.reduceRight((acc, fn) => fn(acc), x)
}
test('compose', () => {
  const add = (x: number) => x + 1
  const multiply = (x: number) => x * 2
  const addMultiply = compose([add, multiply])
  expect(addMultiply(1)).toBe(3)
})
