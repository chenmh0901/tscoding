/*
这段代码定义了一个名为fn的函数。
它接受两个参数n和o。函数内部首先使用console.log打印出参数o的值，然后返回一个对象。
这个对象有一个名为fn的方法，这个方法接受一个参数m。
在方法内部，它调用了fn函数，并将参数m作为新的n值，参数n作为新的o值。
这样就形成了一个递归调用的结构。

这种函数结构被称为"柯里化"（currying）。柯里化是一种将多个参数的函数转换为一系列只接受一个参数的函数的技术。
通过柯里化，我们可以将一个函数的参数逐步传递，每次传递一个参数，从而实现更加灵活和可复用的函数组合。
*/

function fn(n, o) {
  console.log(o)
  return {
    fn: function (m) {
      return fn(m, n)
    },
  }
}

const a = fn(0)
a.fn(1)
a.fn(2)
a.fn(3)
const b = fn(0).fn(1).fn(2).fn(3)
const c = fn(0).fn(1)
c.fn(2)
c.fn(3)
