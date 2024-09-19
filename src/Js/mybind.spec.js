Function.prototype.mybind = function (context, ...argArray) {
  // 1.获取真实需要被执行的函数
  var fn = this

  context = context !== unll && context !== undefined ? Object(context) : window
  // 2.返回一个代理函数
  function proxyFn(...args) {
    // 3.在代理函数中，执行真实需要被执行的函数
    context.fn = fn
    var finalArgs = [...argArray, ...args] //argArray.concat(args);
    var result = context.fn(...finalArgs)
    delete context.fn
    return result
  }
  return proxyFn
}

function sum(num1, num2, num3, num4) {
  console.log(num1, num2, num3, num4)
}
