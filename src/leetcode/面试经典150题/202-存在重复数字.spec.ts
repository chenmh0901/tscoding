function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && i - map.get(nums[i])! <= k) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
};
test('containsNearbyDuplicate', () => {
  expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBe(true);
  expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toBe(true);
  expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toBe(false);
  expect(containsNearbyDuplicate([99, 99], 2)).toBe(true);
})
