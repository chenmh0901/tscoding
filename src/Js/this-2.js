const obj={
  name:'123',
  fn:()=>console.log(this.name),
  fn2:()=>this.name
}

const obj2={
  name:'123',
  fn:function(){console.log(this.name)},
  fn2:function(){return this.name}
}

obj.fn() // undefined
obj2.fn() // 123


obj2.fn.apply({name:'abc'})

const obj3=obj2.fn.bind({name:'aaa'})

obj3() // undefined

console.log(obj2.fn2.apply({name:'bbbb'})) 

console.log(obj.fn2.call({name:'cccc'})) 

var name='ddd' // 浏览器环境添加全局变量
globalThis.name='eee' // node 环境添加全局变量

const obj4={
  data:1,
  getData:function(){
    (function(){console.log(this.name)})()
  }
}
obj4.getData()
