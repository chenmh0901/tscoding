let obj={
  name:'nihao',
  age:18
}

Object.keys(obj).forEach(key=>{
  Object.defineProperty(obj,key,{
    get:function (){
      console.log(`get ${key}`)
    },
    set:function (val){
      console.log(`set ${key} ${val}`)
    }
  }
)})

obj.name='hello'
console.log(obj.age)
