const iteratorObj = {
  names: ['abc', 'cba'],
  // 可迭代协议
  [Symbol.iterator]: function () {
    let index = 0
    return {
      next: () => {
        if (index < this.names.length) {
          return { value: this.names[index++], done: false }
        } else {
          return { value: undefined, done: true }
        }
      },
    }
  },
}

for (const name of iteratorObj) {
  console.log(name)
}   

console.log(...iteratorObj)

Promise.all(iteratorObj).then((res) => {
  console.log(res)
})
