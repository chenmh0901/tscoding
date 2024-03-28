export const usemethods = () => {
  const useemptyArray = (
    arr: number[],
    fn: (n: number, i: number) => number,
  ): number[] => {
    const newArr: number[] = []
    for (let i = 0; i < arr.length; i++) {
      newArr[i] = fn(arr[i], i)
    }
    return newArr
  }
  const useforIn = (
    arr: number[],
    fn: (n: number, i: number) => number,
  ): number[] => {
    const newArr: number[] = []
    for (const i in arr) {
      newArr.push(fn(arr[i], Number(i)))
    }
    return newArr
  }
  const usepushArray = (
    arr: number[],
    fn: (n: number, i: number) => number,
  ): number[] => {
    const newArr: number[] = []
    arr.forEach((n, i) => {
      newArr.push(fn(n, i))
    })
    return newArr
  }
  const usepreMemoArray = (
    arr: number[],
    fn: (n: number, i: number) => number,
  ): number[] => {
    const newArr: number[] = new Array<number>(arr.length)
    for (let i = 0; i < arr.length; i++) {
      newArr[i] = fn(arr[i], i)
    }
    return newArr
  }
  return {
    useemptyArray,
    useforIn,
    usepushArray,
    usepreMemoArray,
  }
}
