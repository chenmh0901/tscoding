function emptyValid(value: any) {
  if (value === null || value === undefined) {
    return false;
  } else if (typeof value === 'string') {
    return value.trim() === '';
  } else if (Array.isArray(value)) {
    return value.length === 0;
  } else if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  } else if (value instanceof Object) {
    return Object.keys(value).length === 0;
  }
  return false;
}

test('emptyValid', () => {
  expect(emptyValid(null)).toBeFalsy();
  expect(emptyValid(undefined)).toBeFalsy();
  expect(emptyValid('')).toBeTruthy();
  expect(emptyValid(' ')).toBeTruthy();
  expect(emptyValid([])).toBeTruthy();
  expect(emptyValid([1])).toBeFalsy();
  expect(emptyValid(new Map())).toBeTruthy();
  expect(emptyValid(new Map([[1, 2]]))).toBeFalsy();
  expect(emptyValid(new Set())).toBeTruthy();
  expect(emptyValid(new Set([1]))).toBeFalsy();
  expect(emptyValid({})).toBeTruthy();
  expect(emptyValid({ a: 1 })).toBeFalsy();
});
