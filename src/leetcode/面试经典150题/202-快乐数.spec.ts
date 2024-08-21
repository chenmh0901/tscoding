function isHappy(n: number): boolean {
  const set = new Set<number>();
  while (n !== 1 && !set.has(n)) {
    set.add(n);
    n = sumOfSquares(n);
  }
  return n === 1;
};
function sumOfSquares(n: number): number {
  let sum = 0;
  while (n > 0) {
    const digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
}

test('isHappy', () => {
  expect(isHappy(19)).toBe(true);
  expect(isHappy(2)).toBe(false);
})

