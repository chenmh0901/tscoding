function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const map = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
    map.set(t[i], (map.get(t[i]) || 0) - 1);
  }
  for (const value of map.values()) {
    if (value !== 0) {
      return false;
    }
  }
  return true;
};

test('isAnagram', () => {
  expect(isAnagram('anagram', 'nagaram')).toBe(true);
  expect(isAnagram('rat', 'car')).toBe(false);
  expect(isAnagram('anagram', 'nagarma')).toBe(true);
})
