class Calculator {
  private result: number
  constructor(value: number) {
    this.result = value
  }

  add(value: number): Calculator {
    this.result += value
    return this
  }

  subtract(value: number): Calculator {
    this.result -= value
    return this
  }

  multiply(value: number): Calculator {
    this.result *= value
    return this
  }

  divide(value: number): Calculator {
    if (value === 0) throw 'Division by zero is not allowed'
    this.result /= value
    return this
  }

  power(value: number): Calculator {
    this.result **= value
    return this
  }

  getResult(): number {
    return this.result
  }
}
test('Calculator', () => {
  const calculator = new Calculator(1)
  expect(calculator.add(1).subtract(1).getResult()).toBe(1)
})
