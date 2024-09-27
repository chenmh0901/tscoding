let activeReactvieFn=null;

class Depend {
  constructor() {
    this.reactiveFns = new Set()
  }

  depend() {
    if (activeReactvieFn) {
      this.reactiveFns.add(activeReactvieFn)
    }
  }

  notify() {
    this.reactiveFns.forEach((fn) => fn())
  }
}

function watchFn(fn){
  activeReactvieFn=fn
  fn()
  activeReactvieFn=null
}

const targetMap=new WeakMap()
function getDepend(target,key){
  let map=targetMap.get(target)
  if(!map){
    map=new Map();
    targetMap.set(target,map)
  }

  let depend=map.get(key)
  if(!depend){
    depend=new Depend()
    map.set(key,depend)
  }
  return depend
}

function reactive(obj) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      const depend=getDepend(target,key)
      depend.depend()

      return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
      Reflect.set(target, key, value, receiver)

      const depend=getDepend(target,key)
      depend.notify()
    },
  })
}
const objProxy = reactive({
  name: 'zhangsan',
  age: 18,
})

watchFn(function (){
  console.log(objProxy.name,'watch obj name' )
  console.log(objProxy.age,'watch obj age' )
})

objProxy.name='lisi'
objProxy.age=20
