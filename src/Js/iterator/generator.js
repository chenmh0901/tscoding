function *foo(){
  console.log('函数开始执行')

  const value1=1
  console.log(value1)
  // { value: 1, done: false }
  yield value1

  const value2=2
  console.log(value2)
  yield value2

  const value3=3
  console.log(value3)
  yield value1

  console.log('函数执行结束')
  return 0
} 

const generator=foo()

generator.next()
generator.next()
generator.next()
