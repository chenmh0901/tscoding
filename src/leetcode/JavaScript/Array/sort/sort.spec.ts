type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue }
type NumberFn<T> = (value: JSONValue) => T

function sortBy(arr: JSONValue[], fn: NumberFn<number>): JSONValue[] {
  return arr.sort((a, b) => fn(a) - fn(b))
}
