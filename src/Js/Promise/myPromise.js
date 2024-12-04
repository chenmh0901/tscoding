const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

function execFunctionWithCatchError(fn, value, resolve, reject) {
  try {
    const result = fn(value)
    resolve(result)
  } catch (e) {
    reject(e)
  }
}

class MyPromise {
  constructor(executor) {
    // 当回调 resolve 或者 reject 时改变 Promise 状态
    this.status = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        // 微任务执行栈
        queueMicrotask(() => {
          // 当状态不是 pending 时，直接返回 状态只会被改变一次，多个resolve只保留第一个
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_FULFILLED
          this.value = value
          // 处理一个 Promise 多个 then 的情况
          this.onFulfilledCallbacks.forEach((fn) => fn(this.value))
        })
      }
    }

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_REJECTED
          this.reason = reason
          this.onRejectedCallbacks.forEach((fn) => fn(this.reason))
        })
      }
    }

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(onFulfilled, onRejected) {
    // 处理 catch 和 then onReject 为 undefined 的回调函数默认情况
    const DefaultOnFulfilled = (value) => {
      return value
    }
    onFulfilled = onFulfilled || DefaultOnFulfilled

    const DefaultOnRejected = (err) => {
      throw err
    }
    onRejected = onRejected || DefaultOnRejected

    // 链式调用
    return new MyPromise((resolve, reject) => {
      // 如果 then 在调用的时候状态已经被确定 => 解决异步问题 宏任务中的调用
      if (this.status === PROMISE_STATUS_FULFILLED) {
        execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
      }
      if (this.status === PROMISE_STATUS_REJECTED) {
        execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
      }

      // 将成功回调和失败回调添加到数组中
      if (this.status === PROMISE_STATUS_PENDING) {
        // 添加回调函数到数组中
        this.onFulfilledCallbacks.push(() => {
          execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
        })
        this.onRejectedCallbacks.push(() => {
          execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
        })
      }
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  finally(onFinally) {
    // 传递回调函数
    this.then(
      () => onFinally(),
      () => onFinally(),
    )
  }

  static resolve(value) {
    return new MyPromise((resolve) => {
      resolve(value)
    })
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason)
    })
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      const result = []
      let count = 0

      promises.forEach((promise, index) => {
        promise.then((res) => {
          result[index] = res
          count++
          if (count === promises.length) {
            resolve(result)
          }
        }, reject)
      })
    })
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(resolve, reject)
      })
    })
  }
}

module.exports = MyPromise
