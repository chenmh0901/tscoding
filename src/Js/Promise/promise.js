class Person{
  constructor(callback){
    let foo=function(){

    }

    let bar=function(){

    }

    callback(foo,bar);
  }
}

// executor 函数会立即执行 构造函数
let p=new Person(()=>{
  console.log('callback')
})

let promise=new Promise((resolve)=>{
  resolve('success')
})
