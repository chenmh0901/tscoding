function fetchDate(url, successCallback, errorCallback) {
  setTimeout(() => {
    if (url == '/name') {
      let names = ['abc', 'bac', 'cab']
      // 需要使用回调函数返回数据
      successCallback(names)

      // return names 不能返回请求成功的数据
    } else {
      let errorMessage = '请求失败'
      errorCallback(errorMessage)
    }
  }, 1000)
}

fetchDate(
  '/name',
  (res) => {
    console.log(res)
  },
  (err) => {
    console.log(err)
  },
)

function fetchDatePromise(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url == '/name') {
        let names = ['abc', 'bac', 'cab']
        resolve(names)
      } else {
        let errorMessage = '请求失败'
        reject(errorMessage)
      }
    }, 1000)
  })
}

const promise = fetchDatePromise('/name')

promise.then((res) => {
  console.log(res)
})

fetchDatePromise('/name')
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
