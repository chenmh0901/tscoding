import { usemethods } from './methods'

const { useemptyArray, useforIn, usepushArray, usepreMemoArray } = usemethods()

//slow
it('emptyArray', () => {
  expect(useemptyArray([1, 2, 3], (n) => n + 1)).toEqual([2, 3, 4])
})
//fast
it('forIn', () => {
  expect(useforIn([1, 2, 3], (n) => n + 1)).toEqual([2, 3, 4])
})
// faster
it('pushArray', () => {
  expect(usepushArray([1, 2, 3], (n) => n + 1)).toEqual([2, 3, 4])
})
// fastest
it('preMemoArray', () => {
  expect(usepreMemoArray([1, 2, 3], (n) => n + 1)).toEqual([2, 3, 4])
})
