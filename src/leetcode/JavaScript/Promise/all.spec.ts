type Fn<T> = () => Promise<T>

const promiseAll = <T>(functions: Fn<T>[]): Promise<T[]> => {
  return new Promise<T[]>((resolve, reject) => {
    if (functions.length === 0) {
      resolve([])
      return
    }
    const res: T[] = new Array(functions.length).fill(null)

    let resolvedCount = 0
    functions.forEach(async (el, idx) => {
      try {
        const subResult = await el()
        res[idx] = subResult
        resolvedCount++
        if (resolvedCount === functions.length) {
          resolve(res)
        }
      } catch (e) {
        reject(e)
      }
    })
  })
}
test('promiseAll', async () => {
  const delay = (ms: number) =>
    new Promise<number>((resolve) => setTimeout(() => resolve(ms), ms))
  const p1 = () => delay(1000)
  const p2 = () => delay(2000)
  const p3 = () => delay(3000)

  const res = await promiseAll([p1, p2, p3])
  expect(res).toEqual([1000, 2000, 3000])
})
