setTimeout(function(){
    console.log('setTimeout1')

    new Promise(function(resolve){
      resolve();
    }).then(()=>{
        new Promise(function(resolve){
            resolve();
        }).then(()=>{
            console.log('then4')
        })
        console.log('then2')
    })
})

// new Promise 立即执行
new Promise((resolve)=>{
    console.log('promise1')
    resolve()
}).then(()=>{
    console.log('then1')
})

setTimeout(function(){
    console.log('setTimeout2')
},0)

console.log('start')

queueMicrotask(()=>{
    console.log('queueMicrotask')
})

new Promise((resolve)=>{
    resolve()
}).then(()=>{
    console.log('then3')
})

// promise1
// start
// then1
// queueMicrotask
// then3
// setTimeout1
// then2
// then4
// setTimeout2
