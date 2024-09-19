Function.prototype.mycall = function(context,...rest){
  // 1.获取需要被执行的函数
  var fn=this;

  // 2.判断context是否为对象，如果不是对象，则指向 window | global
  context=(context!== null && context!==undefined) ? Object(context) : global;

  // 3.将函数挂载到context上，执行函数
  context.fn=fn;
  const result = context.fn(...rest);
  delete context.fn;

  // 4.将最终结果返回出去
  return result;
}

function sum (sum1,sum2){
  return sum1 + sum2;
}

function bark(){
  console.log(this.name);
}

console.log(sum.mycall(null,1,2)); // 3
bark.mycall({name:'dog'}); // dog
