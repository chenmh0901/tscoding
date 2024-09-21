const obj={
    name:'zhangsan',
    age:18
}

const proxyObj=new Proxy(obj,{
    get(target,key){
        console.log(`getting ${key} value`,target)
        return target[key]
    },
    set(target,key,newValue){
        console.log(`setting ${key} value to ${newValue}`,target)
        target[key]=newValue
    },
    has(target,key){
        console.log(`checking if ${key} exists`,target)
        return key in target
    },
    deleteProperty(target,key){
        console.log(`deleting ${key}`,target)
        delete target[key]
    }
  })

proxyObj.name='lisi'
console.log(proxyObj.age)
console.log('age' in proxyObj)
delete proxyObj.age
