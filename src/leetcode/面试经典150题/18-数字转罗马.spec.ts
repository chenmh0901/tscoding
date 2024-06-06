const valueSymbols: Array<{ value: number; symbol: string }> = [
  { value: 1000, symbol: 'M' },
  { value: 900, symbol: 'CM' },
  { value: 500, symbol: 'D' },
  { value: 400, symbol: 'CD' },
  { value: 100, symbol: 'C' },
  { value: 90, symbol: 'XC' },
  { value: 50, symbol: 'L' },
  { value: 40, symbol: 'XL' },
  { value: 10, symbol: 'X' },
  { value: 9, symbol: 'IX' },
  { value: 5, symbol: 'V' },
  { value: 4, symbol: 'IV' },
  { value: 1, symbol: 'I' },
]

function intToRoman(num: number): string {
  let roman = ''
  for (const { value, symbol } of valueSymbols) {
    //大数优先
    while (num >= value) {
      num -= value
      roman += symbol
    }
    if (num === 0) {
      break
    }
  }
  return roman
}

test('intToRoman', () => {
  expect(intToRoman(3)).toBe('III')
  expect(intToRoman(4)).toBe('IV')
  expect(intToRoman(9)).toBe('IX')
  expect(intToRoman(58)).toBe('LVIII')
  expect(intToRoman(1994)).toBe('MCMXCIV')
})
