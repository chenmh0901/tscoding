function summaryRanges(nums: number[]): string[] {
  const res: string[] = [];
  let i = 0;
  while (i < nums.length) {
    let j = i;
    while (j + 1 < nums.length && nums[j + 1] === nums[j] + 1) {
      j++;
    }
    if (i === j) {
      res.push(`${nums[i]}`);
    } else {
      res.push(`${nums[i]}->${nums[j]}`);
    }
    i = j + 1;
  }
  return res;
};

test('summaryRanges', () => {
  expect(summaryRanges([0, 1, 2, 4, 5, 7])).toEqual(["0->2", "4->5", "7"]);
  expect(summaryRanges([0, 2, 3, 4, 6, 8, 9])).toEqual(["0", "2->4", "6", "8->9"]);
  expect(summaryRanges([])).toEqual([]);
  expect(summaryRanges([-1])).toEqual(["-1"]);
  expect(summaryRanges([0])).toEqual(["0"]);
})
