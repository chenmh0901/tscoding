function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map<string, number>();
  for (const c of magazine) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  for (const c of ransomNote) {
    if (!map.has(c) || map.get(c) === 0) {
      return false;
    }
    map.set(c, (map.get(c) as number) - 1);
  }
  return true;
};

test('canConstruct', () => {
  expect(canConstruct('a', 'b')).toBe(false);
})
