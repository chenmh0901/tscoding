function GetDate(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url)
    }, 2000)
  })
}

// 1.第一种回调地狱

// GetDate('nihao').then((res) => {
//   GetDate(res+'aaa').then((res) => {
//     GetDate(res+'bbb').then((res) => {
//       GetDate(res+'ccc').then((res) => {
//         console.log(res)
//       })
//     })
//   })
// })

// 2.第二种回调地狱

// GetDate('nihao').then((res) => {
//   return GetDate(res+'aaa')
// }).then((res) => {
//   return GetDate(res+'bbb')
// }).then((res) => {
//   return GetDate(res+'ccc')
// })

// 3.使用 generator 函数解决回调地狱

function* FetchDate(url='default') {
  const res1 = yield GetDate(url)
  const res2 = yield GetDate(res1 + 'aaa')
  const res3 = yield GetDate(res2 + 'bbb')
  const res4 = yield GetDate(res3 + 'ccc')
  console.log(res4)
}

function execGenerator(genFn) {
  const generator = genFn()

  function exec(res) {
    const result = generator.next(res)
    if (result.done) {
      return result.value
    }
    result.value.then((res) => {
      exec(res)
    })
  }

  exec()
}

// const generator=FetchDate('nihao')

// generator.next().value.then((res)=>{
//   generator.next(res).value.then((res)=>{
//     generator.next(res).value.then((res)=>{
//       generator.next(res).value.then((res)=>{
//         console.log(res)
//       })
//     })
//   })
// })

// execGenerator(()=>FetchDate('nihao')) // 回调函数 
// execGenerator(FetchDate) 

async function AsyncGetDate(){
  const res1=await GetDate('nihao')
  const res2=await GetDate(res1+'aaa')
  const res3=await GetDate(res2+'bbb')
  const res4=await GetDate(res3+'ccc')
  console.log(res4)
}

AsyncGetDate()
