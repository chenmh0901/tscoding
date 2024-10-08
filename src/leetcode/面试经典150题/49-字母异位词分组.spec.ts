function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (const str of strs) {
    const key = Array.from(str).sort().join('');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key)?.push(str);
  }
  return Array.from(map.values());
};

test('groupAnagrams', () => {
  expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toStrictEqual([
    ["eat", "tea", "ate"],
    ["tan", "nat"],
    ["bat"],
  ]);
})
