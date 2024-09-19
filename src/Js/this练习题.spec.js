var name='window'

var obj1={
  name:'person1',
  foo1:()=> console.log(this.name),
  foo2:function(){
    console.log(this.name)
  },
  foo3:function(){
    return function(){
      console.log(this.name)
    }
  },
  foo4:function(){
    return ()=>{
      console.log(this.name)
    }
  }
}

var obj2={name:'person2'}

obj1.foo1() // window
obj1.foo2() // person1
obj1.foo3()() // window
obj1.foo4()() // person1
obj1.foo1.call(obj2) // window
obj1.foo2.call(obj2) // person2
obj1.foo3.call(obj2)() // window
obj1.foo3().call(obj2) // window
obj1.foo4().call(obj2) // person1
