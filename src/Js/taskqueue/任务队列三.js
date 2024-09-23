Promise.resolve().then(()=>{
  console.log(0)
  // 1.返回确定的值 相当于 resolve(3)
  // return 3

  // 2.返回一个 thenable 的值
  // 多加一次微任务
  // return {
  //   then:function(resolve){
  //     resolve(3)
  //   }
  // }

  // 3.返回一个 Promise 对象
  // 不是普通值多加一次微任务
  // Promise.resolve(3) 又加一次微任务
  // 总共多加两次微任务
  // return Promise.resolve(3)
}).then((res)=>{
  console.log(res)
})

Promise.resolve().then(()=>{
  console.log(1)
}).then(()=>{
  console.log(2)
}).then(()=>{
  console.log(4)
})
