function isIsomorphic(s: string, t: string): boolean {
  const map = new Map<string, string>();
  const set = new Set<string>();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      if (map.get(s[i]) !== t[i]) {
        return false;
      }
    } else {
      if (set.has(t[i])) {
        return false;
      }
      map.set(s[i], t[i]);
      set.add(t[i]);
    }
  }
  return true;
};

test('isIsomorphic', () => {
  expect(isIsomorphic('egg', 'add')).toBe(true);
  expect(isIsomorphic('foo', 'bar')).toBe(false);
  expect(isIsomorphic('paper', 'title')).toBe(true);
  expect(isIsomorphic('ab', 'aa')).toBe(false);
})
