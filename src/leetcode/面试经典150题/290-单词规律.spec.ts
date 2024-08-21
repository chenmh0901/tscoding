function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(' ');
  if (pattern.length !== words.length) {
    return false;
  }
  const map = new Map<string, string>();
  const set = new Set<string>();
  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i])) {
      if (map.get(pattern[i]) !== words[i]) {
        return false;
      }
    } else {
      if (set.has(words[i])) {
        return false;
      }
      map.set(pattern[i], words[i]);
      set.add(words[i]);
    }
  }
  return true
};

test('wordPattern', () => {
  expect(wordPattern('abba', 'dog cat cat dog')).toBe(true);
  expect(wordPattern('abba', 'dog cat cat fish')).toBe(false);
  expect(wordPattern('aaaa', 'dog cat cat dog')).toBe(false);
  expect(wordPattern('abba', 'dog dog dog dog')).toBe(false);
})
