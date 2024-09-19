Function.prototype.myapply = function (context, argArray) {
  // 1.获取需要被执行的函数
  var fn = Symbol('fn')

  // 2.判断context是否为对象，如果不是对象，则指向 window | global
  // edge case
  context = context !== null && context !== undefined ? Object(context) : global

  // 3.将函数挂载到context上，执行函数
  context[fn] = this
  argArray = argArray ? argArray : []
  const result = context[fn](...argArray)
  delete context.fn

  // 4.将最终结果返回出去
  return result
}
